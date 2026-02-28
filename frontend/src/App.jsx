import { useState, useEffect } from "react";
import Navbar from "./component/Navbar";

import Home from "./pages/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contacts";

export default function App() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <div
      className="
        relative min-h-screen overflow-x-hidden
        bg-gradient-to-br
        from-indigo-800 via-purple-800 to-pink-800
        dark:from-neutral-950
        dark:via-slate-900
        dark:to-black
        text-gray-900
        dark:text-white
        transition-colors duration-500
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute inset-0 pointer-events-none
          bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.3),transparent_45%),
              radial-gradient(circle_at_75%_75%,rgba(255,255,255,0.2),transparent_45%)]
          dark:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_60%)]
          animate-pulse
        "
      />

      <Navbar dark={dark} setDark={setDark} />

      <main className="relative z-10 pt-24 space-y-24">
        <section id="home" className="min-h-screen flex items-center">
          <div className="m-auto w-full max-w-6xl px-6">
            <Home />
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="mx-auto w-full max-w-6xl px-6">
            <About />
          </div>
        </section>

        <section id="projects" className="py-20">
          <div className="mx-auto w-full max-w-6xl px-6">
            <Projects />
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="mx-auto w-full max-w-6xl px-6">
            <Contact />
          </div>
        </section>
      </main>
    </div>
  );
}
