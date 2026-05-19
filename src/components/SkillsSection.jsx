import { Code2, Layout, Database, Terminal, Settings } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const skills = [
  {
    category: "Programming Languages",
    icon: Code2,
    items: ["JavaScript (ES6+)", "Python", "C"],
  },
  {
    category: "Frontend Technologies",
    icon: Layout,
    items: [
      "HTML5",
      "CSS3",
      "React.js",
      "Vue.js",
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
      "Ant Design",
    ],
  },
  {
    category: "Concepts & Tools",
    icon: Settings,
    items: [
      "RESTful API Integration",
      "Responsive Web Design (RWD)",
      "Flexbox & CSS Grid",
      "Git & GitHub Workflow",
      "Async/Await & Promises",
      "Object-Oriented Programming (OOP)",
      "Component-Based Architecture",
    ],
  },
  {
    category: "Databases",
    icon: Database,
    items: ["MySQL", "MongoDB"],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="section-divider mb-24" />

      <div className="container mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
              Technical Skills
            </h2>
            <p className="text-muted-foreground text-sm">
              The languages, frameworks, and methodologies I work with.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, key) => (
            <ScrollReveal key={key} delay={key * 0.05}>
              <div className="h-full bg-card border border-border/60 hover:border-border rounded-xl p-6 transition-all duration-150">
                <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-border/40">
                  <skill.icon size={16} className="text-primary" />
                  <h3 className="text-sm font-semibold text-foreground">
                    {skill.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 text-xs font-medium rounded-lg bg-secondary text-foreground border border-border/40 transition-colors hover:bg-secondary/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
