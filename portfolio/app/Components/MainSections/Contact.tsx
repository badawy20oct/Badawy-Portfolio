"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

function ContactPage() {
  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-white px-6 md:px-20 py-16"
    >
      {/* Title */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center text-primary mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h1>

      {/* Content - Flex Section */}
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Section - More About Me */}
        <motion.div
          className="bg-whit rounded-lg shadow-lg p-8"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h2 id="moreabout" className="text-4xl font-semibold text-gray-700 mb-4">
            More About Me
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Frontend Developer skilled in building responsive, SEO-friendly web
            applications using React and Next.js. Proficient in creating
            reusable UI components, implementing client- and server-side
            rendering, and integrating APIs. Familiar with state management, and
            styling frameworks like Tailwind CSS. Motivated to learn, adapt to
            new technologies, and contribute to high-quality, user-focused
            products.
          </p>
        </motion.div>

        {/* Right Section - Contact Info */}
        <motion.div
          className="bg-white rounded-lg shadow-lg p-8"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
            Let's Connect
          </h3>

          <ul className="space-y-5 text-gray-700 text-lg">
            <li className="flex items-center gap-4">
              <FaLinkedin className="text-blue-700 text-2xl" />
              <a
                href="https://www.linkedin.com/in/abdelrahman-badawy-469789204/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Abdelrahman Badawy
              </a>
            </li>

            <li className="flex items-center gap-4">
              <FaGithub className="text-black text-2xl" />
              <a
                href="https://github.com/badawy20oct"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Abdelrahman GitHub
              </a>
            </li>

            <li className="flex items-center gap-4">
              <FaEnvelope className="text-red-600 text-2xl" />
              <a
                href="https://myaccount.google.com/u/1/?hl=ar&utm_source=OGB&utm_medium=act&gar=WzEyMF0&pageId=none"
                className="hover:underline"
              >
                Gmail
              </a>
            </li>

            <li className="flex items-center gap-4">
              <FaPhone className="text-green-600 text-2xl" />
              <span>+20 115 644 9473</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactPage;
