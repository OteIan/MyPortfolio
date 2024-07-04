import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
    const [navActive, setNavActive] = useState(false);

    // const toggleNav = () => {
    //     setNavActive(!navActive);
    // }

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
    return (
        <nav className={`navbar${navActive ? " active" : ""}`}>
            <div className="navbar--logo">
                <img src="./img/blue.png" alt="Logo" />
                <span className="navbar--logo--left">Ian Ote</span>
                <span className="navbar--logo--right">/ Backend Developer</span>
            </div>
            {/* <a className={`nav__hamburger${navActive ? " active" : ""}`} onClick={toggleNav}>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
            </a> */}
            <div className={`navbar--items${navActive ? " active" : ""}`}>
                <ul>
                    <li>
                        <Link
                            onClick={closeMenu} activeClass="navBar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="HeroSection"
                            className="navbar--content"
                        >
                            AboutMe
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={closeMenu} activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="Resume"
                            className="navbar--content"
                        >
                            Resume
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={closeMenu} activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="Projects"
                            className="navbar--content"
                        >
                            My Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={closeMenu} activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="Contact"
                            className="navbar--content"
                        >
                            Contact Me
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}