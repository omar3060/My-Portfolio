import React, { Suspense, lazy } from "react";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
const Projects = lazy(() => import("./components/projects/Projects"));
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <>
      <Home />
      <Nav />
      <Skills />
      <Services />
      <Suspense fallback={<div>Loading...</div>}>
        <Projects />
      </Suspense>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
