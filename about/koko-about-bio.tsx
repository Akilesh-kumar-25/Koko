"use client";

import { motion } from "framer-motion";
import { ChefHat, Heart, Star, Trophy, Utensils, Users, MapPin, Clock, Award, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const KokoAboutBio = () => {
  const achievements = [
    {
      icon: MapPin,
      number: "12+",
      label: "Branches",
      description: "Across multiple locations"
    },
    {
      icon: Users,
      number: "12K+",
      label: "Happy Customers",
      description: "And counting every day"
    },
    {
      icon: Clock,
      number: "2024",
      label: "Established",
      description: "Born from passion"
    },
    {
      icon: Award,
      number: "100%",
      label: "Fresh Ingredients",
      description: "Quality guaranteed"
    }
  ];

  const values = [
    {
      icon: ChefHat,
      title: "Culinary Excellence",
      description: "Every dish crafted with precision and passion by our expert chefs"
    },
    {
      icon: Heart,
      title: "Customer Love",
      description: "Building lasting relationships through exceptional service and care"
    },
    {
      icon: Star,
      title: "Premium Quality",
      description: "Only the finest ingredients make it to your plate, no compromises"
    },
    {
      icon: Target,
      title: "Authentic Flavors",
      description: "Traditional recipes with a modern twist, preserving authentic taste"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 koko-gradient-bg relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-golden-amber/20 to-transparent rounded-full blur-3xl" />
      </div>

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-3 mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="p-3 rounded-full bg-gradient-to-r from-primary to-golden-amber luxury-glow">
              <Utensils className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-display font-black bg-gradient-to-r from-primary via-golden-amber to-primary bg-clip-text text-transparent">
              Our Story
            </h2>
          </motion.div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A journey of passion, flavor, and unwavering commitment to culinary excellence
          </p>
        </motion.div>

        {/* Main Bio Section */}
        <motion.div variants={itemVariants} className="mb-20">
          <Card className="bg-black/40 border-primary/20 backdrop-blur-xl hover-gradient-shift">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <motion.div
                    className="inline-block p-4 rounded-full bg-gradient-to-r from-primary/20 to-golden-amber/20"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <ChefHat className="w-12 h-12 text-primary" />
                  </motion.div>
                  
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                    Born from Passion in 2024
                  </h3>
                  
                  <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                    <p>
                      Koko began as a dream - a vision to create something extraordinary in the world of food. 
                      What started as a single location has blossomed into a beloved franchise of 
                      <span className="text-primary font-semibold"> 12+ branches</span>, each carrying 
                      the same commitment to excellence that defined our very first day.
                    </p>
                    
                    <p>
                      Specializing in mouth-watering <span className="text-golden-amber font-semibold">burgers, 
                      premium chicken, and authentic non-veg delicacies</span>, we've built our reputation 
                      on one simple principle: never compromise on quality. Every ingredient is carefully 
                      sourced, every recipe is crafted with precision, and every meal is prepared with love.
                    </p>
                    
                    <p>
                      Today, we're proud to have served over <span className="text-primary font-semibold">
                      12,000+ satisfied customers</span>, each one a testament to our unwavering dedication 
                      to authentic flavors and exceptional dining experiences. Our growth isn't just measured 
                      in locations or numbers - it's measured in the smiles we create and the memories we help build.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-primary/10 to-golden-amber/10 rounded-3xl p-8 border border-primary/20 backdrop-blur-sm">
                    <blockquote className="text-2xl font-medium text-white italic leading-relaxed">
                      "At Koko, we don't just serve food - we serve experiences. Every dish tells a story 
                      of passion, quality, and the relentless pursuit of perfection."
                    </blockquote>
                    <div className="mt-6 flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-golden-amber font-semibold">The Koko Philosophy</span>
                    </div>
                  </div>

                  {/* Mission Statement */}
                  <div className="bg-gradient-to-br from-luxury-burgundy/20 to-deep-espresso/20 rounded-3xl p-8 border border-golden-amber/20 backdrop-blur-sm">
                    <h4 className="text-xl font-display font-bold text-golden-amber mb-4">Our Mission</h4>
                    <p className="text-white leading-relaxed">
                      To revolutionize the dining experience by combining traditional flavors with modern 
                      innovation, ensuring every customer leaves with not just a satisfied appetite, 
                      but a heart full of joy and anticipation for their next visit.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div variants={itemVariants} className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Our Journey in Numbers
            </h3>
            <p className="text-muted-foreground text-lg">
              Milestones that mark our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-black/60 border-primary/30 backdrop-blur-xl text-center hover-gradient-shift">
                  <CardContent className="p-6">
                    <motion.div
                      className="inline-block p-4 rounded-full bg-gradient-to-r from-primary to-golden-amber mb-4 luxury-glow"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <achievement.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="text-3xl md:text-4xl font-display font-black bg-gradient-to-r from-primary to-golden-amber bg-clip-text text-transparent mb-2">
                      {achievement.number}
                    </div>
                    <div className="text-white font-semibold mb-1">
                      {achievement.label}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {achievement.description}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div variants={itemVariants}>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              What Drives Us
            </h3>
            <p className="text-muted-foreground text-lg">
              The values that shape every decision and every dish
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-black/40 border-primary/20 backdrop-blur-xl h-full hover-gradient-shift">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      className="inline-block p-4 rounded-full bg-gradient-to-r from-primary/20 to-golden-amber/20 mb-6"
                      whileHover={{ scale: 1.2, rotate: 12 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <value.icon className="w-8 h-8 text-primary" />
                    </motion.div>
                    <h4 className="text-xl font-display font-bold text-white mb-4">
                      {value.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Closing Statement */}
        <motion.div variants={itemVariants} className="mt-20 text-center">
          <Card className="bg-gradient-to-r from-primary/10 via-golden-amber/10 to-primary/10 border-primary/30 backdrop-blur-xl">
            <CardContent className="p-8 md:p-12">
              <motion.div
                className="inline-flex items-center gap-4 mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Trophy className="w-12 h-12 text-golden-amber" />
                <Heart className="w-10 h-10 text-primary" />
                <Star className="w-8 h-8 text-golden-amber" />
              </motion.div>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Join Our Flavorful Journey
              </h3>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Every day at Koko is an opportunity to create something special. Whether you're 
                savoring our signature burgers, enjoying our premium chicken preparations, or 
                exploring our diverse non-veg menu - you become part of our story. Together, 
                we're not just building a restaurant chain; we're building a community united 
                by the love of exceptional food and genuine hospitality.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );

};

