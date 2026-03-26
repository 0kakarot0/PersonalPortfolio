import React from 'react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { ExternalLink } from 'lucide-react';
import { projectsData } from '../../data/projects';
import './Project.css'; // Keep old CSS for stability just in case

function Projects() {
  return (
    <Section id="projects" className="bg-secondary/30">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl">
            A selection of projects that demonstrate my expertise in software engineering and web development.
          </p>
        </div>
        <Button variant="outline" onClick={() => window.location.href = '#'}>
          View All Projects
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <Card key={project.id} className="overflow-hidden flex flex-col h-full p-0 border border-white/10 bg-secondary/50 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
            <div className={`h-40 w-full relative group overflow-hidden bg-muted`}>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <Button size="sm" variant="secondary" className="rounded-full" onClick={() => window.open(project.githubUrl, '_blank')}>
                  <i className="fa-brands fa-github text-base leading-none" />
                </Button>
                <Button size="sm" className="rounded-full" onClick={() => window.open(project.liveUrl, '_blank')}>
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold mb-1 text-foreground">{project.title}</h3>
              <p className="text-sm text-primary font-medium mb-4">{project.role}</p>
              
              <div className="space-y-3 mb-6 flex-1">
                <div>
                  <span className="text-xs font-semibold text-foreground uppercase tracking-wider block mb-1">The Problem</span>
                  <p className="text-muted-foreground text-sm line-clamp-2">{project.problem}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold text-foreground uppercase tracking-wider block mb-1">The Impact</span>
                  <p className="text-muted-foreground text-sm line-clamp-2">{project.impact}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5 mt-auto">
                {project.tech.map((tag) => (
                  <span key={tag} className="text-[10px] uppercase font-bold px-2 py-1 rounded-sm bg-accent/10 text-accent border border-accent/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export default Projects;
