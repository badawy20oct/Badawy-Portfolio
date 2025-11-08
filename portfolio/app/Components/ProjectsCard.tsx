// components/ProjectsCard.tsx
"use client";

import Link from "next/link";
import React from "react";

type Project = {
  name: string;
  description: string;
  image: string;
};

const ProjectsCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <Link
    ///projects/${project.name.toLowerCase()}
      href={`#`}
      className="block p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300 max-w-sm"
    >
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-70 object-cover rounded-md mb-4"
      />
      <h3 className="text-2xl font-bold mb-2 text-primary">{project.name}</h3>
      <p className="text-gray-600">{project.description}</p>
    </Link>
  );
};

export default ProjectsCard;
