import { Mail, MapPin, Phone } from "lucide-react";

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
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a question or want to work together? Reach out and I will respond
          as soon as I can.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/60 transition-colors"
            >
              <div className="flex items-center gap-4">
                <span className="p-3 rounded-lg bg-primary/10 text-primary">
                  <item.icon size={22} />
                </span>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="font-semibold">{item.value}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
