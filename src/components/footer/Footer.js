import React from 'react';

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background py-12">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left flex flex-col gap-4">
          <ul className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm font-medium text-muted-foreground">
            <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
            <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
            <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
            <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
          </ul>
          <p className="text-sm text-muted-foreground/60">
            © {new Date().getFullYear()} Ahtisham Ilyas. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://www.linkedin.com/in/ahtishamilyas/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <i className="fa-brands fa-linkedin text-xl leading-none" />
          </a>
          <a href="https://github.com/0kakarot0" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <i className="fa-brands fa-github text-xl leading-none" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <i className="fa-brands fa-instagram text-xl leading-none" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <i className="fa-brands fa-twitter text-xl leading-none" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;