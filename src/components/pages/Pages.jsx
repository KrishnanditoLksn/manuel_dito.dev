import Header from "./navbar/Navbar.jsx";
import About from "../About.jsx";
import ProjectSection from "./project/ProjectSection.jsx";
import {FooterSection} from "./footer/FooterSection.jsx";
import DescriptionSection from "./section/DescriptionSection.jsx";

export default function Pages() {
    return (
        <main className=" overflow-hidden text-gray-400 bg-white body-font">
            <Header></Header>
            <About></About>
            <DescriptionSection></DescriptionSection>
            <ProjectSection></ProjectSection>
            <FooterSection></FooterSection>
        </main>
    )
}