import React, { useState } from 'react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Award, ChevronDown, ChevronUp, BookOpen, Clock } from 'lucide-react';
import { certificationsData } from '../../data/certifications';

function Certifications() {
  const [showAll, setShowAll] = useState(false);
  
  const featuredCerts = certificationsData.filter((c) => c.status === "featured");
  const inProgressCerts = certificationsData.filter((c) => c.status === "in-progress");
  const standardCerts = certificationsData.filter((c) => c.status !== "featured" && c.status !== "in-progress");

  const renderCertCard = (cert, isCompact = false) => (
    <Card 
      key={cert.id} 
      className={`p-6 flex flex-col h-full bg-secondary/30 border-white/5 hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 ${isCompact ? 'p-4' : ''}`}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className={`p-3 bg-primary/10 text-primary rounded-xl ${cert.status === 'in-progress' ? 'bg-accent/10 text-accent' : ''}`}>
          {cert.status === 'in-progress' ? <Clock className="w-5 h-5 md:w-6 md:h-6" /> : <Award className="w-5 h-5 md:w-6 md:h-6" />}
        </div>
        <div>
          <h3 className={`${isCompact ? 'text-lg' : 'text-xl'} font-bold leading-tight mb-1`}>{cert.title}</h3>
          <p className="text-sm font-medium text-muted-foreground">{cert.issuer}</p>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-end mt-2">
        {cert.description && !isCompact && (
          <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
            {cert.description}
          </p>
        )}
        
        <div className="mt-auto space-y-3">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{cert.status === 'in-progress' ? 'Expected:' : 'Issued:'} {cert.date}</span>
            {cert.credentialId && <span>ID: {cert.credentialId}</span>}
          </div>
          
          {(!isCompact || cert.skills?.length > 0) && (
            <div className="flex flex-wrap gap-2 pt-3 border-t border-white/5">
              {cert.skills?.slice(0, 3).map((skill, index) => (
                <span key={index} className="text-[10px] uppercase tracking-wider font-semibold px-2 py-1 bg-background rounded-full text-muted-foreground">
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Card>
  );

  return (
    <Section id="certifications" className="bg-background">
      <div className="text-center mb-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Continuous <span className="text-primary">Learning</span></h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A curated record of my ongoing technical education and industry-standard certifications.
        </p>
      </div>

      {/* Featured Certifications */}
      <div className="mb-12">
        <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><Award className="w-5 h-5 text-primary" /> Featured Credentials</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCerts.map((cert) => renderCertCard(cert))}
        </div>
      </div>

      {/* In Progress */}
      {inProgressCerts.length > 0 && (
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><BookOpen className="w-5 h-5 text-accent" /> Learning In Progress</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inProgressCerts.map((cert) => renderCertCard(cert, true))}
          </div>
        </div>
      )}

      {/* View All Standard Certs */}
      <div className="mt-12">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-foreground">Complete Certification History</h3>
          <Button variant="outline" size="sm" onClick={() => setShowAll(!showAll)} className="gap-2">
            {showAll ? (
              <>Hide History <ChevronUp className="w-4 h-4" /></>
            ) : (
              <>View {standardCerts.length} More <ChevronDown className="w-4 h-4" /></>
            )}
          </Button>
        </div>
        
        {showAll && (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-slide-up">
            {standardCerts.map((cert) => (
              <Card key={cert.id} className="p-4 bg-secondary/20 border-white/5 hover:border-primary/20 transition-colors">
                <p className="font-bold text-sm mb-1 leading-tight">{cert.title}</p>
                <div className="flex justify-between text-xs text-muted-foreground items-center">
                  <span>{cert.issuer}</span>
                  <span>{cert.date}</span>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}

export default Certifications;
