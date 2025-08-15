"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface KokoLuxuryBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

export const KokoLuxuryBackground: React.FC<KokoLuxuryBackgroundProps> = ({ 
  children, 
  className 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={cn(
        "relative w-full h-screen overflow-hidden",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* Primary gradient layer */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          background: `
            radial-gradient(ellipse at 30% 20%, #722F37 0%, transparent 50%),
            radial-gradient(ellipse at 70% 80%, #3C2415 0%, transparent 50%),
            linear-gradient(135deg, #2C2A2E 0%, #0F0F0F 100%)
          `
        }}
        animate={{
          backgroundPosition: isHovered 
            ? ['0% 0%', '20% 20%', '0% 0%']
            : ['0% 0%', '10% 10%', '0% 0%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Hover enhancement layer */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          background: `
            radial-gradient(circle at 40% 40%, rgba(255, 107, 53, 0.15) 0%, transparent 60%),
            radial-gradient(circle at 80% 20%, rgba(255, 191, 0, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 20% 80%, rgba(255, 107, 53, 0.08) 0%, transparent 40%)
          `,
          opacity: isHovered ? 1 : 0
        }}
        animate={{
          opacity: isHovered ? [0, 1, 0.8, 1] : 0,
          scale: isHovered ? [1, 1.02, 1] : 1,
        }}
        transition={{
          duration: isHovered ? 3 : 1.5,
          ease: "easeInOut",
          repeat: isHovered ? Infinity : 0
        }}
      />

      {/* Luxury depth layer */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          background: `
            radial-gradient(ellipse at 60% 30%, rgba(114, 47, 55, 0.4) 0%, transparent 70%),
            radial-gradient(ellipse at 10% 70%, rgba(60, 36, 21, 0.3) 0%, transparent 60%),
            linear-gradient(45deg, rgba(44, 42, 46, 0.2) 0%, rgba(15, 15, 15, 0.4) 100%)
          `
        }}
        animate={{
          backgroundPosition: ['0% 0%', '50% 50%', '0% 0%'],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Glow effect layer */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          background: `
            radial-gradient(circle at 50% 50%, rgba(255, 107, 53, 0.05) 0%, transparent 80%),
            radial-gradient(circle at 25% 25%, rgba(255, 191, 0, 0.03) 0%, transparent 60%)
          `,
          filter: 'blur(40px)',
        }}
        animate={{
          opacity: isHovered ? [0.3, 0.7, 0.3] : [0.1, 0.3, 0.1],
          scale: isHovered ? [1, 1.1, 1] : [1, 1.05, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Texture overlay */}
      <div
        className="absolute inset-0 w-full h-full opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0),
            radial-gradient(circle at 3px 3px, rgba(255,255,255,0.05) 1px, transparent 0)
          `,
          backgroundSize: '20px 20px, 40px 40px',
          mixBlendMode: 'overlay'
        }}
      />

      {/* Subtle grain texture */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          background: `
            repeating-linear-gradient(
              90deg,
              rgba(255,255,255,0.01) 0px,
              rgba(255,255,255,0.01) 1px,
              transparent 1px,
              transparent 2px
            ),
            repeating-linear-gradient(
              0deg,
              rgba(255,255,255,0.01) 0px,
              rgba(255,255,255,0.01) 1px,
              transparent 1px,
              transparent 2px
            )
          `,
          opacity: 0.6
        }}
        animate={{
          opacity: isHovered ? [0.6, 0.8, 0.6] : [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Content container */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>

      {/* Vignette effect */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background: `radial-gradient(
            ellipse at center,
            transparent 0%,
            transparent 70%,
            rgba(15, 15, 15, 0.3) 100%
          )`
        }}
      />
    </motion.div>
  );
};