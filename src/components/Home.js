import React from "react";
import "./style.css"; // Kept to preserve any global styles it might affect externally
import myprofile from "../assets/myproflie.jpeg";
import { Section } from "./ui/Section";
import { Button } from "./ui/Button";
import { ArrowRight, Mail } from "lucide-react";

function Home() {
  return (
    <Section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 flex items-center min-h-screen">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-50" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] opacity-30" />
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8 w-full">
        {/* Text Content */}
        <div className="flex-1 max-w-2xl text-center lg:text-left">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium animate-fade-in">
            Available for new opportunities
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Hi, It's <br className="hidden md:block"/>
            <span className="text-primary">Ahtisham</span>
          </h1>
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground/90 mb-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            I'm a <span className="text-accent text-animation">Software Engineer</span>
          </h3>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi omnis sapiente velit pariatur sit! Ratione nam rerum magni cum, ipsam veniam debitis, nulla quasi rem corrupti sit, earum eligendi! Natus!
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
              View Projects <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              Contact Me <Mail className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex-1 w-full max-w-sm lg:max-w-md animate-fade-in mx-auto lg:mx-0" style={{ animationDelay: "0.2s" }}>
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
            <img 
              src={myprofile} 
              alt="Ahtisham Profile" 
              className="w-full h-auto object-contain object-top scale-100 group-hover:scale-105 transition-transform duration-500 ease-out" 
            />
            {/* Soft gradient overlay at bottom for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Home;

