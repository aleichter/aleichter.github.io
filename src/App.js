import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Leadership from "./components/Leadership";
import Projects from "./components/Projects";
import Books from "./components/Books";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <main>
        <About />
        <Leadership />
        <Projects />
        <Books />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
