import React from "react";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { TrendingUp, Users, Shield, Zap } from "lucide-react";

const achievementsList = [
  {
    title: "80% Faster Releases",
    icon: <Zap className="w-8 h-8 text-primary" />,
    description: "Architected CI/CD test gates that slashed regression timelines from days to hours, enabling weekly deployments."
  },
  {
    title: "Zero Critical Defects",
    icon: <Shield className="w-8 h-8 text-primary" />,
    description: "Achieved 12 consecutive months of zero Sev-1 defects escaping into production across core financial flows."
  },
  {
    title: "Cross-Functional Mentorship",
    icon: <Users className="w-8 h-8 text-primary" />,
    description: "Mentored and scaled testing teams, elevating manual testers into high-performing SDETs through hands-on coaching."
  },
  {
    title: "99.9% Crash-Free Users",
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    description: "Drove mobile automation coverage to 95%, stabilizing app performance and significantly boosting App Store ratings."
  }
];

function Achievements(){
  return(
    <Section id="achievements" className="bg-secondary/30">
      <div className="text-center mb-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership <span className="text-primary">&</span> Impact</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Metrics and milestones that define my career in quality engineering.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {achievementsList.map((item, idx) => (
          <Card key={idx} className="flex flex-col gap-4 sm:flex-row items-center sm:items-start text-center sm:text-left p-8 border border-white/5 hover:border-primary/30 transition-colors">
            <div className="flex-shrink-0 p-4 bg-primary/10 rounded-2xl border border-primary/20">
              {item.icon}
            </div>
            <div className="flex flex-col flex-1">
              <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export default Achievements;