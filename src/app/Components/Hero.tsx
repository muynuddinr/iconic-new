"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, Wrench } from "lucide-react";

const Hero = () => {
    
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { stiffness: 100, damping: 15 }
        }
    };

    const features = [
        { icon: ShieldCheck, text: "Certified Professionals" },
        { icon: Zap, text: "24/7 Emergency Support" },
        { icon: Wrench, text: "Turnkey Industrial Solutions" },
    ];

    return (
        <section id="home" className="relative w-full h-screen flex items-center justify-center font-sans text-white overflow-hidden">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4-0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Abstract background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/80 to-transparent"></div>
                 <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"></div>
            </div>

            {/* Content */}
            <motion.div 
                className="relative z-10 max-w-4xl mx-auto px-4 text-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* NEW: Merger Announcement Badge */}
                <motion.div variants={itemVariants} className="mb-4">
                    <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm font-medium text-gray-200 border border-white/20">
                        Now proudly joined by <span className="font-semibold text-white">Iconic Indus Tech Solutions</span>
                    </div>
                </motion.div>

                <motion.h1 
                    variants={itemVariants}
                    className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300"
                >
                    Iconic innovation solutions
                    <span className="block text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-400 mt-3 tracking-normal">private limited</span>
                </motion.h1>

                <motion.p 
                    variants={itemVariants}
                    className="mt-6 max-w-2xl mx-auto text-lg text-gray-300 leading-relaxed"
                >
                    {/* UPDATED: Description to reflect the merger */}
                    Uniting our legacies to deliver premier solutions in steel fabrication, HVAC, water treatment, and fire & safety with unmatched quality.
                </motion.p>

                <motion.div 
                    variants={itemVariants}
                    className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#services"
                        className="w-full sm:w-auto group inline-flex items-center justify-center px-8 py-3.5 bg-[#1479ae] text-white rounded-full font-semibold hover:bg-[#116896] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#1479ae]/50"
                    >
                        Explore Our Combined Services
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                </motion.div>
                
                <motion.div 
                    variants={itemVariants} 
                    className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4"
                >
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm font-medium text-gray-300">
                            <feature.icon className="w-5 h-5 mr-2.5 text-[#1479ae] flex-shrink-0"/> 
                            <span>{feature.text}</span>
                        </div>
                    ))}
                </motion.div>
            </motion.div>

             {/* Scroll Down Indicator */}
             <motion.div 
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
             >
                <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center items-start p-1">
                    <motion.div 
                        className="w-1 h-2 bg-gray-300 rounded-full"
                        animate={{ y: [0, 16, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;