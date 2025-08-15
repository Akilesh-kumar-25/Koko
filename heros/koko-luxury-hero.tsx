"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChefHat, Utensils, Star, MapPin, Users, Sparkles, Crown, Coffee } from 'lucide-react';
import { KokoLuxuryBackground } from '@/components/ui/koko-luxury-background';

export const KokoLuxuryHero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [-5, 5, -5],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      <KokoLuxuryBackground />
      
      {/* Navigation Bar */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-50 bg-black/20 backdrop-blur-md border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-8 h-8 bg-gradient-to-r from-[#FF6B35] to-[#FFBF00] rounded-full flex items-center justify-center"
              >
                <Crown className="w-4 h-4 text-white" />
              </motion.div>
              <span className="text-2xl font-black text-white tracking-tight">Koko</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-white/80 hover:text-[#FF6B35] transition-colors duration-300 font-medium">Menu</a>
              <a href="#" className="text-white/80 hover:text-[#FF6B35] transition-colors duration-300 font-medium">Locations</a>
              <a href="#" className="text-white/80 hover:text-[#FF6B35] transition-colors duration-300 font-medium">About</a>
              <a href="#" className="text-white/80 hover:text-[#FF6B35] transition-colors duration-300 font-medium">Contact</a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Floating Decorative Elements */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-20 left-10 z-20"
      >
        <div className="w-16 h-16 bg-gradient-to-r from-[#FF6B35]/20 to-[#FFBF00]/20 rounded-full backdrop-blur-sm border border-white/10 flex items-center justify-center">
          <ChefHat className="w-8 h-8 text-[#FFBF00]" />
        </div>
      </motion.div>

      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '2s' }}
        className="absolute top-32 right-20 z-20"
      >
        <div className="w-12 h-12 bg-gradient-to-r from-[#FFBF00]/20 to-[#FF6B35]/20 rounded-full backdrop-blur-sm border border-white/10 flex items-center justify-center">
          <Utensils className="w-6 h-6 text-[#FF6B35]" />
        </div>
      </motion.div>

      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '4s' }}
        className="absolute bottom-32 left-20 z-20"
      >
        <div className="w-14 h-14 bg-gradient-to-r from-[#FF6B35]/15 to-[#FFBF00]/15 rounded-full backdrop-blur-sm border border-white/10 flex items-center justify-center">
          <Coffee className="w-7 h-7 text-[#FFBF00]" />
        </div>
      </motion.div>

      <motion.div
        variants={pulseVariants}
        animate="animate"
        className="absolute top-1/2 right-10 z-20"
      >
        <Sparkles className="w-6 h-6 text-[#FFBF00]" />
      </motion.div>

      {/* Main Hero Content */}
      <div className="relative z-30 flex items-center justify-center min-h-[calc(100vh-4rem)] px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-5xl mx-auto"
        >
          {/* Established Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-2 mb-8 border border-white/20"
          >
            <Star className="w-4 h-4 text-[#FFBF00]" />
            <span className="text-[#FFBF00] font-medium text-sm tracking-wide">ESTABLISHED 2024</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-6 leading-tight tracking-tight"
          >
            Welcome to{' '}
            <span className="bg-gradient-to-r from-[#FF6B35] to-[#FFBF00] bg-clip-text text-transparent">
              Koko
            </span>
            <br />
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="block"
            >
              Flavor That{' '}
              <span className="relative">
                Speaks!
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                  className="absolute bottom-2 left-0 right-0 h-2 bg-gradient-to-r from-[#FF6B35] to-[#FFBF00] rounded-full origin-left"
                />
              </span>
            </motion.span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl lg:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Experience the pinnacle of culinary excellence with our premium franchise. 
            Where authentic flavors meet luxury dining in every bite.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-[#FF6B35] to-[#FFBF00] rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-black text-white">12</div>
                <div className="text-sm text-white/60 font-medium">Branches</div>
              </div>
            </div>

            <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-[#FFBF00] to-[#FF6B35] rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-black text-white">12,000+</div>
                <div className="text-sm text-white/60 font-medium">Happy Customers</div>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#FF6B35] to-[#FFBF00] hover:from-[#e55a2b] hover:to-[#e6ac00] text-white font-bold text-lg px-8 py-6 rounded-2xl shadow-2xl border-0 transition-all duration-300 hover:shadow-[0_0_50px_rgba(255,107,53,0.5)]"
              >
                <ChefHat className="w-5 h-5 mr-2" />
                Order Now
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 font-bold text-lg px-8 py-6 rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              >
                <Crown className="w-5 h-5 mr-2" />
                Franchise Opportunities
              </Button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-gradient-to-b from-[#FF6B35] to-[#FFBF00] rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};