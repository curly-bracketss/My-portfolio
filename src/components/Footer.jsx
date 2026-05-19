import { Github, Linkedin, Mail, Heart, Code2 } from "lucide-react";
import { Link } from "react-scroll";

const socialLinks = [
  { icon: Github, href: "https://github.com/curly-bracketss", label: "GitHub" },
  { icon: Linkedin, href: "www.linkedin.com/in/nazrin-azizli-844613292", label: "LinkedIn" },
  { icon: Mail, href: "mailto:nazizli1112@gmail.com", label: "Email" },
];

const footerLinks = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="text-center md:text-left">
            <Link
              to="home"
              spy={true}
              smooth={true}
              className="inline-flex items-center gap-2 font-bold text-xl mb-4 cursor-pointer"
            >
              <div className="p-1.5 rounded-lg bg-primary/10">
                <Code2 className="text-primary" size={20} />
              </div>
              <span className="tracking-tight">
                Nazrin Azizli<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
              React-focused frontend developer passionate about building modern,
              responsive, and accessible web experiences.
            </p>
            <div className="flex justify-center md:justify-start gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h3 className="font-semibold mb-4">Get In Touch</h3>
            <p className="text-muted-foreground text-sm mb-3">
              Interested in working together?
            </p>
            <a
              href="mailto:nazizli1112@gmail.com"
              className="text-primary hover:underline text-sm font-medium"
            >
              nazizli1112@gmail.com
            </a>
            <p className="text-muted-foreground text-sm mt-2">
              Baku, Azerbaijan
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Nazrin Azizli. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1.5">
              Made with <Heart size={14} className="text-rose-500 fill-rose-500" /> using React
              & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
