import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "nazizli1112@gmail.com",
    href: "mailto:nazizli1112@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+994 51 670 67 41",
    href: "tel:+994516706741",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Baku, Azerbaijan",
    href: "https://maps.google.com/?q=Baku,+Azerbaijan",
  },
];

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Sender Name: ${formData.name}\nSender Email: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:nazizli1112@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="section-divider mb-24" />

      <div className="container mx-auto">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-muted-foreground text-sm">
              Have a question or looking to recruit? Leave a message below or reach out directly.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-4xl mx-auto">
          {/* Info Block */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal direction="left">
              <h3 className="text-base font-semibold text-foreground mb-4">
                Contact Information
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                Feel free to email me directly or get in touch through my phone number. I am generally responsive during standard business hours.
              </p>

              <div className="space-y-4">
                {contactItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border/60 hover:border-border transition-colors group"
                  >
                    <span className="p-2 rounded-md bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <item.icon size={16} />
                    </span>
                    <div>
                      <p className="text-[10px] uppercase font-mono tracking-wider text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="text-xs font-medium text-foreground transition-colors group-hover:text-primary">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="right">
              <form
                onSubmit={handleSubmit}
                className="p-6 sm:p-8 rounded-xl bg-card border border-border/60 space-y-5"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="w-full px-4 py-2.5 rounded-lg bg-secondary/50 border border-border/80 focus:border-primary focus:bg-card focus:outline-none transition-all text-xs text-foreground"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full px-4 py-2.5 rounded-lg bg-secondary/50 border border-border/80 focus:border-primary focus:bg-card focus:outline-none transition-all text-xs text-foreground"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Enter your message..."
                    className="w-full px-4 py-2.5 rounded-lg bg-secondary/50 border border-border/80 focus:border-primary focus:bg-card focus:outline-none transition-all text-xs text-foreground resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  <Send size={12} /> Send Email
                </button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
