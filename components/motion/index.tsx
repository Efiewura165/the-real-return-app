import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface MotionSurfaceProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
}

export function FadeIn({ children, className, delay = 0, duration = 0.8, once = true }: MotionSurfaceProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration, delay, ease: [0.22, 1, 0.36, 1] } }}
      viewport={{ once, amount: 0.18 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SlideUp({ children, className, delay = 0, duration = 0.8, once = true }: MotionSurfaceProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration, delay, ease: [0.22, 1, 0.36, 1] } }}
      viewport={{ once, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Reveal({ children, className, delay = 0, duration = 0.9, once = true }: MotionSurfaceProps) {
  return (
    <motion.div
      initial={{ opacity: 0, clipPath: "inset(0 0 100% 0 round 0.3rem)" }}
      whileInView={{ opacity: 1, clipPath: "inset(0 0 0% 0 round 0.3rem)", transition: { duration, delay, ease: [0.22, 1, 0.36, 1] } }}
      viewport={{ once, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerChildrenProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  once?: boolean;
}

export function StaggerChildren({ children, className, stagger = 0.12, once = true }: StaggerChildrenProps) {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.15 }}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: stagger } } }}
      className={className}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <motion.div key={index} variants={variants} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
}

interface ImageRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
}

export function ImageReveal({ children, className, delay = 0, duration = 0.9, once = true }: ImageRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97, y: 16 }}
      whileInView={{ opacity: 1, scale: 1, y: 0, transition: { duration, delay, ease: [0.22, 1, 0.36, 1] } }}
      viewport={{ once, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
