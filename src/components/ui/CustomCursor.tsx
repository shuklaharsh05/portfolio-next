import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CustomCursorProps {
  position: { x: number; y: number };
  enlarged: boolean;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ position, enlarged }) => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    // Fade in the cursor after component mounts
    const timer = setTimeout(() => setOpacity(1), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="custom-cursor"
      animate={{
        x: position.x,
        y: position.y,
        scale: enlarged ? 1.5 : 1,
        opacity
      }}
      transition={{
        type: "spring",
        mass: 0.1,
        stiffness: 200,
        damping: 10,
        opacity: { duration: 0.3 }
      }}
    />
  );
};

export default CustomCursor;