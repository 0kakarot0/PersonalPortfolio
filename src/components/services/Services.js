import React from "react";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { ShieldCheck, BoxSelect, Zap, Database, Smartphone, GraduationCap } from "lucide-react";

const servicesList = [
  {
    title: "QA Strategy & Governance",
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    description: "Defining robust testing architectures, establishing reporting metrics, and aligning test coverage precisely with business objectives to reduce systemic risk."
  },
  {
    title: "Automation Architecture",
    icon: <BoxSelect className="w-8 h-8 text-primary" />,
    description: "Designing and scaling maintainable, high-performance UI and API test frameworks from scratch to drastically accelerate iteration and release cycles."
  },
  {
    title: "CI/CD & Quality Gates",
    icon: <Zap className="w-8 h-8 text-primary" />,
    description: "Integrating automated test suites seamlessly into DevOps pipelines, establishing strict quality gates to prevent regressions before they reach production."
  },
  {
    title: "API & Backend Validation",
    icon: <Database className="w-8 h-8 text-primary" />,
    description: "Validating complex microservices, establishing data integrity checks, and ensuring absolute resilience in the hidden systems beneath the UI layer."
  },
  {
    title: "Mobile App Quality",
    icon: <Smartphone className="w-8 h-8 text-primary" />,
    description: "Driving device farm strategies and exhaustive multi-platform mobile testing routines to secure reliable 5-star iOS and Android user experiences."
  },
  {
    title: "Team Mentorship & Scalability",
    icon: <GraduationCap className="w-8 h-8 text-primary" />,
    description: "Coaching cross-functional engineering pods on BDD/TDD best practices, and building a pervasive, quality-first engineering culture from day one."
  }
];

function Services(){
  return (
    <Section id="services" className="bg-background">
      <div className="text-center mb-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Help Teams With</h2>
        <p className="text-muted-foreground w-full max-w-2xl mx-auto">
          Providing senior-level strategic direction and hands-on technical execution to ensure your software lifecycle is robust, reliable, and continuously accelerating.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesList.map((service, idx) => (
          <Card key={idx} hoverEffect className="flex flex-col items-start gap-4 p-8 border border-white/5 bg-secondary/30">
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