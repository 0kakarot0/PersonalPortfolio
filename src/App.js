import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Background from './components/Background';
import Services from './components/Services';
import Testimonials from './components/Testimonials';

// import About from './components/About';
// import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Background />
      {/* <Projects /> */}
      <Services />
      <Testimonials />

      {/* <About /> */}
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
