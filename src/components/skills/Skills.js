import React from 'react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { skillsData } from '../../data/skills';

function Skills() {
  return (
    <Section id="skills">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise <span className="text-primary">&</span> Leadership</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A comprehensive breakdown of my testing methodologies, automation toolkit, and team management capabilities.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((category, index) => (
          <Card key={index} className="flex flex-col h-full bg-secondary/30 border-white/5 hover:-translate-y-1 hover:border-primary/30 transition-all duration-300">
            <h3 className="text-xl font-bold mb-2 text-foreground">{category.category}</h3>
            <p className="text-sm text-muted-foreground mb-6 line-clamp-2">{category.description}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {category.skills.map((skill) => (
                <span key={skill} className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export default Skills;