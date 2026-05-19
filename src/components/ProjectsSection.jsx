import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";

const projects = [
  {
    id: 1,
    title: "Avankart.az",
    description:
      "E-commerce platform where I developed responsive user interfaces, integrated backend APIs to establish dynamic data flows, and implemented UX and performance optimizations.",
    image: "/projects/project9.png",
    tags: ["JavaScript", "Tailwind CSS", "REST API", "Git"],
    category: "react",
    demoUrl: "https://avankart.az",
  },
  {
    id: 2,
    title: "DADLY",
    description:
      "Meal recommendation web application featuring a swipe-based interactive meal selection system, querying dynamic RESTful API feeds with responsive architecture.",
    image: "/projects/project8.png",
    tags: ["React.js", "JavaScript", "Tailwind CSS", "FastAPI", "Git"],
    category: "react",
    demoUrl: "https://dadly.onrender.com",
  },
  {
    id: 3,
    title: "IMDb Movie Catalog",
    description:
      "Responsive movie explorer client querying dynamic catalog database feeds with live searching, sorting, and user filter preferences.",
    image: "/projects/project6.png",
    tags: ["React.js", "Tailwind CSS", "Mock API"],
    category: "react",
    demoUrl: "https://imdb-six-theta.vercel.app/",
    githubUrl: "https://github.com/curly-bracketss/IMDB",
  },
  {
    id: 4,
    title: "DuyArt Showcase",
    description:
      "Promotional pitch and startup landing presentation platform styled with modular component sections and subtle scroll cues.",
    image: "/projects/project7.png",
    tags: ["React.js", "Tailwind CSS"],
    category: "react",
    demoUrl: "https://duy-art.vercel.app/",
    githubUrl: "https://github.com/curly-bracketss/DuyArt",
  },
  {
    id: 5,
    title: "Libraff.az UI",
    description:
      "Interface mockup of the popular bookstore site, detailing product grid systems, shopping bag panels, and responsive navigation items.",
    image: "/projects/project5.png",
    tags: ["React.js", "Tailwind CSS", "Mock API"],
    category: "react",
    githubUrl: "https://github.com/curly-bracketss/Libraff",
  },
  {
    id: 6,
    title: "Papa John's Landing Page",
    description:
      "Responsive storefront landing layout modeled on pizza menu designs, styled with robust grid structures and image carousels.",
    image: "./projects/project1.png",
    tags: ["JavaScript", "Tailwind CSS", "RWD"],
    category: "html",
    demoUrl: "https://papa-johns-ebon.vercel.app/",
    githubUrl: "https://github.com/curly-bracketss/PapaJohns",
  },
  {
    id: 7,
    title: "Country Encyclopedia",
    description:
      "Encyclopedia client listing national statistics, geographical locations, and flags queried from open REST API endpoints.",
    image: "/projects/project2.png",
    tags: ["React.js", "Tailwind CSS", "Mock API"],
    category: "react",
    demoUrl: "https://country-app-alpha-six.vercel.app/",
    githubUrl: "https://github.com/curly-bracketss/Country-App",
  },
  {
    id: 8,
    title: "Sayt.az Core Pages",
    description:
      "Minimalist web page template package featuring basic grid directories and a functional client-side JavaScript calculator utility.",
    image: "/projects/project3.png",
    tags: ["HTML5", "Tailwind CSS", "RWD"],
    category: "html",
    demoUrl: "https://sayt-az-mu.vercel.app/",
    githubUrl: "https://github.com/curly-bracketss/Sayt.az",
  },
  {
    id: 9,
    title: "Apple Store Homepage",
    description:
      "Re-creation of Apple's flagship homepage layouts focusing on fluid responsive text wrapping and high-resolution banner blocks.",
    image: "/projects/project4.png",
    tags: ["HTML5", "CSS3", "RWD"],
    category: "html",
    demoUrl: "https://nan33.alwaysdata.net/index/apple.html",
    githubUrl: "https://github.com/curly-bracketss/Apple_",
  },
];

const filters = [
  { label: "All Works", value: "all" },
  { label: "React Apps", value: "react" },
  { label: "HTML & CSS", value: "html" },
];

export const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="section-divider mb-24" />

      <div className="container mx-auto">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-sm">
              A curated list of my recent development work, covering applications, mockups, and layout structures.
            </p>
          </div>

          {/* Simple Tab Control */}
          <div className="flex justify-center gap-2 mb-16">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer
                  ${
                    activeFilter === filter.value
                      ? "bg-secondary text-foreground border border-border"
                      : "bg-transparent text-muted-foreground border border-transparent hover:text-foreground"
                  }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, key) => (
            <ScrollReveal key={project.id} delay={key * 0.04}>
              <div className="group h-full bg-card rounded-xl overflow-hidden border border-border/60 hover:border-border shadow-[0_1px_3px_rgba(0,0,0,0.01)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.02)] transition-all duration-200 flex flex-col">
                {/* Image Container */}
                <div className="h-44 overflow-hidden bg-secondary relative border-b border-border/40">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-200"
                    loading="lazy"
                  />
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-secondary text-muted-foreground border border-border/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4 pt-3 border-t border-border/40">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink size={12} /> Live Site
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Github size={12} /> Source Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center mt-16">
            <a
              className="btn-outline"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/curly-bracketss"
            >
              See all code repositories <ArrowRight size={14} />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
