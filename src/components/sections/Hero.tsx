import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';

const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      id="home" 
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/50 z-0" />
      
      {/* Animated dots background */}
      <div className="absolute inset-0 z-0 opacity-30">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              backgroundColor: i % 3 === 0 ? '#6d28d9' : i % 3 === 1 ? '#0ea5e9' : '#ec4899',
              width: `${Math.random() * 5 + 2}px`,
              height: `${Math.random() * 5 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `pulse-slow ${Math.random() * 4 + 2}s infinite`
            }}
          />
        ))}
      </div>
      
      <motion.div 
        className="container-custom relative z-10 flex flex-col items-center text-center"
        style={{ y, opacity }}
      >


      <div className="relative inline-block mb-6 pt-[0.5px] px-[0.5px] pb-[0.5px] rounded-full overflow-hidden rainbow-border">
      <motion.span
        className="relative z-10 inline-block px-6 pt-[4px] pb-[2px] rounded-full bg-neutral-900 text-neutral-100 font-medium text-base"
      >
        Hello, I'm Harsh
      </motion.span>
    </div>


        
        <motion.h1
          className="heading-1 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <span className="block">Creating digital experiences</span>
          <span className="gradient-text">that make a difference</span>
        </motion.h1>
        
        <motion.p
          className="paragraph max-w-2xl mb-8 text-neutral-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          I'm a front-end developer specializing in building exceptional digital experiences. 
          Currently, I'm focused on creating accessible, human-centered products.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <a href="#projects" className="btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn-outline">
            Get In Touch
          </a>
        </motion.div>
        
        <motion.div 
          className="flex space-x-6 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-primary transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-secondary transition-colors duration-300"
            aria-label="Twitter"
          >
            <Twitter size={24} />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-accent transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
        </motion.div>
      </motion.div>
      
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-neutral-500 hover:text-neutral-300 transition-colors duration-300"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </motion.a>
    </section>
  );
};

export default Hero;