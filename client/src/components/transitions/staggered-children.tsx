import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StaggeredChildrenProps {
  children: ReactNode;
  staggerDelay?: number;
  containerDelay?: number;
  className?: string;
}

export default function StaggeredChildren({ 
  children, 
  staggerDelay = 0.1, 
  containerDelay = 0,
  className = "" 
}: StaggeredChildrenProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: containerDelay,
        when: "beforeChildren",
        staggerChildren: staggerDelay
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={childVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}