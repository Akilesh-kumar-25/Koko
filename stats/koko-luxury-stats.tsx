"use client";

import { motion } from "@motionone/react";
import { useRef, useEffect, useState } from "react";
import { Building2, Users, Calendar, Award, TrendingUp, MapPin } from "lucide-react";

const useCountAnimation = (endValue: number, duration: number = 2, shouldStart: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * endValue));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [endValue, duration, shouldStart]);

  return count;
};

const StatCard = ({ 
  icon: Icon, 
  value, 
  suffix = "", 
  prefix = "", 
  label, 
  delay = 0,
  shouldAnimate = false 
}: {
  icon: any;
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  delay?: number;
  shouldAnimate?: boolean;
}) => {
  const animatedValue = useCountAnimation(value, 2.5, shouldAnimate);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.8, 
        delay, 
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      className="relative group"
    >
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#722F37]/20 via-[#3C2415]/20 to-[#2C2A2E]/20 backdrop-blur-md border border-white/10 p-8 transition-all duration-500 hover:scale-105 hover:bg-gradient-to-br hover:from-[#722F37]/30 hover:via-[#3C2415]/30 hover:to-[#2C2A2E]/30">
        
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#FF6B35]/20 to-[#FFBF00]/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100 blur-xl" />
        
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,53,0.3),transparent_70%)]" />
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div className="p-4 rounded-2xl bg-gradient-to-r from-[#FF6B35] to-[#FFBF00] shadow-lg shadow-[#FF6B35]/25">
              <Icon className="h-8 w-8 text-white" />
            </div>
            
            <motion.div
              className="w-16 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FFBF00] rounded-full opacity-60"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: delay + 0.5 }}
            />
          </div>
          
          <div className="space-y-3">
            <motion.div
              className="text-4xl font-black bg-gradient-to-r from-[#FF6B35] to-[#FFBF00] bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: delay + 0.8 }}
            >
              {prefix}{animatedValue.toLocaleString()}{suffix}
            </motion.div>
            
            <p className="text-white/90 font-semibold text-lg leading-tight">
              {label}
            </p>
          </div>
        </div>

        {/* Hover shine effect */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>
      </div>
    </motion.div>
  );
};

export const KokoLuxuryStats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      icon: Building2,
      value: 12,
      label: "Premium Branches",
      delay: 0.1
    },
    {
      icon: Users,
      value: 12000,
      suffix: "+",
      label: "Satisfied Customers",
      delay: 0.2
    },
    {
      icon: Calendar,
      value: 2024,
      label: "Year Established",
      delay: 0.3
    },
    {
      icon: Award,
      value: 50,
      suffix: "+",
      label: "Signature Dishes",
      delay: 0.4
    },
    {
      icon: TrendingUp,
      value: 98,
      suffix: "%",
      label: "Customer Satisfaction",
      delay: 0.5
    },
    {
      icon: MapPin,
      value: 5,
      suffix: "+",
      label: "Cities Served",
      delay: 0.6
    }
  ];

  return (
    <section ref={ref} className="relative py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2C2A2E] via-[#3C2415] to-[#722F37]" />
      
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,107,53,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(255,191,0,0.1),transparent_50%)]" />
      
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gradient-to-r from-[#FF6B35]/10 to-[#FFBF00]/10 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-gradient-to-r from-[#722F37]/15 to-[#3C2415]/15 blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-[#FF6B35] via-[#FFBF00] to-[#FF6B35] bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Numbers That Define Excellence
          </motion.h2>
          
          <motion.p 
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            From humble beginnings to luxury dining excellence, discover the remarkable journey and achievements that make Koko a culinary destination of choice.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              prefix={stat.prefix}
              label={stat.label}
              delay={stat.delay}
              shouldAnimate={isInView}
            />
          ))}
        </motion.div>

        {/* Bottom decorative element */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#FF6B35] to-transparent rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};