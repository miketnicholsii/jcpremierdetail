import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const FadeIn = ({ children, className = "", delay = 0 }: AnimatedSectionProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={
        shouldReduceMotion
          ? { duration: 0, delay: 0 }
          : { duration: 0.6, delay, ease: "easeOut" }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const SlideInLeft = ({ children, className = "", delay = 0 }: AnimatedSectionProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={
        shouldReduceMotion
          ? { duration: 0, delay: 0 }
          : { duration: 0.6, delay, ease: "easeOut" }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const SlideInRight = ({ children, className = "", delay = 0 }: AnimatedSectionProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={
        shouldReduceMotion
          ? { duration: 0, delay: 0 }
          : { duration: 0.6, delay, ease: "easeOut" }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const ScaleIn = ({ children, className = "", delay = 0 }: AnimatedSectionProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={
        shouldReduceMotion
          ? { duration: 0, delay: 0 }
          : { duration: 0.5, delay, ease: "easeOut" }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: shouldReduceMotion ? { staggerChildren: 0 } : { staggerChildren: 0.1 },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: shouldReduceMotion ? 0 : 0.5 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
