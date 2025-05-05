"use client";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="snap-start min-h-screen py-16 flex flex-col bg-black text-white"
    >
      <h2 className="text-4xl font-bold mb-8 capitalize text-center">about me</h2>
      <div className="flex flex-col md:flex-row bg-white/10 backdrop-blur-md border border-white/30 shadow-[0_4px_30px_rgba(255,255,255,0.3)] rounded-lg p-6 gap-8 max-w-5xl mx-auto">
        {/* Left side card with image */}
        <div className="md:w-1/2 rounded-lg overflow-hidden shadow-lg">
          <img
            src="/images/pic.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Right side about text */}
        <div className="md:w-1/2 text-md italic leading-relaxed flex flex-col justify-center">
          <p>
            Hello! I am <b>Poorna Venkata Prasad</b>, I'm a passionate frontend developer with a solid foundation in both client-side and server-side technologies. I specialize in building responsive, user-friendly web applications using modern tools like <b>React</b> and <b>Next.js</b>. My development approach blends clean HTML and CSS structure with dynamic, scalable JavaScript functionality.
          </p>
          <p className="mt-4">
            On the backend, I have experience working with <strong>Node.js</strong>, <strong>Java</strong>, and relational databases like <strong>SQL</strong> - allowing me to contribute across the full stack when needed. I thrive on turning ideas into interactive digital experiences, with a focus on performance, accessibility, and maintainability.
            I'm always exploring new technologies and improving my skills to stay current in a fast-moving industry. Whether working on personal projects or collaborating with teams, I bring energy, precision, and a love for problem-solving to every line of code.
          </p>
        </div>
      </div>
    </section>
  );
}
