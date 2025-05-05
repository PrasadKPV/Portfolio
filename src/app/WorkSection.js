"use client";

export default function WorkSection() {
  const projects = [
    { name: "Cart page", image: "/images/cartpage.webp", url: "https://github.com/prasadkpv" },
    { name: "Prompt X", image: "/images/prompt.webp", url: "https://github.com/prasadkpv" },
    { name: "Task Management", image: "/images/task.jpg", url: "https://github.com/prasadkpv" },
    { name: "Travel Booking", image: "/images/travel.jpg", url: "https://github.com/prasadkpv" },
    { name: "Face Recognition", image: "/images/face.webp", url: "https://github.com/prasadkpv" },
  ];

  return (
    <section
      id="work"
      className="snap-start min-h-screen py-16 flex flex-col bg-black text-white"
    >
      <h2 className="text-4xl font-bold mb-8 py-4 capitalize text-center">my work</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative w-full h-72 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-lg bg-white/10 backdrop-blur-md border border-white/30 cursor-pointer group ${
              index % 2 === 0 ? "translate-y-0" : "translate-y-20"
            }`}
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-50"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-50 transition-opacity duration-300 bg-black bg-opacity-40 text-white text-center text-lg font-semibold">
              {project.name}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
