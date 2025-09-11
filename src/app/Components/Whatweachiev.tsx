'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Zap, Users, Phone } from 'lucide-react';

const WhatWeAchieve = () => {
  const achievements = [
    {
      icon: CheckCircle,
      number: "300+",
      label: "Projects Delivered",
      description: "Successfully executed over 500 diverse industrial projects with precision and excellence."
    },
    {
      icon: Users,
      number: "100+",
      label: "Clients Acquired",
      description: "Rapidly grew our client base from 10+ to over 200 satisfied partners in just two years."
    },
    {
      icon: Zap,
      number: "24/7",
      label: "Dedicated Support",
      description: "Round-the-clock technical assistance and proactive maintenance ensure seamless operations."
    }
  ];

  const milestones = [
    {
      year: "2021",
      title: "Company Inception",
      description: "Established with a bold vision to provide top-tier industrial solutions and client partnerships."
    },
    {
      year: "2023",
      title: "First 100 Projects",
      description: "Celebrated our 100th successful project delivery, building a strong foundation of trust."
    },
    {
      year: "2024",
      title: "Innovation Hub Launch",
      description: "Launched our innovation hub and research centre to pioneer new industrial technologies."
    }
  ];

  return (
    <section className="bg-white font-sans">
      {/* Hero Section */}
      <div className="bg-gray-50 py-24 border-b border-gray-200/80">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div 
              className="inline-flex items-center px-4 py-2 bg-blue-100 border border-blue-200 rounded-full text-blue-800 text-sm font-semibold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              Our Track Record
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            >
              Driving <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1479ae] to-blue-600">Innovation</span> & Success
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            >
              At ICONIC INDUS TECH SOLUTIONS, we forge enduring partnerships, turning bold visions into tangible realities. We specialize in MEP Turnkey projects, HVAC systems, ISO Classified clean rooms, and Validation services. Our expertise covers AHUs, pressure gradients, and desired conditioned spaces to specialized Pharma equipment like SS Laboratories Equipment, Laminar Air Flow units, and both Dynamic & Static Pass boxes.
            </motion.p>
          </div>
        </div>
      </div>
      
      {/* Key Achievements Grid */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="group p-8 bg-white rounded-2xl border border-gray-200/80 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                  <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#1479ae] to-blue-600 rounded-xl flex items-center justify-center mb-5 text-white transition-all duration-300 transform group-hover:scale-105">
                      <achievement.icon className="w-8 h-8" />
                      </div>
                      <div className="text-5xl font-extrabold text-slate-900 mb-2">
                      {achievement.number}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {achievement.label}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                      {achievement.description}
                      </p>
                  </div>
                </motion.div>
            ))}
            </div>
        </div>
      </div>

      {/* Journey Timeline */}
      <div className="py-24 bg-gray-50 border-y border-gray-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
                    Our Continuous <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1479ae] to-blue-600">Evolution</span>
                </h2>
            </div>
            <div className="relative max-w-2xl mx-auto">
                {/* Timeline Line */}
                <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200"></div>

                <div className="space-y-12">
                {milestones.map((milestone, index) => (
                    <motion.div
                      key={index}
                      className="relative pl-12"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                      <div className="absolute left-4 top-1 -ml-2 w-4 h-4 bg-[#1479ae] rounded-full border-4 border-gray-50"></div>
                      <div className="bg-white p-6 rounded-xl border border-gray-200/80 shadow-md">
                          <p className="text-sm font-semibold text-[#1479ae] mb-1">{milestone.year}</p>
                          <h4 className="text-lg font-bold text-gray-900 mb-2">
                          {milestone.title}
                          </h4>
                          <p className="text-gray-600 text-sm">
                          {milestone.description}
                          </p>
                      </div>
                    </motion.div>
                ))}
                </div>
            </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                    Ready to Accelerate Your Vision?
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                    Let's connect and explore how our innovative solutions can transform your business and drive unparalleled growth.
                </p>
                <div className="flex justify-center items-center gap-2 text-gray-600 mb-8 flex-wrap">
                    <Phone className="w-5 h-5 text-[#1479ae]" />
                    <span className="font-semibold">Contact us:</span>
                    <a href="tel:8056554761" className="hover:text-[#1479ae] transition-colors">8056554761</a>
                    <span className="text-gray-400">/</span>
                    <a href="tel:9789756826" className="hover:text-[#1479ae] transition-colors">9789756826</a>
                    <span className="text-gray-400">/</span>
                    <a href="tel:9629466826" className="hover:text-[#1479ae] transition-colors">9629466826</a>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" className="px-8 py-4 bg-[#1479ae] text-white rounded-lg font-semibold text-lg
                                    transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-300/50">
                    Start Your Project
                </a>
                <a href="#contact" className="px-8 py-4 border-2 border-gray-300 text-gray-800 rounded-lg font-semibold text-lg
                                    transition-all duration-300 transform hover:scale-105 hover:bg-gray-100">
                    Schedule a Consultation
                </a>
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeAchieve;