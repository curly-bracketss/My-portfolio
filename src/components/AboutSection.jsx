import { Coffee, Heart, Trophy, Briefcase, GraduationCap } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const stats = [
  {
    icon: Trophy,
    value: "3",
    label: "Professional Roles",
    color: "text-blue-500",
  },
  {
    icon: GraduationCap,
    value: "2027",
    label: "BSc CS (UFAZ)",
    color: "text-blue-500",
  },
  {
    icon: Coffee,
    value: "95/100",
    label: "Current GPA",
    color: "text-blue-500",
  },
  {
    icon: Heart,
    value: "2+",
    label: "Hackathons",
    color: "text-blue-500",
  },
];

const experience = [
  {
    role: "Software Engineer Intern",
    company: "Deviofy (Hubpoint.ai)",
    duration: "2026 – Present",
    bullets: [
      "Participating in the development of both frontend and backend components.",
      "Working on RESTful API integration and data management implementations.",
      "Establishing modular, maintainable, and reusable codebase structures.",
      "Collaborating actively in team development workflows using Git.",
      "Implementing responsive layout optimizations and performance enhancements.",
    ],
  },
  {
    role: "Webmaster",
    company: "IYDP",
    duration: "2026 – Present",
    bullets: [
      "Managing the technical administration and updates of the organization's website.",
      "Implementing page speed optimizations and necessary technical upgrades.",
      "Ensuring site stability, responsiveness, and continuous UX improvements.",
    ],
  },
  {
    role: "Frontend Development Intern",
    company: "GUYS Group (Martech MMC)",
    duration: "Aug 2025 – Sep 2025",
    bullets: [
      "Developed responsive and cross-browser user interfaces matching Figma wireframes.",
      "Implemented REST API integrations to handle and display dynamic data feeds.",
      "Optimized React component rendering patterns to improve page performance.",
      "Leveraged Flexbox, CSS Grid, and responsive web design (RWD) layouts.",
      "Collaborated with backend developers and cross-functional team members.",
    ],
  },
];

const education = [
  {
    degree: "BSc in Computer Science (UFAZ)",
    institution: "French-Azerbaijani University",
    duration: "2023 – 2027",
    details: "GPA: 95/100",
  },
  {
    degree: "Frontend Development Course",
    institution: "Div Academy",
    duration: "2024 – 2025",
  }
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="section-divider mb-24" />

      <div className="container mx-auto">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
              About Me
            </h2>
            <p className="text-muted-foreground text-sm">
              My academic background, professional experience, and key milestones.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Summary & Stats */}
          <div className="lg:col-span-5 space-y-8">
            <ScrollReveal direction="left">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Professional Summary
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                I am a Computer Science student with hands-on experience in frontend development. I am proficient in React.js, JavaScript, HTML, CSS, and RESTful API integration.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                I have practical experience building responsive, user-centric interfaces using component-based architectures, optimizing performance, and collaborating in team development workflows using Git/GitHub to produce maintainable code.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, key) => (
                  <div
                    key={key}
                    className="p-4 rounded-lg bg-card border border-border/60 hover:border-border transition-colors"
                  >
                    <p className="text-2xl font-bold text-foreground mb-1">
                      {stat.value}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Timeline */}
          <div className="lg:col-span-7 space-y-10">
            <ScrollReveal direction="right">
              {/* Experience Timeline */}
              <div className="mb-10">
                <div className="flex items-center gap-2 mb-6">
                  <Briefcase size={16} className="text-primary" />
                  <h4 className="text-base font-semibold text-foreground">
                    Work Experience
                  </h4>
                </div>
                <div className="space-y-8 border-l border-border pl-4 ml-2">
                  {experience.map((item, index) => (
                    <div key={index} className="relative group">
                      {/* Timeline dot */}
                      <span className="absolute left-[-21px] top-1.5 w-2 h-2 rounded-full bg-border group-hover:bg-primary transition-colors" />
                      <div>
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4 mb-1">
                          <h5 className="font-semibold text-sm text-foreground">
                            {item.role}
                          </h5>
                          <span className="text-xs text-muted-foreground font-medium shrink-0">
                            {item.duration}
                          </span>
                        </div>
                        <p className="text-xs text-primary font-medium mb-3">
                          {item.company}
                        </p>
                        <ul className="space-y-1.5 list-disc pl-4 text-xs text-muted-foreground leading-relaxed">
                          {item.bullets.map((bullet, idx) => (
                            <li key={idx}>{bullet}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education List */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <GraduationCap size={16} className="text-primary" />
                  <h4 className="text-base font-semibold text-foreground">
                    Education & Scholarships
                  </h4>
                </div>
                <div className="space-y-4">
                  {education.map((item, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg bg-card border border-border/60 hover:border-border transition-all duration-150"
                    >
                      <div className="flex justify-between items-baseline gap-4 mb-1">
                        <h5 className="font-semibold text-sm text-foreground">
                          {item.degree}
                        </h5>
                        <span className="text-xs text-muted-foreground shrink-0">
                          {item.duration}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-1">
                        {item.institution}
                      </p>
                      {item.details && (
                        <span className="inline-block px-2 py-0.5 text-[10px] font-semibold font-mono rounded bg-primary/10 text-primary">
                          {item.details}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
