import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  technologies: string[];
  liveLink: string;
  githubLink: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Echo - A Music Streaming Platform",
      description: "A modern music streaming platform with personalized recommendations and playlist features.",
      category: "Web Application",
      image: "https://images.pexels.com/photos/7130560/pexels-photo-7130560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      liveLink: "https://example.com",
      githubLink: "https://github.com"
    },
    {
      id: 2,
      title: "Pixel - Photography Portfolio",
      description: "A minimalist portfolio site for photographers with gallery and booking features.",
      category: "Website",
      image: "https://images.pexels.com/photos/310435/pexels-photo-310435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Next.js", "Tailwind CSS", "Firebase"],
      liveLink: "https://example.com",
      githubLink: "https://github.com"
    },
    {
      id: 3,
      title: "TaskFlow - Project Management Tool",
      description: "A Kanban-style project management application for teams and individuals.",
      category: "Web Application",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Vue.js", "Express", "PostgreSQL"],
      liveLink: "https://example.com",
      githubLink: "https://github.com"
    },
    {
      id: 4,
      title: "Bistro - Restaurant Website",
      description: "A responsive website for a high-end restaurant with online reservation system.",
      category: "Website",
      image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["React", "GSAP", "Netlify"],
      liveLink: "https://example.com",
      githubLink: "https://github.com"
    },
    {
      id: 5,
      title: "EcoTrack - Carbon Footprint Calculator",
      description: "An application that helps users track and reduce their carbon footprint.",
      category: "Web Application",
      image: "https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["React", "Chart.js", "Firebase"],
      liveLink: "https://example.com",
      githubLink: "https://github.com"
    },
    {
      id: 6,
      title: "NewsLens - AI News Aggregator",
      description: "A news aggregator with AI-powered personalization and summarization features.",
      category: "Web Application",
      image: "https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Next.js", "TensorFlow.js", "MongoDB"],
      liveLink: "https://example.com",
      githubLink: "https://github.com"
    }
  ];

  const [filter, setFilter] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const categories = ["All", ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = filter 
    ? projects.filter(project => project.category === filter)
    : projects;

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span 
            className="text-sm font-medium text-secondary mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            MY WORK
          </motion.span>
          
          <motion.h2 
            className="heading-2 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Featured Projects
          </motion.h2>
          
          <motion.p 
            className="paragraph max-w-3xl text-neutral-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A selection of my recent work, showcasing my expertise in web development, design, and problem-solving.
          </motion.p>
        </div>
        
        <motion.div 
          className="flex flex-wrap justify-center mb-12 gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setFilter(category === "All" ? null : category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                (category === "All" && filter === null) || category === filter
                  ? "bg-primary text-white"
                  : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
        
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="card group"
              >
                <div className="relative overflow-hidden aspect-[16/9]">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                  
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/80 text-white rounded-full mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold mb-2 transition-transform duration-300 group-hover:translate-y-0 translate-y-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-neutral-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="text-xs bg-neutral-800 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-secondary/20 text-secondary hover:bg-secondary/30 transition-colors duration-300"
                        aria-label={`View ${project.title} live site`}
                      >
                        <ExternalLink size={18} />
                      </a>
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-neutral-700/20 text-neutral-300 hover:bg-neutral-700/40 transition-colors duration-300"
                        aria-label={`View ${project.title} GitHub repository`}
                      >
                        <Github size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        <div className="flex justify-center mt-12">
          <motion.a 
            href="https://github.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            View More on GitHub <Github size={18} className="ml-2" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Projects;