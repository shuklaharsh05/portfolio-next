import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon?: string;
}

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills: Skill[] = [
    { name: "HTML5", level: 95, category: "Frontend" },
    { name: "CSS3/Sass", level: 90, category: "Frontend" },
    { name: "JavaScript", level: 92, category: "Frontend" },
    { name: "TypeScript", level: 85, category: "Frontend" },
    { name: "React", level: 90, category: "Frontend" },
    { name: "Next.js", level: 88, category: "Frontend" },
    { name: "Tailwind CSS", level: 95, category: "Frontend" },
    { name: "Node.js", level: 82, category: "Backend" },
    { name: "Express", level: 78, category: "Backend" },
    { name: "MongoDB", level: 75, category: "Backend" },
    { name: "MySQL", level: 70, category: "Backend" },
    { name: "UI/UX Design", level: 85, category: "Design" },
    { name: "Figma", level: 87, category: "Design" },
    { name: "Git/GitHub", level: 88, category: "Tools" },
  ];

  const categories = [...new Set(skills.map(skill => skill.category))];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-neutral-900/30">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-900/20 via-background to-background opacity-30" />
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span 
            className="text-sm font-medium text-accent mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            MY EXPERTISE
          </motion.span>
          
          <motion.h2 
            className="heading-2 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Skills & Technologies
          </motion.h2>
          
          <motion.p 
            className="paragraph max-w-3xl text-neutral-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I'm constantly learning and keeping up with the latest technologies. 
            Here's a snapshot of my current technical toolkit.
          </motion.p>
        </div>
        
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <motion.div
              variants={container}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="space-y-6"
            >
              {skills.slice(0, 7).map((skill, index) => (
                <motion.div key={index} variants={item} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">{skill.name}</h3>
                    <span className="text-sm text-neutral-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-neutral-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.1 * index, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <div>
            <motion.div
              variants={container}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="space-y-6"
            >
              {skills.slice(7, 14).map((skill, index) => (
                <motion.div key={index} variants={item} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">{skill.name}</h3>
                    <span className="text-sm text-neutral-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-neutral-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-secondary-500 to-primary-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.1 * index, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <h3 className="text-xl font-semibold mb-4 text-center gradient-text">{category}</h3>
              <div className="space-y-2">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, idx) => (
                    <div key={idx} className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-primary mr-2" />
                      <span className="text-neutral-300">{skill.name}</span>
                    </div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;