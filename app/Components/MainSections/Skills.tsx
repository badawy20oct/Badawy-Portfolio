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
  const techRef = useRef<HTMLDivElement>(null);
  const softRef = useRef<HTMLDivElement>(null);

  const techX = useMotionValue(0);
  const softX = useMotionValue(0);

  // Tech slider animation - FIXED
  useAnimationFrame((t: number) => {
    if (!techRef.current) return;

    // Use actual card width + gap (responsive)
    const cardWidth = 120; // Average card width
    const gap = 32; // Average gap between cards
    const totalWidth = (cardWidth + gap) * TechSkillsImages.length;

    // Smoother animation with modulo to prevent jumps
    const newX = ((t / 30) % totalWidth) * -1;
    techX.set(newX);
  });

  // Soft slider animation - FIXED
  useAnimationFrame((t: number) => {
    if (!softRef.current) return;

    const cardWidth = 120;
    const gap = 32;
    const totalWidth = (cardWidth + gap) * SoftConceptSkillsImages.length;

    // Slightly different speed for variety
    const newX = ((t / 35) % totalWidth) * -1;
    softX.set(newX);
  });

  // Triple the array for seamless infinite scroll
  const TechSkills = [
    ...TechSkillsImages,
    ...TechSkillsImages,
    ...TechSkillsImages,
    ...TechSkillsImages,
    ...TechSkillsImages,
  ];
  const SoftSkills = [
    ...SoftConceptSkillsImages,
    ...SoftConceptSkillsImages,
    ...SoftConceptSkillsImages,
    ...SoftConceptSkillsImages,
    ...SoftConceptSkillsImages,
  ];

  return (
    <section
      id="skills"
      className="overflow-hidden w-full bg-white py-12 sm:py-16 lg:py-20"
    >
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 text-primary">
        Skills
      </h2>

      {/* Tech Skills */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 lg:mb-20">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-primary mb-4 sm:mb-6 text-center lg:text-left max-w-7xl mx-auto">
          Tech Skills
        </h3>

        {/* Slider */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-6 sm:gap-8 lg:gap-10"
            ref={techRef}
            style={{ x: techX }}
          >
            {TechSkills.map((skill, i) => (
              <div
                key={`tech-${i}`}
                className="flex-shrink-0 w-[90px] sm:w-[110px] lg:w-[120px] h-24 sm:h-28 lg:h-32 flex flex-col items-center justify-center border border-gray-200 rounded-xl shadow-md bg-white p-2"
              >
                <div className="mb-1 sm:mb-2 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 relative flex-shrink-0">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    fill
                    className="object-contain"
                    loading="eager"
                  />
                </div>
                <p className="text-xs sm:text-sm font-medium text-gray-800 text-center line-clamp-1">
                  {skill.name}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Soft & Concept Skills */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-primary mb-4 sm:mb-6 text-center lg:text-left max-w-7xl mx-auto">
          Soft & Concept Skills
        </h3>

        {/* Slider */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-6 sm:gap-8 lg:gap-10"
            ref={softRef}
            style={{ x: softX }}
          >
            {SoftSkills.map((skill, i) => (
              <div
                key={`soft-${i}`}
                className="flex-shrink-0 w-[90px] sm:w-[110px] lg:w-[120px] h-24 sm:h-28 lg:h-32 flex flex-col items-center justify-center border border-gray-200 rounded-xl shadow-md bg-white p-2"
              >
                <div className="mb-1 sm:mb-2 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 relative flex-shrink-0">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    fill
                    className="object-contain"
                    loading="eager"
                  />
                </div>
                <p className="text-xs sm:text-sm font-medium text-gray-800 text-center line-clamp-1">
                  {skill.name}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
