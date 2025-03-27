'use client'
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Star, Globe, Map, Users } from 'lucide-react';

const AnimatedCounter = ({ end, duration = 3, prefix = '', suffix = '', isKFormat = false }) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const animateCounter = async () => {
      await controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
      });

      let start = 0;
      const stepTime = duration * 1000 / end;
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        }
      }, stepTime);

      return () => clearInterval(timer);
    };

    animateCounter();
  }, [end, duration, controls]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className="flex flex-col items-center justify-center "
    >
      <div className="text-4xl font-extrabold text-red-800 mb-2">
        {prefix}
        {isKFormat ? `${count}K+` : `${count}+`}
        {suffix}
      </div>
    </motion.div>
  );
};

const TravelMetrics = () => {
  const metrics = [
    {
      icon: <Users className="text-blue-600 w-12 h-12 mb-4 " />,
      end: 40,
      label: "Happy Customers",
      description: "Travelers who love our service",
      isKFormat: true

    },
    {
      icon: <Globe className="text-green-600 w-12 h-12 mb-4" />,
      end: 15,
      label: "Years Experience",
      description: "Crafting unforgettable journeys"
    },
    {
      icon: <Map className="text-purple-600 w-12 h-12 mb-4" />,
      end: 50,
      label: "Tour Packages",
      description: "Unique destinations worldwide"
    },
    {
      icon: <Star className="text-yellow-600 w-12 h-12 mb-4" />,
      end: 25,
      label: "Tours Organized",
      description: "Memorable journeys created",
      isKFormat: true
    }
  ];

  return (
    <div className="bg-gradient-to-br bg-black py-16 padding">
      <div className="container mx-auto px-">
        <h2 className="text-center text-3xl font-bold text-slate-50 mb-12">
          Our Travel Success by the Numbers
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 ">
          {metrics.map((metric, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.2 
              }}
              className="bg-white shadow-lg rounded-xl p-6 text-center  
                         transform transition-all duration-300 
                         hover:scale-105 hover:shadow-xl "
            >
              {metric.icon}
             <div className=''>
             <AnimatedCounter  
                end={metric.end} 
                suffix={` ${metric.label}`}
                isKFormat={metric.isKFormat}
              />
             </div>
              
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelMetrics;