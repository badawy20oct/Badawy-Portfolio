import Nav from "./Components/MainSections/Nav";
import HeroPage from "./Components/MainSections/Hero";
import ProjectsPage from "./projects/page"; // <- make sure this file exists
import Skills from "./Components/MainSections/Skills";
import ContactPage from "./Components/MainSections/Contact";
import About from "./Components/MainSections/About";
import Contact from "./Components/MainSections/Contact";

export default function Home() {
  return (
    <div>
      <Nav />
      <HeroPage />
      <Skills />
      <ProjectsPage /> {/* This will load all project cards */}
      <About />
      <ContactPage />
    </div>
  );
}
