import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const CursorGlow = () => {
  const shouldReduceMotion = useReducedMotion();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) return null;

  return (
    <motion.div
      className="pointer-events-none fixed w-[500px] h-[500px] rounded-full z-0"
      style={{
        background: "radial-gradient(circle, hsl(205 100% 50% / 0.08) 0%, transparent 70%)",
        left: mousePosition.x - 250,
        top: mousePosition.y - 250,
      }}
      animate={{
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        opacity: { duration: 0.3 },
        default: { duration: 0 }
      }}
    />
  );
};

export default CursorGlow;