import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <>
      <Home />
      <Nav />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
