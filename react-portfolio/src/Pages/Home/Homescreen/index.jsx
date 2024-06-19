import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyProjects from "../MyProjects";
import Resume from "../Resume";

export default function Home() {
    return(
        <>
            <HeroSection />
            <Resume />
            <MyProjects />
            <ContactMe />
            <Footer />
        </>
    );
}