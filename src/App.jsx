import About from "./components/About.jsx";
import Header from "./components/pages/navbar/Navbar.jsx";
import ContentSection from "./components/pages/section/ContentSection.jsx";
import ProjectSection from "./components/pages/project/ProjectSection.jsx";

function App() {
    return (
        <main className="text-gray-400 bg-gray-700 body-font">
            <Header></Header>
            <About></About>
            <ContentSection></ContentSection>
            <ProjectSection></ProjectSection>
        </main>
    );
}

export default App;