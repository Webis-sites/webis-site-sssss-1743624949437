'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Dish {
  id: number;
  name: string;
  description: string;
  healthBenefits: string[];
  image: string;
  calories: number;
  protein: number;
  carbs: number;
}

const FeaturedDishesSection: React.FC = () => {
  const [selectedDish, setSelectedDish] = useState<number | null>(null);

  const featuredDishes: Dish[] = [
    {
      id: 1,
      name: "סלט קינואה מפנק",
      description: "קינואה אורגנית עם ירקות טריים, אבוקדו, גרעיני רימון ורוטב לימון-שמן זית",
      healthBenefits: ["עשיר בחלבון", "מקור לסיבים תזונתיים", "נוגד חמצון"],
      image: "/images/quinoa-salad.jpg",
      calories: 320,
      protein: 12,
      carbs: 45
    },
    {
      id: 2,
      name: "טופו מוקפץ ירקות",
      description: "טופו אורגני מוקפץ עם ירקות העונה, ג'ינג'ר ורוטב סויה מופחת נתרן",
      healthBenefits: ["מקור צמחי לחלבון", "דל שומן רווי", "עשיר בויטמינים"],
      image: "/images/tofu-stir-fry.jpg",
      calories: 280,
      protein: 18,
      carbs: 22
    },
    {
      id: 3,
      name: "קערת אסאי בריאות",
      description: "קערת אסאי עם פירות טריים, גרנולה ביתית, טחינה גולמית וסילאן טבעי",
      healthBenefits: ["עשיר באנטיאוקסידנטים", "אנרגיה מתמשכת", "תומך במערכת החיסון"],
      image: "/images/acai-bowl.jpg",
      calories: 390,
      protein: 8,
      carbs: 65
    },
    {
      id: 4,
      name: "פסטה מקמח כוסמין",
      description: "פסטה מקמח כוסמין מלא עם ירקות צלויים, עשבי תיבול טריים ושמן זית כתית מעולה",
      healthBenefits: ["סיבים תזונתיים", "פחמימות מורכבות", "ויטמינים מקבוצה B"],
      image: "/images/spelt-pasta.jpg",
      calories: 420,
      protein: 14,
      carbs: 70
    },
    {
      id: 5,
      name: "דג ים צלוי",
      description: "פילה דג ים טרי צלוי בתנור עם ירקות שורש, לימון ועשבי תיבול",
      healthBenefits: ["עשיר באומגה 3", "חלבון איכותי", "דל שומן"],
      image: "/images/baked-fish.jpg",
      calories: 310,
      protein: 28,
      carbs: 12
    },
    {
      id: 6,
      name: "קדרת עדשים",
      description: "קדרת עדשים עם ירקות שורש, תבלינים ארומטיים ועשבי תיבול טריים",
      healthBenefits: ["עשיר בברזל", "חלבון צמחי", "סיבים תזונתיים"],
      image: "/images/lentil-stew.jpg",
      calories: 340,
      protein: 16,
      carbs: 50
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-white to-gray-100 rtl" dir="rtl">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800 font-display">המנות המובחרות שלנו</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            המנות הבריאות והטעימות ביותר שמסעדת sssss גאה להגיש לכם, מבוססות על מרכיבים טריים ואיכותיים
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredDishes.map((dish) => (
            <motion.div
              key={dish.id}
              variants={item}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              onMouseEnter={() => setSelectedDish(dish.id)}
              onMouseLeave={() => setSelectedDish(null)}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 ease-in-out hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
                <div className="absolute bottom-4 right-4 left-4">
                  <h3 className="text-2xl font-bold text-white font-display">{dish.name}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-700 mb-4">{dish.description}</p>
                
                <div className="flex justify-between mb-4">
                  <div className="text-center">
                    <span className="block text-secondary font-bold">{dish.calories}</span>
                    <span className="text-xs text-gray-500">קלוריות</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-secondary font-bold">{dish.protein}g</span>
                    <span className="text-xs text-gray-500">חלבון</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-secondary font-bold">{dish.carbs}g</span>
                    <span className="text-xs text-gray-500">פחמימות</span>
                  </div>
                </div>

                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: selectedDish === dish.id ? 'auto' : 0,
                    opacity: selectedDish === dish.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <h4 className="font-bold text-primary mb-2">יתרונות בריאותיים:</h4>
                  <ul className="list-disc list-inside text-gray-700 mb-4">
                    {dish.healthBenefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </motion.div>

                <button className="w-full py-2 px-4 bg-primary text-white font-bold rounded-lg hover:bg-secondary transition-colors duration-300 mt-2">
                  הזמן עכשיו
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedDishesSection;