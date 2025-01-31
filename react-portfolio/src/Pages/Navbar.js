import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Blue from "../iconComponents/blue";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  }

  const closeMenu = () => {
    setNavActive(false);
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, [])

  const navBarItems = [
    { to: "heroSection", label: "Home" },
    { to: "MyPortfolio", label: "Portfolio" },
    { to: "AboutMe", label: "About Me" },
    { to: "Contact", label: "Contact Me" }
  ]

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div>
        <Blue /> Ian Ote / <span>BACKEND DEVELOPER</span>
      </div>

      <a className={`nav__hamburger ${navActive ? "active" : ""}`} onClick={toggleNav}>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          {navBarItems.map((link) => (
            <li key={link.label}>
              <Link
                onClick={closeMenu} activeClass="navBar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to={link.to}
                className="navbar--content"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;