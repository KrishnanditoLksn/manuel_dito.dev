import About from "./components/About.jsx";
import Header from "./components/pages/navbar/Navbar.jsx";
import ContentSection from "./components/pages/section/ContentSection.jsx";

function App() {
    return (
        <main className="text-gray-400 bg-gray-700 body-font">
            <Header></Header>
            <About></About>
            <ContentSection></ContentSection>
        </main>
    );
}

export default App;