"use client";

import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="relative w-full bg-white py-12 sm:py-16 md:py-20 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Container */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-12">
          {/* Left Column - Main Content */}
          <motion.div
            className="w-full lg:w-[65%] order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-primary mb-6 sm:mb-8 md:mb-10">
              More About Me
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-700 leading-relaxed">
              I'm a{" "}
              <span className="font-semibold text-primary">
                Junior Frontend Developer
              </span>{" "}
              with a strong foundation in building modern, responsive web
              applications. I specialize in{" "}
              <span className="font-semibold">React</span> and{" "}
              <span className="font-semibold">Next.js</span>, with hands-on
              experience in creating reusable UI components, implementing both
              client-side and server-side rendering, and integrating RESTful
              APIs.
              <br />
              <br />
              I'm proficient in{" "}
              <span className="font-semibold">Tailwind CSS</span> for styling,
              familiar with state management solutions like Redux and Context
              API, and understand SEO best practices for web performance
              optimization. As a recent graduate eager to grow in the field, I'm
              committed to writing clean, maintainable code and staying updated
              with the latest frontend technologies. I'm passionate about
              contributing to user-focused products and collaborating with teams
              to deliver high-quality web experiences.
            </p>
          </motion.div>

          {/* Right Column - Info Cards */}
          <motion.div
            className="w-full lg:w-[35%] order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-3 sm:space-y-4 md:space-y-5">
              {/* Education Card */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 shadow-md border border-gray-100">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-primary mb-1">
                  🎓 Education
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-700 font-medium">
                  Bachelor's degree in Computer Science
                </p>
                <p className="text-xs sm:text-sm md:text-sm text-gray-600 mt-0.5">
                  2023 - Modern Academy
                </p>
              </div>

              {/* Military Service Card */}
              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 shadow-md border border-gray-100">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-primary mb-1">
                  🎖️ Military Service
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-700 font-medium">
                  Completed 2025
                </p>
              </div>

              {/* Language Card */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 shadow-md border border-gray-100">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-primary mb-1">
                  🌍 Language
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-700 font-medium">
                  English - Excellent
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
