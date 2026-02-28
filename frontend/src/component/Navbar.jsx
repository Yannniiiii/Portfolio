import { FaMoon, FaSun } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Navbar({ dark, setDark }) {
  const [active, setActive] = useState("home");

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
      {
        threshold: 0.6,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Smooth scroll handler
  const handleScroll = (id) => {
    const section = document.getElementById(id);

    if (section) {
      const yOffset = -96; // Adjust based on navbar height
      const y =
        section.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  return (
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

        <div className="flex items-center gap-8 text-white font-medium">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleScroll(link.id);
              }}
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
            </a>
          ))}

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDark((prev) => !prev)}
            className="
              p-2 rounded-full
              bg-white/20 dark:bg-white/10
              hover:scale-110 active:scale-95
              transition-all duration-300
            "
          >
            {dark ? <FaSun size={16} /> : <FaMoon size={16} />}
          </button>
        </div>
      </div>
    </nav>
  );
}