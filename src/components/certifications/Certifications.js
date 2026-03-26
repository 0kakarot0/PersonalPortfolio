import React, { useState } from 'react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Award, ChevronDown, ChevronUp } from 'lucide-react';
import { certificationsData } from '../../data/certifications';

function Certifications() {
  const [showAll, setShowAll] = useState(false);
  
  // Show 6 initially
  const displayedCerts = showAll ? certificationsData : certificationsData.slice(0, 6);

  return (
    <Section id="certifications">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
          <p className="text-muted-foreground w-full max-w-2xl">
            A comprehensive list of my active certifications, continuing education, and technical licenses.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedCerts.map((cert) => (
          <Card key={cert.id} className="p-6 flex flex-col h-full bg-secondary/30 border-white/5 hover:-translate-y-1 hover:border-primary/30 transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-primary/10 text-primary rounded-xl">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg leading-tight mb-1">{cert.title}</h3>
                <p className="text-sm font-medium text-muted-foreground">{cert.issuer}</p>
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-end">
              {cert.description && (
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {cert.description}
                </p>
              )}
              
              <div className="mt-auto space-y-3">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Issued: {cert.date}</span>
                  {cert.credentialId && <span>ID: {cert.credentialId}</span>}
                </div>
                
                <div className="flex flex-wrap gap-2 pt-3 border-t border-white/5">
                  {cert.skills.slice(0, 3).map((skill, index) => (
                    <span key={index} className="text-[10px] uppercase tracking-wider font-semibold px-2 py-1 bg-secondary rounded-full text-muted-foreground">
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-1 bg-secondary rounded-full text-muted-foreground">
                      +{cert.skills.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {certificationsData.length > 6 && (
        <div className="mt-12 flex justify-center">
          <Button variant="outline" onClick={() => setShowAll(!showAll)} className="gap-2">
            {showAll ? (
              <>Show Less <ChevronUp className="w-4 h-4" /></>
            ) : (
              <>View All {certificationsData.length} Certifications <ChevronDown className="w-4 h-4" /></>
            )}
          </Button>
        </div>
      )}
    </Section>
  );
}

export default Certifications;
