import Header from "./navbar/Navbar.jsx";
import About from "../About.jsx";
import ContentSection from "./section/ContentSection.jsx";
import ProjectSection from "./project/ProjectSection.jsx";
import {FooterSection} from "./footer/FooterSection.jsx";

export default function Pages() {
    return (
        <main className="text-gray-400 bg-white body-font">
            <Header></Header>
            <About></About>
            <ContentSection></ContentSection>
            <ProjectSection></ProjectSection>
            <FooterSection></FooterSection>
        </main>
    )
}