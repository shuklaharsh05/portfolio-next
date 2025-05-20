import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FileCode, Layout, Zap } from 'lucide-react';
import ScrollingText from '../ui/TextOpacity';

const About: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const services = [
    {
      icon: <FileCode size={24} />,
      title: "Web Development",
      description: "Building responsive, accessible, and performant websites using modern technologies."
    },
    {
      icon: <Layout size={24} />,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces with focus on user experience."
    },
    {
      icon: <Zap size={24} />,
      title: "Performance Optimization",
      description: "Optimizing web applications for speed, SEO, and accessibility."
    },
    // {
    //   icon: <Users size={24} />,
    //   title: "Consultation",
    //   description: "Providing expert advice on digital strategies and technical solutions."
    // }
  ];

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="about" ref={ref} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-background to-transparent" />
      </div>
      
      <motion.div 
        className="container-custom relative z-10"
        style={{ y, opacity }}
      >
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span 
            className="text-sm font-medium text-primary mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            ABOUT ME
          </motion.span>
          
          <motion.h2 
            className="heading-2 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Who I Am & What I Offer
          </motion.h2>
          
          <ScrollingText className="paragraph max-w-3xl text-neutral-400 text-xl font-medium" text="I'm a passionate front-end developer with 5+ years of experience crafting digital 
            experiences for the web. My approach combines clean code, innovative design, and 
            a deep understanding of user needs." />
        </div>
        
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="heading-3 mb-6">My Journey</h3>
            <p className="paragraph text-neutral-400 mb-4">
              My journey began with a curiosity about how websites work. This curiosity evolved into a 
              passion for creating seamless user experiences that marry form and function.
            </p>
            <p className="paragraph text-neutral-400 mb-6">
              With a background in both design and development, I bridge the gap between aesthetics and 
              technical implementation, ensuring that both aspects receive equal attention in my projects.
            </p>
            <ul className="space-y-2 text-neutral-400">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>BSc in Computer Science, Stanford University</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Senior Front-end Developer at TechCorp</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Freelance UI/UX Designer for various startups</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            className="relative aspect-[4/3] rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="John Doe working on a computer" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </motion.div>
        </div> */}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="card flex flex-col items-center justify-center p-6"
              custom={index}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <div className="p-3 mb-4 rounded-lg bg-primary/10 w-fit text-primary">
                {service.icon}
              </div>
              <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
              <p className="text-neutral-400 text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;