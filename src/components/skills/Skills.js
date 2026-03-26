import React from 'react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { CheckCircle2 } from 'lucide-react';
import './Skills.css'; // Preserved just in case

const skillCategories = [
  {
    title: "Programming",
    skills: ["Java", "JavaScript", "Flutter / Dart"],
  },
  {
    title: "Testing & QA",
    skills: ["Software Testing", "Automation Testing", "Manual Testing", "Test Strategy", "Bug Reporting"],
  },
  {
    title: "Methodologies & Soft Skills",
    skills: ["Agile Methodologies", "Team Leadership", "Problem Solving", "Continuous Integration"],
  },
];

function Skills() {
  return (
    <Section id="skills">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A comprehensive toolkit that allows me to tackle robust software engineering and quality assurance challenges.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <Card key={index} hoverEffect className="h-full">
            <h3 className="text-xl font-semibold mb-6 text-primary">{category.title}</h3>
            <ul className="space-y-3">
              {category.skills.map((skill) => (
                <li key={skill} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  {skill}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export default Skills;