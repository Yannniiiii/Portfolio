import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

export default function Navbar({ dark, setDark }) {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contacts" },
  ];

  /* ===============================
     Active Section Observer
  =============================== */
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  /* ===============================
     Close When Clicking Outside
  =============================== */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  /* ===============================
     Smooth Scroll
  =============================== */
  const handleScroll = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
  };

  return (
    <>
      {/* ===============================
          Navbar
      =============================== */}
      <nav
        className="
          fixed top-0 left-0 w-full z-50
          backdrop-blur-2xl
          bg-white/10 dark:bg-black/40
          border-b border-white/20 dark:border-white/10
          shadow-lg
          transition-colors duration-300
        "
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-wide text-white">
            Deane
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-white font-medium">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScroll(link.id)}
                className={`relative pb-1 transition-colors duration-300 ${
                  active === link.id
                    ? "text-yellow-300"
                    : "hover:text-yellow-300"
                }`}
              >
                {link.label}
                <span
                  className={`absolute left-0 bottom-0 h-[2px] w-full bg-yellow-300 transition-transform duration-300 origin-left ${
                    active === link.id
                      ? "scale-x-100"
                      : "scale-x-0"
                  }`}
                />
              </button>
            ))}

            <button
              onClick={() => setDark((prev) => !prev)}
              className="p-2 rounded-full bg-white/20 dark:bg-white/10 hover:scale-110 active:scale-95 transition-all duration-300"
            >
              {dark ? <FaSun size={16} /> : <FaMoon size={16} />}
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-4 text-white">
            <button
              onClick={() => setDark((prev) => !prev)}
              className="p-2 rounded-full bg-white/20 dark:bg-white/10"
            >
              {dark ? <FaSun size={16} /> : <FaMoon size={16} />}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-xl"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>

      {/* ===============================
          Background Blur Overlay
      =============================== */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 backdrop-blur-md bg-black/30 md:hidden transition-opacity duration-300"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* ===============================
          Floating Mobile Menu Card
      =============================== */}
      {menuOpen && (
        <div className="md:hidden fixed top-20 left-0 w-full z-50 px-4">
          <div
            ref={menuRef}
            className="
              rounded-2xl
              bg-white/20 dark:bg-black/50
              backdrop-blur-2xl
              border border-white/20 dark:border-white/10
              shadow-2xl
              px-6 py-6
              flex flex-col gap-6
              text-white text-lg font-medium
              animate-[fadeIn_.25s_ease-in-out]
            "
          >
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScroll(link.id)}
                className={`text-left transition-colors duration-300 ${
                  active === link.id
                    ? "text-yellow-300"
                    : "hover:text-yellow-300"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}