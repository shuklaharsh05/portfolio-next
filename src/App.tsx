// import React, { useEffect, useState } from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
// import CustomCursor from './components/ui/CustomCursor';

function App() {
  // const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  // const [cursorEnlarged, setCursorEnlarged] = useState(false);

  // useEffect(() => {
    // const moveCursor = (e: MouseEvent) => {
    //   setCursorPosition({ x: e.clientX, y: e.clientY });
    // };

      // window.addEventListener('mousemove', moveCursor);

      // const handleLinkHover = () => setCursorEnlarged(true);
      // const handleLinkLeave = () => setCursorEnlarged(false);

    // const hoverElements = document.querySelectorAll('a, button, .cursor-pointer');
    
    // hoverElements.forEach((element) => {
    //   element.addEventListener('mouseenter', handleLinkHover);
    //   element.addEventListener('mouseleave', handleLinkLeave);
    // });

  //   return () => {
  //     window.removeEventListener('mousemove', moveCursor);
      
  //     hoverElements.forEach((element) => {
  //       element.removeEventListener('mouseenter', handleLinkHover);
  //       element.removeEventListener('mouseleave', handleLinkLeave);
  //     });
  //   };
  // }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* <CustomCursor position={cursorPosition} enlarged={cursorEnlarged} /> */}
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;