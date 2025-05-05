"use client";

import Image from "next/image";

export default function TechStackSection() {
  const skills = [
    { name: "HTML", icon: "/icons/html.svg" },
    { name: "CSS", icon: "/icons/css.svg" },
    { name: "JavaScript", icon: "/icons/javascript.svg" },
    { name: "React JS", icon: "/icons/react.svg" },
    { name: "Next JS", icon: "/icons/nextjs.svg" },
    { name: "Node JS", icon: "/icons/nodejs.svg" },
    { name: "Java", icon: "/icons/java.svg" },
    { name: "SQL", icon: "/icons/sql.svg" },
  ];

  return (
    <section
      id="techstack"
      className="snap-start min-h-screen p-8 flex flex-col bg-[#1a1a1a] text-white"
    >
      <h2 className="text-4xl font-bold mb-8 capitalize py-20 text-center">tech stack</h2>
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center gap-6 max-w-5xl">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-4 bg-white/20 backdrop-blur-md border border-white/30 shadow-[0_4px_30px_rgba(255,255,255,0.3)] rounded-lg p-4 w-48 cursor-default"
            >
              <Image src={skill.icon} alt={skill.name} width={40} height={40} />
              <span className="text-lg font-semibold">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
