import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900/50 border-t border-neutral-800 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold gradient-text mb-4">John Doe</h3>
            <p className="mb-4 text-neutral-400 max-w-md">
              A passionate front-end developer crafting beautiful and functional digital experiences.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-primary transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-secondary transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-accent transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:contact@johndoe.com" 
                className="text-neutral-400 hover:text-success transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="#home" className="hover:text-foreground transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="hover:text-foreground transition-colors duration-300">About</a></li>
              <li><a href="#projects" className="hover:text-foreground transition-colors duration-300">Projects</a></li>
              <li><a href="#skills" className="hover:text-foreground transition-colors duration-300">Skills</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-neutral-400">
              <li>India</li>
              <li>harshshukla5092002@gmail.com</li>
              <li>+91 6939827696</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-neutral-800 text-center text-neutral-500">
          <p>&copy; {currentYear} Harsh Shukla. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;