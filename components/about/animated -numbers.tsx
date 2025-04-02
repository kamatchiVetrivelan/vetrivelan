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
      className="flex flex-col items-center justify-center"
    >
      <div className="text-4xl font-extrabold text-red-600 mb-2">
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
      icon: <Users className="text-red-600 w-12 h-12 mb-4" />,
      end: 40,
      label: "Happy Customers",
      description: "Coimbatore travelers who love our service",
      isKFormat: true
    },
    {
      icon: <Globe className="text-red-600 w-12 h-12 mb-4" />,
      end: 15,
      label: "Years Experience",
      description: "Serving Coimbatore since 2009"
    },
    {
      icon: <Map className="text-red-600 w-12 h-12 mb-4" />,
      end: 50,
      label: "Tour Packages",
      description: "From Coimbatore to worldwide destinations"
    },
    {
      icon: <Star className="text-red-600 w-12 h-12 mb-4" />,
      end: 25,
      label: "Tours Organized",
      description: "For Coimbatore's travel enthusiasts",
      isKFormat: true
    }
  ];
  
  return (
    <div className="bg-black py-16 padding">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-bold text-white mb-12"
        >
          Coimbatore's Top Travel Agency by the Numbers
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-8 gap-4">
          {metrics.map((metric, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.2 
              }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 25px -5px rgba(255, 0, 0, 0.2)" 
              }}
              viewport={{ once: true }}
              className="bg-gray-900 shadow-lg rounded-xl p-6 text-center 
                      transform transition-all duration-300 
                      border border-gray-800 hover:border-red-900/30"
            >
              {metric.icon}
              <div className=''>
                <AnimatedCounter 
                  end={metric.end}
                  suffix={` ${metric.label}`}
                  isKFormat={metric.isKFormat}
                />
              </div>
              <p className="text-gray-300 mt-2">{metric.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelMetrics;