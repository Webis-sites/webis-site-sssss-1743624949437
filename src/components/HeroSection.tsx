'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaUtensils, FaCalendarAlt } from 'react-icons/fa';
import { gsap } from 'gsap';

interface HeroSectionProps {
  restaurantName?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ restaurantName = 'sssss' }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  
  useEffect(() => {
    // GSAP animations
    if (heroRef.current && headlineRef.current && subheadlineRef.current) {
      const tl = gsap.timeline();
      
      tl.from(heroRef.current, {
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      })
      .from(headlineRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)"
      }, "-=0.5")
      .from(subheadlineRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)"
      }, "-=0.6")
      .from(".hero-cta", {
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.5)"
      }, "-=0.4")
      .from(".hero-decoration", {
        x: -20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out"
      }, "-=0.5");
    }
  }, []);

  // Floating animation variants for decorative elements
  const floatingAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div 
      ref={heroRef}
      dir="rtl" 
      className="relative overflow-hidden bg-gradient-to-b from-secondary-light to-primary-light min-h-[90vh] flex items-center justify-center px-4 py-16 md:py-24"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="hero-decoration absolute top-20 right-10 w-16 h-16 md:w-24 md:h-24 rounded-full bg-primary opacity-20"
          variants={floatingAnimation}
          animate="animate"
        />
        <motion.div 
          className="hero-decoration absolute bottom-40 right-[20%] w-20 h-20 md:w-32 md:h-32 rounded-full bg-secondary opacity-15"
          variants={floatingAnimation}
          animate="animate"
          transition={{ delay: 0.5 }}
        />
        <motion.div 
          className="hero-decoration absolute top-1/3 left-[15%] w-12 h-12 md:w-20 md:h-20 rounded-full bg-primary opacity-10"
          variants={floatingAnimation}
          animate="animate"
          transition={{ delay: 1 }}
        />
        <motion.div 
          className="hero-decoration absolute top-[20%] left-[30%] w-24 h-24 md:w-40 md:h-40 rounded-full bg-secondary opacity-10"
          variants={floatingAnimation}
          animate="animate"
          transition={{ delay: 1.5 }}
        />
        <motion.div 
          className="hero-decoration absolute bottom-20 left-10 w-16 h-16 md:w-28 md:h-28 rounded-full bg-primary opacity-20"
          variants={floatingAnimation}
          animate="animate"
          transition={{ delay: 2 }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center justify-center p-3 bg-white bg-opacity-20 backdrop-blur-sm rounded-full mb-6"
          >
            <FaUtensils className="text-secondary text-2xl" />
          </motion.div>
        </div>

        <h1 
          ref={headlineRef}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-secondary mb-6 tracking-tight"
        >
          <span className="text-primary">{restaurantName}</span> - מסעדה מובילה בישראל
        </h1>
        
        <p 
          ref={subheadlineRef}
          className="font-body text-xl md:text-2xl text-gray-800 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          חווית לקוח מושלמת בכל ביקור
        </p>
        
        <motion.div
          className="hero-cta"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <button 
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-primary px-8 py-4 text-lg font-bold text-white shadow-md transition-all duration-300 ease-in-out hover:bg-secondary"
          >
            <span className="relative flex items-center">
              <FaCalendarAlt className="mr-2" />
              קבע תור עכשיו
              <span className="absolute right-0 translate-x-full group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-300 mr-2">
                →
              </span>
            </span>
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 flex flex-wrap justify-center gap-6"
        >
          <div className="bg-white bg-opacity-80 backdrop-blur-sm p-4 rounded-lg shadow-lg flex items-center">
            <div className="w-3 h-3 rounded-full bg-primary mr-2"></div>
            <span className="font-medium">כשר למהדרין</span>
          </div>
          <div className="bg-white bg-opacity-80 backdrop-blur-sm p-4 rounded-lg shadow-lg flex items-center">
            <div className="w-3 h-3 rounded-full bg-primary mr-2"></div>
            <span className="font-medium">תפריט בריאות</span>
          </div>
          <div className="bg-white bg-opacity-80 backdrop-blur-sm p-4 rounded-lg shadow-lg flex items-center">
            <div className="w-3 h-3 rounded-full bg-primary mr-2"></div>
            <span className="font-medium">חנייה חינם</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;