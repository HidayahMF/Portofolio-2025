import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Websites from "./components/Websites";

const App = () => {
  return (
    <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white scroll-smooth">
      <Navbar />
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="websites"><Websites /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
};

export default App;
