import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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
      icon: '01',
      title: "Web Development",
      image: 'https://images.pexels.com/photos/7130560/pexels-photo-7130560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: "Building responsive, accessible, and performant websites using modern technologies."
    },
    {
      icon: '02',
      title: "UI/UX Design",
      image: 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: "Creating intuitive and beautiful user interfaces with focus on user experience."
    },
    {
      icon: '03',
      title: "Performance Optimization",
      image: 'https://images.pexels.com/photos/7130560/pexels-photo-7130560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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
        
        
        <div className="flex flex-col gap-6 lg:gap-0 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`flex flex-col lg:flex-row items-center justify-between max-w-6xl p-6 group ${index !== services.length - 1 ? 'border-b border-neutral-200' : ''} `}
              custom={index}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <div className="p-3 rounded-lg w-fit text-xl font-bold flex gap-4 relative">
                <div className="relative w-12 h-12 overflow-visible">
                  <div className="absolute -left-8 -top-14 w-64 opacity-0 group-hover:opacity-100 scale-50 transition-all duration-500 transform -translate-x-10 group-hover:translate-x-0 group-hover:scale-100 group-hover:-rotate-12">
                    <img 
                      src={service.image} 
                      className="w-full h-full object-cover rounded-lg shadow-lg" 
                      alt={service.title}
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
                <h4 className="text-xl font-semibold mb-2 w-full transform transition-transform duration-500 group-hover:translate-x-44">
                  {service.icon} {service.title}
                </h4>
              </div>
              <p className="text-neutral-400 text-left w-full max-w-md">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;