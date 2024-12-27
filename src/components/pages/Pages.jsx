import Header from "./navbar/Navbar.jsx";
import About from "../About.jsx";
import ProjectSection from "./project/ProjectSection.jsx";
import {FooterSection} from "./footer/FooterSection.jsx";
import DescriptionSection from "./section/DescriptionSection.jsx";
import ContactResumeContent from "./contact/ContactResumeContent.jsx";

export default function Pages() {
    return (
        <main className=" overflow-hidden text-gray-400 bg-white body-font">
            <Header></Header>
            <About></About>
            <DescriptionSection></DescriptionSection>
            <ProjectSection></ProjectSection>
            <ContactResumeContent></ContactResumeContent>
            <FooterSection></FooterSection>
        </main>
    )
}