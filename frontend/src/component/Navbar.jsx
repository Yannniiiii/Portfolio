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

  // Active section observer
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

  // Close when clicking outside
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

  const handleScroll = (id) => {
    const section = document.getElementById(id);

    if (section) {
      const yOffset = -96;
      const y =
        section.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }

    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/90 dark:bg-black/90 border-b border-white/20 dark:border-white/10 shadow-lg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wide text-gray-900 dark:text-white">
          Deane
        </h1>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8 text-gray-900 dark:text-white font-medium">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScroll(link.id)}
              className={`transition-colors duration-300 ${
                active === link.id
                  ? "text-yellow-500"
                  : "hover:text-yellow-500"
              }`}
            >
              {link.label}
            </button>
          ))}

          <button
            onClick={() => setDark((prev) => !prev)}
            className="p-2 rounded-full bg-gray-200/90 dark:bg-gray-800/90 hover:scale-110 active:scale-95 transition-all duration-300"
          >
            {dark ? <FaSun size={16} /> : <FaMoon size={16} />}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-4 text-gray-900 dark:text-white">
          <button
            onClick={() => setDark((prev) => !prev)}
            className="p-2 rounded-full bg-gray-200/90 dark:bg-gray-800/90"
          >
            {dark ? <FaSun size={16} /> : <FaMoon size={16} />}
          </button>

          <button
            onClick={() => setMenuOpen(true)}
            className="p-2 text-xl"
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Glass Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 w-full px-4 transition-all duration-300 ${
          menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div
          ref={menuRef}
          className={`
            mt-3
            rounded-3xl
            bg-gradient-to-br
            from-white/90
            via-white/85
            to-indigo-100/90
            dark:from-zinc-900/90
            dark:via-black/90
            dark:to-indigo-900/90
            backdrop-blur-2xl
            backdrop-saturate-150
            border border-white/30 dark:border-white/10
            shadow-[0_20px_60px_rgba(0,0,0,0.25)]
            px-6 py-6
            transform transition-all duration-300
            ${menuOpen ? "scale-100" : "scale-95"}
          `}
        >
          {/* Close Button */}
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-xl text-gray-900 dark:text-white hover:text-yellow-500 transition-colors"
            >
              <FaTimes />
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-6 text-gray-900 dark:text-white text-lg font-medium">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScroll(link.id)}
                className={`text-left transition-colors duration-300 ${
                  active === link.id
                    ? "text-yellow-500"
                    : "hover:text-yellow-500"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}