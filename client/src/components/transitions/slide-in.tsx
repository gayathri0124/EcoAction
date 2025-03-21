import { motion } from "framer-motion";
import { ReactNode } from "react";

type Direction = "left" | "right" | "up" | "down";

interface SlideInProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function SlideIn({ 
  children, 
  direction = "up", 
  delay = 0, 
  duration = 0.5,
  className = "" 
}: SlideInProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case "left": return { x: -100, y: 0 };
      case "right": return { x: 100, y: 0 };
      case "up": return { x: 0, y: 100 };
      case "down": return { x: 0, y: -100 };
      default: return { x: 0, y: 100 };
    }
  };

  return (
    <motion.div
      initial={{ ...getInitialPosition(), opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{ delay, duration, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}