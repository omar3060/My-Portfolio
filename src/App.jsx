import About from "./components/about/About";
import Contact from "./components/contact/contact";
import Home from "./components/home/Home";
import Nav from "./components/nav/nav";
import Projects from "./components/projects/projects";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <>
      <Home />
      <Nav />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
