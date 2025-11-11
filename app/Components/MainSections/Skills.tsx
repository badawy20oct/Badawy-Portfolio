"use client";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

// Tech Skills Data
const TechSkillsImages = [
  { name: "HTML", icon: "/IMAGES/TechSkills/html-5-svgrepo-com.svg" },
  { name: "CSS", icon: "/IMAGES/TechSkills/css-3-svgrepo-com.svg" },
  {
    name: "Bootstrap",
    icon: "/IMAGES/TechSkills/bootstrap-4-logo-svgrepo-com.svg",
  },
  { name: "JavaScript", icon: "/IMAGES/TechSkills/javascript-svgrepo-com.svg" },
  { name: "React", icon: "/IMAGES/TechSkills/react-svgrepo-com.svg" },
  { name: "Next.js", icon: "/IMAGES/TechSkills/next-js-svgrepo-com.svg" },
  { name: "TypeScript", icon: "/IMAGES/TechSkills/typescript-svgrepo-com.svg" },
  { name: "API", icon: "/IMAGES/TechSkills/api-svgrepo-com.svg" },
  {
    name: "SQL",
    icon: "/IMAGES/TechSkills/sql-database-sql-azure-svgrepo-com.svg",
  },
  { name: "Python", icon: "/IMAGES/TechSkills/python-svgrepo-com.svg" },
  { name: "Django", icon: "/IMAGES/TechSkills/django-svgrepo-com.svg" },
];

// Soft & Concept Skills Data
const SoftConceptSkillsImages = [
  { name: "Research", icon: "/IMAGES/SoftSkills/research-svgrepo-com.svg" },
  {
    name: "Communication",
    icon: "/IMAGES/SoftSkills/communication-5-svgrepo-com.svg",
  },
  {
    name: "Time Management",
    icon: "/IMAGES/SoftSkills/gui-overtime-svgrepo-com.svg",
  },
  {
    name: "Teamwork",
    icon: "/IMAGES/SoftSkills/network-teamwork-svgrepo-com.svg",
  },
  {
    name: "Problem Solving",
    icon: "/IMAGES/SoftSkills/brainstorming-svgrepo-com.svg",
  },
  {
    name: "DataStructure",
    icon: "/IMAGES/SoftSkills/data-structure-.svg",
  },
  {
    name: "Algorithm",
    icon: "/IMAGES/SoftSkills/genetic-algorithm-svgrepo-com.svg",
  },
  {
    name: "Agile",
    icon: "/IMAGES/SoftSkills/agile-svgrepo-com.svg",
  },
];

const Skills = () => {

  const techRef = useRef(null);
  const softRef = useRef(null);

  const techX = useMotionValue(0);
  const softX = useMotionValue(0);

  // Tech slider animation
  useAnimationFrame((t: number

  ) => {
    if (!techRef.current) return;
    const cardWidth = 140 + 48;
    const totalWidth = cardWidth * TechSkillsImages.length;
    techX.set(((t / 15) % totalWidth) * -1); // speed 20
  });

  // Soft slider animation
  useAnimationFrame((t: number) => {
    if (!softRef.current) return;
    const cardWidth = 140 + 48;
    const totalWidth = cardWidth * SoftConceptSkillsImages.length;
    softX.set(((t / 15) % totalWidth) * -1); // slower speed 30
  });


  return (
    <section
      id="skills"
      className="overflow-hidden w-full bg-gradient-to-r from-white to-white pb-16 md:py-20  sm:mt-8"
    >
      {/* Title */}
      <h2 className="text-4xl text-center sm:text-3xl md:text-4xl font-bold mb-10 md:mb-14 text-primary">
        Skills
      </h2>

      {/* Tech Skills */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
          Tech Skills
        </h3>

        {/* Slider */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-8 sm:gap-10 md:gap-12"
            ref={techRef}
            style={{ x: techX }}
          >
            {[...TechSkillsImages, ...TechSkillsImages].map((skill, i) => (
              <div
                key={i}
                className="min-w-[100px] sm:min-w-[120px] md:min-w-[140px] h-28 flex flex-col items-center justify-center border border-gray-200 rounded-xl sm:rounded-2xl shadow-md bg-white"
              >
                <div className="mb-2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 relative">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <p className="text-xs sm:text-sm md:text-base font-medium text-gray-800">
                  {skill.name}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Soft & Concept Skills */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16">
        <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
          Soft & Concept Skills
        </h3>

        {/* Slider */}
        <div className="relative mx-auto w-full overflow-hidden">
          <motion.div
            className="flex gap-8 sm:gap-10 md:gap-12"
            ref={softRef}
            style={{ x: softX }}
          >
            {[...SoftConceptSkillsImages, ...SoftConceptSkillsImages].map(
              (skill, i) => (
                <div
                  key={i}
                  className="min-w-[100px] sm:min-w-[120px] md:min-w-[140px] h-28 flex flex-col items-center justify-center border border-gray-200 rounded-xl sm:rounded-2xl shadow-md bg-white"
                >
                  <div className="mb-2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 relative">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <p className="text-xs sm:text-sm md:text-base font-medium text-gray-800">
                    {skill.name}
                  </p>
                </div>
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;