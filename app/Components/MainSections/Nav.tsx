"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Button from "../Button";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Navigation links (match IDs of sections)
  const links = [
    { label: "About", href: "about" },
    { label: "Skills", href: "skills" },
    { label: "Projects", href: "projects" },
    { label: "Contact", href: "contact" },
  ];

  // Smooth scroll function
  const slowScrollTo = (
    elementId: string,
    duration: number = 1200,
    offset: number = 0
  ) => {
    const target = document.getElementById(elementId);
    if (!target) return;

    // Add custom offset here (negative to scroll further up)
    const targetPosition =
      target.getBoundingClientRect().top + window.pageYOffset - offset;

    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    const animation = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
  };

  return (
    <nav className="flex items-center justify-evenly w-full px-8 py-5 shadow-sm sticky top-0 bg-white backdrop-blur-md z-50 border-b border-gray-200">
      {/* Logo */}
      <Link
        href="#"
        className="text-primary font-extrabold text-3xl sm:text-4xl p-2"
        onClick={(e) => {
          e.preventDefault();
          slowScrollTo("Hero", 2000, 100);
        }}
      >
        Badawy
      </Link>

      {/* Desktop Links */}
      <div className="ml-32 hidden md:flex items-center justify-center gap-10 text-gray-500 text-lg font-medium mt-4">
        {links.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className="relative text-xl font-bold hover:text-secondary transition duration-300"
            onClick={(e) => {
              e.preventDefault();
              slowScrollTo(href, 2000, 100);
            }}
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Download CV Button */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 600 }}
      >
        <Button
          title="Download CV"
          className="text-lg mt-[18px] rounded-xl"
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/Files/Abdelrahman-Badawy-Frontend.pdf";
            link.download = "AbdelrahmanBadawyCV.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
        />
      </motion.div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 rounded-md text-primary hover:bg-gray-100 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-2xl flex flex-col items-center gap-6 py-6 text-lg font-medium z-40 animate-fade-in">
          {links.map(({ label, href }) => (
            <Link
              key={href}
              href="#"
              className="text-primary text-xl font-bold hover:text-secondary transition duration-200"
              onClick={(e) => {
                e.preventDefault();
                slowScrollTo(href, 1500, 100);
                setIsOpen(false);
              }}
            >
              {label}
            </Link>
          ))}
          <Button
            title="Download CV"
            className="text-md rounded-xl ml-8 "
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/Files/Abdelrahman-Badawy-Frontend.pdf";
              link.download = "AbdelrahmanBadawyCV.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          />
          ;
        </div>
      )}
    </nav>
  );
}

export default Navbar;
