import React from 'react';
import Header from './components/header/Header';
import Home from './components/Home';
import Background from './components/background/Background';
import Services from './components/services/Services';
import Testimonials from './components/testimonials/Testimonials';
// import About from './components/About';
import Skills from './components/skills/Skills';

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
      <Skills/>
      <Projects />
      <Services />
      <Testimonials />

      {/* <About /> */}
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
