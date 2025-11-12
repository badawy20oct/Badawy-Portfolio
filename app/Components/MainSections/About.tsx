"use client";

import React from "react";
import { motion } from "framer-motion";

function Aboutpage() {
  return (
    <section
      id="about"
      className="relative z-10 w-full flex flex-col md:flex-row items-start md:items-center justify-start bg-white overflow-hidden mb-12"
    >
      {/* Right Column - Content */}
      <div className="w-full md:w-[70%] h-full p-6 sm:p-8 sm:pb-0 md:p-16 flex flex-col justify-center">
        <h2
          id="moreabout"
          className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary mb-6"
        >
          More About Me
        </h2>
        <p className="text-base lg:text-2xl ml-4 md:text-6xl sm:text-lg md:text-xl text-gray-700 leading-relaxed">
          I’m a Frontend Developer skilled in building responsive, SEO-friendly
          web applications using React and Next.js. Proficient in creating
          reusable UI components, implementing client- and server-side
          rendering, and integrating APIs. Familiar with state management and
          styling frameworks like Tailwind CSS. I’m motivated to learn, adapt to
          new technologies, and contribute to high-quality, user-focused
          products.
        </p>
      </div>

      {/* Left Column - Gradient Info Section */}
      <div className="relative top-8 w-full md:w-[30%] h-full flex flex-col justify-center md:p-8 mt-4 sm:relative left-8 sm:p-8 sm:py-0 xs:relative left-10 xs:px-4 xs:py-0  text-gray-700">
        <h3 className="text-lg md:text-xl font-semibold">Education</h3>
        <span className="text-base md:text-lg font-medium text-gray-700">
          Bachelor's degree in Computer Science <br />
          2023 - Modern Academy
        </span>

        <h3 className="text-lg md:text-xl font-semibold mt-1">
          Military Service
        </h3>
        <span className="text-base md:text-lg font-medium text-gray-700">
          Completed 2025
        </span>

        <h3 className="text-lg md:text-xl font-semibold mt-1">Language</h3>
        <span className="text-base md:text-lg font-medium text-gray-700">
          English - Excellent
        </span>
      </div>
    </section>
  );
}

export default Aboutpage;
