import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X, Code2 } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const sections = navItems.map((item) => document.getElementById(item.to));
      const scrollPos = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].to);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-border/60 shadow-[0_2px_8px_rgba(0,0,0,0.01)]"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <Link
            to="home"
            spy={true}
            smooth={true}
            className="flex items-center gap-2 font-semibold text-base cursor-pointer tracking-tight"
          >
            <Code2 size={18} className="text-primary" />
            <span className="font-semibold text-foreground">
              nazrin<span className="text-primary">.</span>dev
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-80}
                className={`text-sm font-medium transition-colors cursor-pointer relative py-1
                  ${
                    activeSection === item.to
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {item.name}
                {activeSection === item.to && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
            <div className="pl-4 border-l border-border/80">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Navigation controls */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              className="p-1.5 rounded-md hover:bg-secondary transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-b border-border/60 ${
          isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-background/95 backdrop-blur-md px-6 py-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-80}
              onClick={closeMenu}
              className={`block py-2.5 px-3 text-sm font-medium rounded-lg transition-all cursor-pointer
                ${
                  activeSection === item.to
                    ? "text-primary bg-primary/[0.04]"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
