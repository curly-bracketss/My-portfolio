import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "PapaJhons",
    description: "A responsive web project replicating the style and layout of the Papa John’s website. Built using HTML, Tailwind CSS, and JavaScript, this project includes essential pages and components that showcase a real-world pizza restaurant interface.",
    image: "./projects/project1.png",
    tags: ["JavaScript", "TailwindCSS", "RWD", "HTML5"],
    demoUrl: "https://papa-johns-ebon.vercel.app/",
    githubUrl: "https://github.com/curly-bracketss/PapaJohns",
  },
  {
    id: 2,
    title: "Country App",
    description:
      "Country App is a responsive web application built with React.js and Tailwind CSS that allows users to explore detailed information about countries around the world.",
    image: "/projects/project2.png",
    tags: ["Tailwind CSS", "React.js", "RWD", "REST API"],
    demoUrl: "https://country-app-alpha-six.vercel.app/",
    githubUrl: "https://github.com/curly-bracketss/Country-App",
  },
  {
    id: 3,
    title: "sayt.az",
    description:
      "sayt.az is a simple, responsive website built using HTML, Tailwind CSS, and Responsive Web Design (RWD) principles. The project currently includes two main pages: 🏠 Home Page, 🧮 Calculator Page",
    image: "/projects/project3.png",
    tags: ["HTML5", "Tailwind CSS", "RWD"],
    demoUrl: "https://sayt-az-mu.vercel.app/",
    githubUrl: "https://github.com/curly-bracketss/Sayt.az",
  },
  {
    id: 4,
    title: "Apple Website Clone (Home Page)",
    description:
      "A pixel-perfect Apple.com homepage clone created using HTML, CSS, and Responsive Web Design (RWD) techniques. This project focuses on replicating the visual design and layout of the original Apple homepage for learning and practice purposes.",
    image: "/projects/project4.png",
    tags: ["HTML5", "CSS3", "RWD"],
    demoUrl: "https://nan33.alwaysdata.net/index/apple.html",
    githubUrl: "https://github.com/curly-bracketss/Apple_",
  },
  {
    id: 5,
    title: "Libraff.az",
    description:
      "Libraff.az in react.But not completed yet.",
    image: "/projects/project5.png",
    tags: ["HTML5", "Tailwind CSS", "REST API", "React.js"],
    demoUrl: "_",
    githubUrl: "https://github.com/curly-bracketss/Libraff.az",
  },
];

export const ProjectsSection = () => {
    return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                  <h3 className="text-xl font-semibold mb-1 "> {project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 ">
                    {project.description}
                  </p>
                <div className="flex justify-between items-center  ">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="  duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className=" duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/curly-bracketss"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
