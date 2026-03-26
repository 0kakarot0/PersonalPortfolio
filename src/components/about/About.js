import React from "react";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import myprofile from "../../assets/myproflie.jpeg";

function About() {
  return (
    <Section id="about" className="bg-secondary/30">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-2xl opacity-20" />
          <Card className="relative aspect-square flex items-center justify-center bg-secondary/50 border-white/5 overflow-hidden p-0">
            <img 
              src={myprofile} 
              alt="About Ahtisham" 
              className="w-full h-full object-cover object-center scale-100 hover:scale-105 transition-transform duration-500 ease-out" 
            />
          </Card>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              Hello! I'm a passionate Software Engineer with a keen eye for bringing ideas to life through code. Building robust and beautiful applications is what I do best.
            </p>
            <p>
              My expertise spans across modern frontend technologies and rigorous quality assurance. I firmly believe in delivering stable, test-driven software that doesn't compromise on the user experience.
            </p>
            <p>
              Whether it's creating pixel-perfect UIs with React and Tailwind CSS or solving complex systemic issues, I treat every project as an opportunity to innovate and improve. Building trust with users one line of code at a time.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-8">
            <div>
              <h3 className="text-2xl font-bold text-primary">3+</h3>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary">20+</h3>
              <p className="text-sm text-muted-foreground">Projects Delivered</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default About;
