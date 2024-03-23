import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import ContactMe from "./components/ContactMe.jsx";

function App() {
    return (
        <main className="text-gray-400 bg-gray-900 body-font">
            <Navbar></Navbar>
            <About></About>
            <Skills></Skills>
            <ContactMe></ContactMe>
        </main>
    );
}

export default App;