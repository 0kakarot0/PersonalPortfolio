import React from "react";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { MonitorPlay, Smartphone, BoxSelect, ShieldCheck, Briefcase, GraduationCap } from "lucide-react";
import "./Services.css"; // Preserved for backwards compatibility

const servicesList = [
  {
    title: "Test Strategies",
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus minus distinctio nobis magni optio rerum a, odit amet ad at."
  },
  {
    title: "Web Testing",
    icon: <MonitorPlay className="w-8 h-8 text-primary" />,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus minus distinctio nobis magni optio rerum a, odit amet ad at."
  },
  {
    title: "Mobile App Testing",
    icon: <Smartphone className="w-8 h-8 text-primary" />,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus minus distinctio nobis magni optio rerum a, odit amet ad at."
  },
  {
    title: "Automation UI & API",
    icon: <BoxSelect className="w-8 h-8 text-primary" />,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus minus distinctio nobis magni optio rerum a, odit amet ad at."
  },
  {
    title: "Consultation",
    icon: <Briefcase className="w-8 h-8 text-primary" />,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus minus distinctio nobis magni optio rerum a, odit amet ad at."
  },
  {
    title: "Career Advice",
    icon: <GraduationCap className="w-8 h-8 text-primary" />,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus minus distinctio nobis magni optio rerum a, odit amet ad at."
  }
];

function Services(){
  return (
    <Section id="services" className="bg-background">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Providing high-quality solutions to ensure your software is robust, reliable, and user-friendly.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesList.map((service, idx) => (
          <Card key={idx} hoverEffect className="flex flex-col items-start gap-4 p-8">
            <div className="p-3 bg-primary/10 rounded-2xl border border-primary/20">
              {service.icon}
            </div>
            <h4 className="text-xl font-bold text-foreground mt-2">{service.title}</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {service.description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export default Services;