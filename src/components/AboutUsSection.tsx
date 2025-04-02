'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

export default function AboutUsSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };
  
  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5
      }
    })
  };
  
  const title = "מי אנחנו";
  
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-16 px-4 md:px-8 lg:px-16 rtl" dir="rtl">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <div className="flex justify-center mb-8">
            {title.split('').map((char, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={letterVariants}
                initial="hidden"
                animate={controls}
                className="text-5xl md:text-6xl font-bold inline-block text-primary mx-1"
                style={{ 
                  color: index % 2 === 0 ? 'var(--color-primary)' : 'var(--color-secondary)',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>
          
          <motion.div 
            variants={itemVariants}
            className="h-1 w-24 bg-secondary mx-auto mb-8"
          />
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl font-medium text-gray-800 mb-6 leading-relaxed"
          >
            אנחנו מסעדה מוביל בתחום הבריאות עם ניסיון של שנים רבות.
          </motion.p>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed"
          >
            אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
          </motion.p>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
            variants={containerVariants}
          >
            {[
              { 
                number: '+15', 
                text: 'שנות ניסיון', 
                icon: '✓' 
              },
              { 
                number: '+1000', 
                text: 'לקוחות מרוצים', 
                icon: '♥' 
              },
              { 
                number: '+50', 
                text: 'מנות בריאות', 
                icon: '★' 
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4"
                style={{ borderColor: index % 2 === 0 ? 'var(--color-primary)' : 'var(--color-secondary)' }}
              >
                <div className="text-4xl mb-2 font-bold" style={{ color: index % 2 === 0 ? 'var(--color-primary)' : 'var(--color-secondary)' }}>
                  {item.icon}
                </div>
                <div className="text-3xl font-bold mb-2" style={{ color: index % 2 === 0 ? 'var(--color-primary)' : 'var(--color-secondary)' }}>
                  {item.number}
                </div>
                <div className="text-gray-700 font-medium">
                  {item.text}
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="mt-16"
          >
            <button className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              קראו עוד עלינו
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}