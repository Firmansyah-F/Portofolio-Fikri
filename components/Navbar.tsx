import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["about", "projects", "contact"];
      const scrollPos = window.scrollY + 200;

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          if (
            scrollPos >= el.offsetTop &&
            scrollPos < el.offsetTop + el.offsetHeight
          ) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkStyle = (section: string) =>
    `relative transition ${
      active === section
        ? "text-purple-400"
        : "text-gray-300 hover:text-purple-400"
    }`;

  return (
    <div
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl"
          : "bg-white/5 backdrop-blur-xl border border-white/10"
      } px-10 py-3 rounded-full flex gap-8 text-sm`}
    >
      <a href="#about" className={linkStyle("about")}>
        About
      </a>

      <a href="#projects" className={linkStyle("projects")}>
        Projects
      </a>

      <a href="#contact" className={linkStyle("contact")}>
        Contact
      </a>
    </div>
  );
}
