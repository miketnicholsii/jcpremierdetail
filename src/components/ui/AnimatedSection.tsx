import { motion, useReducedMotion, useSpring, useTransform, MotionValue } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

// Smooth spring config for premium feel
const springConfig = { stiffness: 100, damping: 30, mass: 1 };

export const FadeIn = ({ children, className = "", delay = 0 }: AnimatedSectionProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={
        shouldReduceMotion
          ? { duration: 0, delay: 0 }
          : { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const FadeInUp = ({ children, className = "", delay = 0 }: AnimatedSectionProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={
        shouldReduceMotion
          ? { duration: 0, delay: 0 }
          : { duration: 1, delay, ease: [0.16, 1, 0.3, 1] }
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
      initial={shouldReduceMotion ? false : { opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={
        shouldReduceMotion
          ? { duration: 0, delay: 0 }
          : { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }
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
      initial={shouldReduceMotion ? false : { opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={
        shouldReduceMotion
          ? { duration: 0, delay: 0 }
          : { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }
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
      initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={
        shouldReduceMotion
          ? { duration: 0, delay: 0 }
          : { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const BlurIn = ({ children, className = "", delay = 0 }: AnimatedSectionProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={
        shouldReduceMotion
          ? { duration: 0, delay: 0 }
          : { duration: 0.8, delay, ease: "easeOut" }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const RevealUp = ({ children, className = "", delay = 0 }: AnimatedSectionProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`overflow-hidden ${className}`}
    >
      <motion.div
        initial={shouldReduceMotion ? false : { y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={
          shouldReduceMotion
            ? { duration: 0, delay: 0 }
            : { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }
        }
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export const StaggerContainer = ({ children, className = "", staggerDelay = 0.1 }: { children: ReactNode; className?: string; staggerDelay?: number }) => {
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
          transition: shouldReduceMotion ? { staggerChildren: 0 } : { staggerChildren: staggerDelay, delayChildren: 0.1 },
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
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          transition: { 
            duration: shouldReduceMotion ? 0 : 0.6,
            ease: [0.16, 1, 0.3, 1]
          } 
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Hover card with 3D tilt effect
export const HoverCard = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      whileHover={shouldReduceMotion ? {} : { 
        scale: 1.02,
        y: -5,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
    >
      {children}
    </motion.div>
  );
};

// Magnetic button effect
export const MagneticButton = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  const shouldReduceMotion = useReducedMotion();
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.15);
    y.set((e.clientY - centerY) * 0.15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={className}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
};

// Parallax scroll effect
interface ParallaxProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  scrollY: MotionValue<number>;
}

export const Parallax = ({ children, className = "", speed = 0.5, scrollY }: ParallaxProps) => {
  const shouldReduceMotion = useReducedMotion();
  const y = useTransform(scrollY, [0, 1000], [0, shouldReduceMotion ? 0 : 1000 * speed]);

  return (
    <motion.div style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};

// Floating animation
export const Float = ({ children, className = "", duration = 3 }: { children: ReactNode; className?: string; duration?: number }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      animate={shouldReduceMotion ? {} : {
        y: [0, -10, 0],
      }}
      transition={shouldReduceMotion ? {} : {
        duration,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
};

// Glow pulse animation
export const GlowPulse = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      animate={shouldReduceMotion ? {} : {
        boxShadow: [
          "0 0 20px hsl(205 100% 50% / 0.3)",
          "0 0 40px hsl(205 100% 50% / 0.5)",
          "0 0 20px hsl(205 100% 50% / 0.3)",
        ]
      }}
      transition={shouldReduceMotion ? {} : {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
};

// Text character animation
export const AnimatedText = ({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number }) => {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(" ");

  return (
    <motion.span className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-[0.25em]">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              className="inline-block"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : {
                      duration: 0.5,
                      delay: delay + wordIndex * 0.1 + charIndex * 0.03,
                      ease: [0.16, 1, 0.3, 1]
                    }
              }
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.span>
  );
};