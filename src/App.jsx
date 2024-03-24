import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import ContactMe from "./components/ContactMe.jsx";
import Header from "./components/pages/navbar/Navbar.jsx";
import ContentSection from "./components/section/ContentSection.jsx";

function App() {
    return (
        <main className="text-gray-400 bg-gray-900 body-font">
            <Header></Header>
            <About></About>
            <ContentSection></ContentSection>
            <Skills></Skills>
            <ContactMe></ContactMe>
        </main>
    );
}

export default App;