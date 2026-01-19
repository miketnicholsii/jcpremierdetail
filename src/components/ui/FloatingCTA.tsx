import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Calendar, Phone, MessageCircle, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getPhoneLink, businessInfo } from "@/data/business";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
      // Close menu when scrolling
      if (isExpanded && window.scrollY < 300) {
        setIsExpanded(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isExpanded]);

  // Close on outside click
  useEffect(() => {
    if (!isExpanded) return;
    
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.floating-cta-container')) {
        setIsExpanded(false);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [isExpanded]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 100, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="floating-cta-container fixed bottom-6 right-4 z-50 md:hidden"
        >
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="absolute bottom-[72px] right-0 flex flex-col gap-3"
              >
                {/* Call Button */}
                <motion.a
                  href={getPhoneLink()}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 bg-card/95 backdrop-blur-sm border border-primary/30 text-foreground px-5 py-3.5 rounded-full shadow-xl hover:bg-primary/10 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-green-500" />
                  </div>
                  <div className="text-left">
                    <span className="text-sm font-semibold block">Call Now</span>
                    <span className="text-[10px] text-muted-foreground">{businessInfo.phone}</span>
                  </div>
                </motion.a>

                {/* Text/Message Button */}
                <motion.a
                  href={`sms:${businessInfo.phone.replace(/-/g, "")}`}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 bg-card/95 backdrop-blur-sm border border-primary/30 text-foreground px-5 py-3.5 rounded-full shadow-xl hover:bg-primary/10 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-blue-500" />
                  </div>
                  <div className="text-left">
                    <span className="text-sm font-semibold block">Text Us</span>
                    <span className="text-[10px] text-muted-foreground">Quick response</span>
                  </div>
                </motion.a>

                {/* Book Online Button */}
                <motion.div whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/booking"
                    onClick={() => setIsExpanded(false)}
                    className="flex items-center gap-3 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-5 py-3.5 rounded-full shadow-xl shadow-primary/30"
                  >
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <span className="text-sm font-semibold block">Book Online</span>
                      <span className="text-[10px] opacity-80">Schedule now</span>
                    </div>
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main FAB Button */}
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            whileTap={{ scale: 0.95 }}
            className={`relative w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
              isExpanded 
                ? "bg-card border border-border" 
                : "bg-gradient-to-r from-primary to-primary/80 shadow-primary/30"
            }`}
          >
            {/* Pulse ring - only when not expanded */}
            {!isExpanded && (
              <span className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
            )}
            
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {isExpanded ? (
                <X className="w-6 h-6 text-foreground relative z-10" />
              ) : (
                <Calendar className="w-6 h-6 text-primary-foreground relative z-10" />
              )}
            </motion.div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;
