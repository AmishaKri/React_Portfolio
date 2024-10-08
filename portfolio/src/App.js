import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Projects from './components/Projects';
import TechSkills from './components/TechSkills';
import Contact from './components/Contact';



function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <TechSkills/>
      <Contact/>
     
      <SocialLinks/>
    </div>
  );
}

export default App;
