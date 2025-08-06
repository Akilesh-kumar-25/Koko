"use client";

import React, { useRef } from 'react';
import { motion } from "@motionone/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Crown, Sparkles, Star, ChefHat, Award, Globe } from 'lucide-react';
import { motion } from "@motionone/react";

export const KokoLuxuryCTA = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      rotate: [0, 5, 0, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const sparkleVariants = {
    animate: {
      scale: [0.8, 1.2, 0.8],
      opacity: [0.3, 1, 0.3],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        staggerDelay: 0.5
      }
    }
  };

  return (
    <motion.section 
      ref={ref}
      style={{ opacity, scale }}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-red-50"
    >
      {/* Luxury Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6B35]/5 via-transparent to-[#2C2A2E]/5" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNIDAgMCBMIDIwMCAwIEwgMjAwIDIwMCBMIDAgMjAwIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzJDMkEyRSIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjMiLz48L3N2Zz4=')] bg-repeat" />
      </div>

      {/* Floating Decorative Elements */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-20 left-10 text-[#FF6B35] opacity-20"
      >
        <Crown size={60} />
      </motion.div>
      
      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '2s' }}
        className="absolute top-32 right-16 text-[#FF6B35] opacity-15"
      >
        <ChefHat size={80} />
      </motion.div>

      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '4s' }}
        className="absolute bottom-20 left-20 text-[#2C2A2E] opacity-10"
      >
        <Award size={50} />
      </motion.div>

      {/* Sparkle Elements */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          variants={sparkleVariants}
          animate="animate"
          style={{ 
            animationDelay: `${i * 0.5}s`,
            left: `${20 + (i * 10)}%`,
            top: `${15 + (i * 8)}%`
          }}
          className="absolute text-[#FF6B35] opacity-30"
        >
          <Sparkles size={24} />
        </motion.div>
      ))}

      {/* Main Content */}
      <motion.div 
        style={{ y }}
        className="relative z-10 container mx-auto px-6 py-20 lg:py-32"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[70vh]">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-[#2C2A2E]/70 font-medium"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-[#FF6B35] text-[#FF6B35]" />
                ))}
              </div>
              <span className="text-sm">Trusted by 500+ franchise partners worldwide</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-5xl lg:text-7xl font-black text-[#2C2A2E] leading-tight"
            >
              Join the{' '}
              <span className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] bg-clip-text text-transparent">
                Luxury
              </span>
              <br />
              Food Revolution
            </motion.h1>

            {/* Subheading */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-xl lg:text-2xl text-[#2C2A2E]/80 font-medium leading-relaxed max-w-lg"
            >
              Experience premium flavors that redefine dining. Start your franchise journey or indulge in our signature dishes.
            </motion.p>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              {[
                "Premium ingredients sourced globally",
                "Proven business model with 98% success rate",
                "Award-winning culinary innovation"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FF6B35]" />
                  <span className="text-[#2C2A2E]/70 font-medium">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 pt-6"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group"
              >
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-8 py-6 text-lg font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:shadow-[#FF6B35]/30 border-0 min-w-[200px]"
                >
                  <Crown className="mr-2 group-hover:rotate-12 transition-transform duration-300" size={20} />
                  Start Your Franchise
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group"
              >
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-2 border-[#2C2A2E] text-[#2C2A2E] px-8 py-6 text-lg font-bold rounded-xl hover:bg-[#2C2A2E] hover:text-white transition-all duration-300 group-hover:shadow-lg min-w-[200px]"
                >
                  <Globe className="mr-2 group-hover:rotate-12 transition-transform duration-300" size={20} />
                  Order Online
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Central Glow Effect */}
            <div className="relative w-full max-w-lg mx-auto">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/20 to-[#FF8A50]/20 rounded-full blur-3xl scale-150" />
              
              {/* Rotating Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-4 border-dashed border-[#FF6B35]/30 scale-110"
              />
              
              {/* Content Circle */}
              <div className="relative bg-gradient-to-br from-white/90 to-[#FF6B35]/5 backdrop-blur-sm rounded-full p-16 border border-[#FF6B35]/20 shadow-2xl">
                <div className="text-center space-y-6">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="text-[#FF6B35] mx-auto"
                  >
                    <ChefHat size={80} />
                  </motion.div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-[#2C2A2E]">Premium Quality</h3>
                    <p className="text-[#2C2A2E]/70 font-medium">Crafted with passion</p>
                  </div>
                  
                  <div className="flex justify-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          delay: i * 0.2 
                        }}
                      >
                        <Star 
                          size={16} 
                          className="fill-[#FF6B35] text-[#FF6B35]" 
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute -top-4 -left-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-[#FF6B35]/20"
            >
              <div className="text-center">
                <div className="text-2xl font-black text-[#FF6B35]">500+</div>
                <div className="text-xs font-medium text-[#2C2A2E]/70">Franchises</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-[#FF6B35]/20"
            >
              <div className="text-center">
                <div className="text-2xl font-black text-[#FF6B35]">98%</div>
                <div className="text-xs font-medium text-[#2C2A2E]/70">Success Rate</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-sm text-[#2C2A2E]/60 font-medium mb-4">
            Trusted by industry leaders worldwide
          </p>
          <div className="flex justify-center items-center gap-8 opacity-40">
            <div className="w-20 h-8 bg-[#2C2A2E]/20 rounded" />
            <div className="w-24 h-8 bg-[#2C2A2E]/20 rounded" />
            <div className="w-16 h-8 bg-[#2C2A2E]/20 rounded" />
            <div className="w-20 h-8 bg-[#2C2A2E]/20 rounded" />
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};