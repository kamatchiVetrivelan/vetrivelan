'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, ThumbsUp, Clock } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Shield className="w-12 h-12 text-red-500" />,
      title: "Trusted in Coimbatore",
      description: "With over 15 years of experience in Coimbatore, we've built a reputation for reliability and excellence."
    },
    {
      icon: <Award className="w-12 h-12 text-red-500" />,
      title: "Expert Local Knowledge",
      description: "Our Coimbatore-based team has extensive knowledge of both local and international destinations."
    },
    {
      icon: <ThumbsUp className="w-12 h-12 text-red-500" />,
      title: "Personalized Service",
      description: "We understand the unique needs of Coimbatore travelers and tailor our packages accordingly."
    },
    {
      icon: <Clock className="w-12 h-12 text-red-500" />,
      title: "24/7 Support",
      description: "We're always available to assist our Coimbatore customers, wherever they are in the world."
    }
  ];

  return (
    <div className="bg-black py-16 padding">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Why Choose Coimbatore&apos;s Premier Travel Agency</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            At Vetri Velan Travels, we pride ourselves on being Coimbatore&apos;s top choice for all your travel needs. Here&apos;s why travelers across Coimbatore trust us with their journeys.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-6 rounded-lg shadow-md border border-gray-800 hover:border-red-900/30 transition-all duration-300"
            >
              <div className="mb-4 flex justify-center">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2 text-center">{reason.title}</h3>
              <p className="text-gray-300 text-center">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;