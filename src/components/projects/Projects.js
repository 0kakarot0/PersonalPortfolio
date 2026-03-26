import React from 'react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { ExternalLink, Github } from 'lucide-react';
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
            <div className={`h-48 w-full relative group overflow-hidden bg-muted`}>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <Button size="sm" variant="secondary" className="rounded-full" onClick={() => window.open(project.githubUrl, '_blank')}>
                  <Github className="w-4 h-4" />
                </Button>
                <Button size="sm" className="rounded-full" onClick={() => window.open(project.liveUrl, '_blank')}>
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold mb-3 text-foreground">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-6 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tag) => (
                  <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
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
