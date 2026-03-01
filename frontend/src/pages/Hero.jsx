import { useState, useEffect } from "react";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Software & Web Developer";

  useEffect(() => {
    let i = 0;
    let isDeleting = false;
    let timeout;

    const type = () => {
      if (!isDeleting) {
        setText(fullText.slice(0, i++));
        if (i <= fullText.length) {
          timeout = setTimeout(type, 70);
        } else {
          isDeleting = true;
          timeout = setTimeout(type, 1000); // pause before delete
        }
      } else {
        setText(fullText.slice(0, i--));
        if (i >= 0) {
          timeout = setTimeout(type, 40);
        } else {
          isDeleting = false;
          i = 0;
          timeout = setTimeout(type, 500);
        }
      }
    };

    type();

    return () => clearTimeout(timeout);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full px-6 md:px-12">
      {/* Glass Card */}
      <div
        className="
          backdrop-blur-2xl bg-white/20
          dark:bg-white/10
          border border-white/30
          shadow-2xl rounded-3xl
          p-10 md:p-16
          max-w-6xl w-full mx-auto
          flex flex-col md:flex-row items-center gap-12
        "
      >
        {/* Text Content */}
        <div className="text-center md:text-left">
          <p className="uppercase tracking-widest text-white/80 mb-4">
            Welcome to my portfolio
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              Deane Adrian Navarro
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-white/90 h-10">
            {text}
            <span className="animate-pulse">|</span>
          </h2>

          <p className="text-white/80 mt-6 max-w-xl mx-auto md:mx-0">
            I build modern, scalable, and visually stunning web applications
            with premium UI/UX design.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-4 rounded-xl bg-white text-purple-700 font-semibold hover:scale-105 transition shadow-lg"
            >
              View Projects
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 rounded-xl border border-white/50 text-white hover:bg-white/20 transition"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}