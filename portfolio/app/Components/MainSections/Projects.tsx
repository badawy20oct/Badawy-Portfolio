"use client";

import {
  motion,
  useScroll,
  useMotionValue,
  useMotionValueEvent,
  animate,
  MotionValue,
} from "motion/react";
import { useRef } from "react";
import Image from "next/image";

// ===================== Project Data =====================
const projects = [
  {
    id: 1,
    name: "Portfolio",
    description: "A personal portfolio showcasing my skills and projects.",
    image: "/images/portfolio.png",
    url: "https://your-portfolio-link.com",
  },
  {
    id: 2,
    name: "Ecommerce",
    description: "An e-commerce store built with Next.js and Stripe.",
    image: "/images/ecommerce.png",
    url: "https://your-ecommerce-demo.com",
  },
  {
    id: 3,
    name: "DailyNews",
    description: "Admin dashboard with role-based access and analytics.",
    image: "/images/dashboard.png",
    url: "https://your-dashboard-demo.com",
  },
  {
    id: 4,
    name: "Dashboard",
    description: "Admin dashboard with role-based access and analytics.",
    image: "/images/dashboard.png",
    url: "https://dashboard-v1-demo.com",
  },
  {
    id: 5,
    name: "Dashboard V2",
    description: "Second version of the dashboard project.",
    image: "/images/dashboard.png",
    url: "https://dashboard-v2-demo.com",
  },
  {
    id: 6,
    name: "Dashboard V3",
    description: "Third iteration of dashboard project.",
    image: "/images/dashboard.png",
    url: "https://dashboard-v3-demo.com",
  },
];

// ===================== Mask Logic =====================
const left = `0%`;
const right = `100%`;
const leftInset = `20%`;
const rightInset = `80%`;
const transparent = `#0000`;
const opaque = `#000`;

function useScrollOverflowMask(scrollXProgress: MotionValue<number>) {
  const maskImage = useMotionValue(
    `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
  );

  useMotionValueEvent(scrollXProgress, "change", (value) => {
    if (value === 0) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
      );
    } else if (value === 1) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${right}, ${opaque})`
      );
    } else if (
      scrollXProgress.getPrevious() === 0 ||
      scrollXProgress.getPrevious() === 1
    ) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${rightInset}, ${transparent})`
      );
    }
  });

  return maskImage;
}

// ===================== Main Component =====================
export default function Projects() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
  const maskImage = useScrollOverflowMask(scrollXProgress);

  return (
    <section id="projects" className="relative w-full min-h-screen bg-white py-16">
      <h1 className="text-4xl font-bold text-center text-primary mb-10">
        Projects
      </h1>

      {/* Scrollable Projects */}
      <motion.ul
        ref={ref}
        style={{ maskImage, WebkitMaskImage: maskImage }}
        className="flex overflow-x-scroll gap-6 px-10 pb-10 no-scrollbar"
      >
        {projects.map((project) => (
          <motion.li
            key={project.id}
            className="flex-shrink-0 w-[240px] bg-gray-100 rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
          >
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center"
            >
              <Image
                src={project.image}
                alt={project.name}
                width={240}
                height={160}
                className="rounded-t-xl object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{project.name}</h2>
                <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                  {project.description}
                </p>
              </div>
            </a>
          </motion.li>
        ))}
      </motion.ul>

      <style>{`
        /* Hide scrollbar but keep scroll functionality */
        .no-scrollbar::-webkit-scrollbar {
          height: 6px;
          background: #fff3;
        }
        .no-scrollbar::-webkit-scrollbar-thumb {
          background: #3b82f6;
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
}
