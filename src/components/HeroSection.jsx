import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import { Link } from "react-scroll";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 relative pt-20"
    >
      <div className="container mx-auto max-w-3xl text-center relative z-10">
        {/* Simple Availability Badge */}
        <div className="mb-6 animate-fade-in">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/[0.06] border border-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Open for Internships & Junior Roles
          </span>
        </div>

        {/* Static, typographic Name */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground mb-6 animate-fade-in-delay-1 leading-[1.1]">
          Nazrin Azizli
        </h1>

        {/* Static Subheading */}
        <h2 className="text-lg sm:text-2xl md:text-3xl font-medium text-muted-foreground mb-6 animate-fade-in-delay-2 max-w-2xl mx-auto">
          React-focused Frontend Developer building clean, responsive interfaces.
        </h2>

        {/* Short, human description */}
        <p className="text-sm sm:text-base text-muted-foreground mb-10 max-w-xl mx-auto animate-fade-in-delay-3 leading-relaxed">
          I build modular web applications with React and JavaScript, translating Figma designs into structured components while prioritizing performance and clean code.
        </p>

        {/* Refined CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12 animate-fade-in-delay-4">
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-80}
            className="btn-primary cursor-pointer"
          >
            Explore Projects <ArrowRight size={15} />
          </Link>
          <a
            href="../src/assets/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <Download size={15} /> Download CV(AZ)
          </a>
        </div>

        {/* Minimal Social Links */}
        <div className="flex justify-center gap-4 animate-fade-in-delay-4">
          {[
            { icon: Github, href: "https://github.com/curly-bracketss", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/nazrin-azizli-844613292", label: "LinkedIn" },
            { icon: Mail, href: "mailto:nazizli1112@gmail.com", label: "Email" },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-150"
              aria-label={social.label}
              title={social.label}
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
