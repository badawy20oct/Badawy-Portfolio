import Nav from "./Components/MainSections/Nav";
import Skills from "./Components/MainSections/Skills";
import About from "./Components/MainSections/About";
import Projects from "./Components/MainSections/Projects";
import Hero from "./Components/MainSections/Hero";
import Contact from "./Components/MainSections/Contact";

export default function Home() {
  return (
    <div className="relative">
      <Nav />

      <Hero />

      {/* Decorative Divider with accent color */}
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30" />

      {/* Skills Section */}
      <div className="bg-white">
        <Skills />
      </div>

      {/* Decorative Divider with accent color */}
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30" />

      {/* Projects Section with subtle background */}
      <div className="bg-gradient-to-b from-gray-50 to-white">
        <Projects />
      </div>

      {/* Decorative Divider */}
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30" />

      {/* About Section with subtle background */}
      <div className="bg-gradient-to-b from-white to-gray-50">
        <About />
      </div>

      {/* Decorative Divider */}
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30" />

      {/* Contact Section */}
      <div className="bg-gradient-to-b from-white to-gray-100">
        <Contact />
      </div>

      {/* Footer (Optional) */}
      <footer className="bg-primary text-white py-6 text-center">
        <p className="text-sm">
          © 2025 Abdelrhman Badawy. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
