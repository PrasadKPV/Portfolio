"use client";

import { useEffect } from "react";

export default function LandingSection() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://unpkg.com/@splinetool/viewer@1.9.89/build/spline-viewer.js";
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="landing"
      className="snap-start flex flex-col min-h-screen text-white p-8 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('images/mountain.jpg')" }}
    >
      <nav className="top-0 bg-[#000000] rounded-full shadow-[0_0_10px_rgba(0,0,0,0.8)] px-12 py-3 flex gap-12 text-white font-semibold z-50 w-max mx-auto border border-white/30 mb-8">
        <a href="#about" onClick={(e) => handleNavClick(e, "about")} className="hover:underline underline-offset-4 transition px-4 py-1">
          About
        </a>
        <a href="#work" onClick={(e) => handleNavClick(e, "work")} className="hover:underline underline-offset-4 transition px-4 py-1">
          Work
        </a>
        <a
          href="/resume.pdf"
          download
          className="hover:underline underline-offset-4 transition px-4 py-1"
        >
          Resume
        </a>
      </nav>

      <div className="flex flex-col md:flex-row justify-between w-full">
        {/* Left Text Content */}
        <div className="flex flex-col justify-center max-w-full md:max-w-[50%] space-y-4">
          <p className="font-extrabold text-4xl md:text-6xl text-left text-white" style={{ textShadow: "10px 0 20px black" }}>Hi, there!</p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white text-left" style={{ textShadow: "10px 0 20px black" }}>
            I&apos;m Poorna Venkata Prasad
          </h1>
          <p className="text-2xl md:text-4xl font-medium text-white text-left" style={{ textShadow: "10px 0 20px black" }}>
            Full stack developer
          </p>
        </div>

        {/* Right Spline 3D Model */}
        <div className="w-full md:w-[32rem] h-[24rem] md:h-[32rem] rounded-full bg-white shadow-[0_0_10px_rgba(0,0,0,0.8)] flex justify-center items-center overflow-hidden mt-8 md:mt-0">
          <spline-viewer
            url="https://prod.spline.design/owW3Li5T-sKts5SV/scene.splinecode"
            style={{ width: "150%", height: "150%" }}
          />
        </div>
      </div>
    </section>
  );
}
