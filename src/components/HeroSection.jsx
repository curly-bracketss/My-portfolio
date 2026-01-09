import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-scroll";

export const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 relative pt-16">
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        {/* Greeting */}
        <div className="mb-6 animate-fade-in">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            👋 Hello, I'm
          </span>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-delay-1">
          Nazrin <span className="text-primary">Azizli</span>
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 animate-fade-in-delay-2">
          React-Focused <span className="text-primary">Frontend Developer</span>
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in-delay-3 leading-relaxed">
          React-focused frontend developer building modern, responsive web applications.
          I translate Figma designs into pixel-perfect UI, integrate REST APIs, and
          optimize performance for a smooth user experience.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-delay-4">
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-80}
            className="cosmic-button cursor-pointer inline-flex items-center gap-2"
          >
            View My Work <ArrowRight size={20} />
          </Link>
          <button
            onClick={scrollToContact}
            className="px-6 py-3 rounded-full border border-border font-medium hover:bg-secondary transition-all duration-300 inline-flex items-center gap-2"
          >
            Get In Touch
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 animate-fade-in-delay-4">
          <a
            href="https://github.com/curly-bracketss"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/nazrin-azizli"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:nazizli1112@gmail.com"
            className="p-3 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};
