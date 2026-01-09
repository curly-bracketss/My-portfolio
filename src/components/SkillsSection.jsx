import { Code2, Database, Layout, Terminal, BrainCircuit } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: Layout,
    items: [
      { name: "React.js", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
      { name: "HTML5", level: "Advanced" },
      { name: "CSS3 / SASS", level: "Advanced" },
    ],
  },
  {
    category: "UI & Libraries",
    icon: Terminal,
    items: [
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Bootstrap", level: "Proficient" },
      { name: "Material UI", level: "Proficient" },
      { name: "Ant Design", level: "Proficient" },
      { name: "jQuery", level: "Intermediate" },
    ],
  },

  {
    category: "Tools & Workflow",
    icon: Terminal,
    items: [
      { name: "Git & GitHub", level: "Advanced" },
      { name: "Figma", level: "Proficient" },
      { name: "MS Office", level: "Proficient" },
    ],
  },
  {
    category: "Soft Skills",
    icon: BrainCircuit,
    items: [
      { name: "Communication", level: "Strong" },
      { name: "Problem-Solving", level: "Strong" },
      { name: "Time Management", level: "Strong" },
      { name: "Teamwork", level: "Strong" },
      { name: "Adaptability", level: "Strong" },
      { name: "Creativity", level: "Strong" },
      { name: "Empathy", level: "Strong" },
    ],
  },
  {
    category: "Languages",
    icon: Code2,
    items: [
      { name: "Azerbaijani", level: "Native" },
      { name: "Turkish", level: "Advanced" },
      { name: "English", level: "Intermediate" },
      { name: "French", level: "Elementary" },
      { name: "Russian", level: "Elementary" },
    ],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Technical <span className="text-primary"> Skills </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          My technical expertise and technologies I work with.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <skill.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold">{skill.category}</h3>
              </div>

              <div className="space-y-4">
                {skill.items.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="font-medium">{item.name}</span>
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
