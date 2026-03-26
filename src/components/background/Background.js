import React from "react";
import { Section } from "../ui/Section";
import { timelineData } from "../../data/timeline";
import { Briefcase, GraduationCap } from "lucide-react";

function Background() {
  return (
    <Section id="education" className="bg-secondary/30 relative py-20">
      <div className="text-center mb-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience <span className="text-primary">&</span> Education</h2>
        <p className="text-muted-foreground w-full max-w-2xl mx-auto">
          A chronologic history of my progressive leadership in QA and automation engineering.
        </p>
      </div>

      <div className="max-w-3xl mx-auto relative px-4">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-white/10" />

        <div className="space-y-12">
          {timelineData.map((item, index) => (
            <div key={item.id} className="relative pl-10 md:pl-16 group">
              
              {/* Timeline Dot/Icon */}
              <div className="absolute left-0 md:left-4 top-1 w-8 h-8 rounded-full bg-secondary border-2 border-primary flex items-center justify-center -translate-x-1/2 group-hover:bg-primary group-hover:text-background transition-colors duration-300">
                {item.type === 'education' ? (
                  <GraduationCap className="w-4 h-4" />
                ) : (
                  <Briefcase className="w-4 h-4" />
                )}
              </div>

              {/* Content Card */}
              <div className="bg-background border border-white/5 rounded-2xl p-6 hover:-translate-y-1 hover:border-primary/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-foreground">{item.role}</h3>
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold whitespace-nowrap">
                    {item.date}
                  </span>
                </div>
                <h4 className="text-base font-medium text-accent mb-4">{item.company}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Background;