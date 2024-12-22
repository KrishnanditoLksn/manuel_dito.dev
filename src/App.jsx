import About from "./components/About.jsx";
import Header from "./components/pages/navbar/Navbar.jsx";
import ContentSection from "./components/pages/section/ContentSection.jsx";
import ProjectSection from "./components/pages/project/ProjectSection.jsx";
import {FooterSection} from "./components/pages/footer/FooterSection.jsx";

function App() {
    return (
        <main className="text-gray-400 bg-white body-font">
            <Header></Header>
            <About></About>
            <ContentSection></ContentSection>
            <ProjectSection></ProjectSection>
            <FooterSection></FooterSection>
        </main>
    );
}

export default App;