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
    { id: "contact", label: "Contact" },
  ];

  /* ===============================
     SCROLL SPY (Professional Way)
  =============================== */
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let currentSection = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        // 100px from top = activation line
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = section.id;
        }
      });

      // Special case for bottom of page (Contact section fix)
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 5
      ) {
        currentSection = sections[sections.length - 1].id;
      }

      if (currentSection) {
        setActive(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
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
  const handleScrollClick = (id) => {
    setActive(id); // instant underline

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
            Deane's Portfolio
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-white font-medium">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScrollClick(link.id)}
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

      {/* Background Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 backdrop-blur-md bg-black/30 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
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
            "
          >
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScrollClick(link.id)}
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