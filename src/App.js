import React from 'react';
import Header from './components/header/Header';
import Home from './components/Home';
import Background from './components/background/Background';
import Services from './components/services/Services';
import Achievements from './components/achievements/Achievements';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Certifications from './components/certifications/Certifications';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Background />
      <About />
      <Skills/>
      <Certifications />
      <Projects />
      <Services />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
