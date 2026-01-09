import { Award, Coffee, Heart, Trophy } from "lucide-react";

const stats = [
  {
    icon: Trophy,
    value: "2",
    label: "Internships Completed",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    icon: Award,
    value: "2027",
    label: "BSc in CS (UFAZ)",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Coffee,
    value: "90/100",
    label: "Current GPA",
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
  },
  {
    icon: Heart,
    value: "2",
    label: "Hackathon Events",
    color: "text-rose-500",
    bgColor: "bg-rose-500/10",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          About <span className="text-primary"> Me </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Get to know me better - my background, interests, and what drives me.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center text-primary-foreground text-6xl font-bold">
                NA
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-card border border-border flex items-center justify-center shadow-lg">
              <span className="text-3xl">👨‍💻</span>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              React-Focused <span className="text-primary">Frontend Developer</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I build modern, responsive web applications using React and JavaScript,
              translating Figma designs into pixel-perfect UI. I focus on performance,
              clean component structure, and maintainable front-end architecture.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I am currently pursuing a BSc in Computer Science at UFAZ and actively
              engage in real-world projects, internships, and hackathon events to keep
              learning and improving.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-border bg-card p-5">
                <h4 className="font-semibold mb-3">Experience</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Frontend Development Intern - GUYS Group (Martech MMC)</li>
                  <li>Frontend Development Intern - Intern Intelligence</li>
                  <li>Volunteer - UFAZ (Azercell-Techcell Hackathon, IGNITE Demo Day)</li>
                </ul>
              </div>
              <div className="rounded-xl border border-border bg-card p-5">
                <h4 className="font-semibold mb-3">Education & Certificates</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>UFAZ - BSc in Computer Science (Expected 2027)</li>
                  <li>Div Academy - Frontend Development (2024-2025)</li>
                  <li>Martech MMC - Internship Completion Certificate</li>
                  <li>Geleceyi Yazanlar Scholarship (2024)</li>
                  <li>IKT-de Qizlar Gunu - Cybersecurity Training</li>
                  <li>Project Management - Certificate of Completion</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, key) => (
                <div
                  key={key}
                  className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border"
                >
                  <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                    <stat.icon className={stat.color} size={20} />
                  </div>
                  <div>
                    <p className="text-lg font-bold">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
