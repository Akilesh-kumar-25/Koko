"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Facebook, Instagram, ChefHat, Utensils, Heart, Sparkles, Coffee, Cake, Gem, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const KokoBeautyOfFood = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

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
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const socialMediaVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { duration: 0.5, ease: "backOut" }
    }
  };

  const beautyCards = [
    {
      icon: <ChefHat className="w-8 h-8" />,
      title: "Artisan Craftsmanship",
      description: "At Koko, every dish is a masterpiece. Our chefs transform humble ingredients into extraordinary culinary art through passion, precision, and years of dedication."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Sensory Symphony",
      description: "Experience the beauty of flavors that dance on your palate. Koko creates a sensory journey where taste, aroma, texture, and visual presentation merge into pure harmony."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Memorable Moments",
      description: "Food at Koko isn't just nourishment—it's connection. Every meal becomes a cherished memory, bringing people together in celebration of life's most beautiful moments."
    }
  ];

  return (
    <section ref={ref} className="relative min-h-screen bg-background overflow-hidden">
      {/* Social Media Icons - Top Right */}
      <motion.div 
        className="fixed top-6 right-6 z-50 flex gap-3"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.div variants={socialMediaVariants}>
          <Button
            size="icon"
            className="bg-primary hover:bg-primary/90 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
            asChild
          >
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-5 h-5" />
            </a>
          </Button>
        </motion.div>
        <motion.div variants={socialMediaVariants}>
          <Button
            size="icon"
            className="bg-primary hover:bg-primary/90 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
            asChild
          >
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5" />
            </a>
          </Button>
        </motion.div>
      </motion.div>

      {/* Background Gradient */}
      <div className="absolute inset-0 koko-gradient-bg opacity-40" />
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 text-primary/20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Utensils className="w-16 h-16" />
      </motion.div>
      
      <motion.div
        className="absolute top-3/4 right-1/4 text-golden-amber/20"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <Coffee className="w-12 h-12" />
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-1/6 text-luxury-burgundy/20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        <Cake className="w-14 h-14" />
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 container mx-auto px-6 py-16 lg:py-24"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-3 mb-4">
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <Gem className="w-8 h-8 text-primary" />
              </motion.div>
              <span className="text-primary font-display font-bold text-lg tracking-widest uppercase">
                Welcome to
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black text-primary mb-4 tracking-tight">
              <motion.span
                className="inline-block"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(255, 107, 53, 0.5)",
                    "0 0 40px rgba(255, 107, 53, 0.8)",
                    "0 0 20px rgba(255, 107, 53, 0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                Koko
              </motion.span>
            </h1>
            <div className="flex items-center justify-center gap-4 text-golden-amber">
              <Star className="w-6 h-6 fill-current" />
              <p className="text-xl md:text-2xl font-display font-medium">
                Where Food Becomes Art
              </p>
              <Star className="w-6 h-6 fill-current" />
            </div>
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-foreground/90 max-w-4xl mx-auto leading-relaxed font-body"
          >
            At <span className="text-primary font-semibold">Koko</span>, we believe that food is the ultimate expression of beauty, 
            creativity, and human connection. Every ingredient tells a story, every dish paints a picture, 
            and every meal creates a memory that lasts a lifetime.
          </motion.p>
        </div>

        {/* Beauty Cards Grid */}
        <motion.div
          variants={itemVariants}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {beautyCards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                rotateY: 5 
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Card className="group h-full bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm border-border/50 hover-gradient-shift overflow-hidden">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <motion.div
                    className="mx-auto mb-6 p-4 rounded-full bg-gradient-to-br from-primary to-golden-amber text-white group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {card.icon}
                  </motion.div>
                  <h3 className="text-2xl font-display font-bold text-primary mb-4 group-hover:text-golden-amber transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed flex-grow font-body">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Philosophy Section */}
        <motion.div
          variants={itemVariants}
          className="text-center max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-r from-luxury-burgundy/20 to-deep-espresso/20 backdrop-blur-sm border border-primary/20 rounded-3xl p-8 md:p-12">
            <motion.div
              className="flex justify-center mb-6"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-golden-amber" />
                <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">
                  The <span className="text-golden-amber">Koko</span> Philosophy
                </h2>
                <Sparkles className="w-8 h-8 text-golden-amber" />
              </div>
            </motion.div>
            
            <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed mb-8 font-body">
              Food is more than sustenance—it's poetry written in flavors, sculptures carved from ingredients, 
              and symphonies composed of textures and aromas. At <span className="text-primary font-semibold">Koko</span>, 
              we honor this artistry by treating every dish as a canvas and every meal as a celebration 
              of life's most beautiful moments.
            </p>
            
            <motion.div
              className="flex justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-golden-amber hover:from-golden-amber hover:to-primary text-white font-display font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-2xl transition-all duration-300 luxury-glow"
              >
                Experience the Beauty
                <Heart className="w-5 h-5 ml-2 fill-current" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Decoration */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-golden-amber to-luxury-burgundy"
        initial={{ scaleX: 0 }}
        animate={controls}
        variants={{
          hidden: { scaleX: 0 },
          visible: { scaleX: 1, transition: { duration: 1.5, delay: 1 } }
        }}
        style={{ transformOrigin: "left" }}
      />
    </section>
  );
};