import Nav from "./Components/MainSections/Nav";
import Skills from "./Components/MainSections/Skills";
import About from "./Components/MainSections/About";
import Projects from "./Components/MainSections/Projects";
import Hero from "./Components/MainSections/Hero";
import Contact from "./Components/MainSections/Contact";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects /> 
      <Contact />
    </div>
  );
}
