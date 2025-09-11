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
            {/* Enhanced Background with Gradient Overlay */}
            <div className="absolute inset-0 z-0">
                {/* Primary Background Image */}
                <img 
                    src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3"
                    alt="Industrial background"
                    className="w-full h-full object-cover"
                />
                
                {/* Multi-layered Gradient Overlays for depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/80 to-cyan-900/70"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-transparent to-blue-900/60"></div>
                
                {/* Animated Gradient Orbs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-600/15 to-indigo-600/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
                
                {/* Subtle Grid Pattern */}
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                     linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            {/* Content */}
            <motion.div 
                className="relative z-10 max-w-4xl mx-auto px-4 text-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Enhanced Merger Announcement Badge */}
                <motion.div variants={itemVariants} className="mb-6">

                </motion.div>

                <motion.h1 
                    variants={itemVariants}
                    className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight"
                >
                    <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent drop-shadow-lg">
                        Iconic innovative solutions
                    </span>
                    <span className="block text-2xl sm:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent mt-3 tracking-normal">
                        private limited
                    </span>
                </motion.h1>

                <motion.p 
                    variants={itemVariants}
                    className="mt-8 max-w-2xl mx-auto text-lg text-slate-200 leading-relaxed font-medium"
                >
                    Uniting our legacies to deliver premier solutions in steel fabrication, HVAC & safety with unmatched quality and innovation.
                </motion.p>

                <motion.div 
                    variants={itemVariants}
                    className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#services"
                        className="w-full sm:w-auto group relative inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full font-semibold hover:from-cyan-500 hover:to-blue-500 transform hover:scale-105 transition-all duration-300 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-400/40 border border-cyan-400/30"
                    >
                        <span className="relative z-10">Explore Our Combined Services</span>
                        <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                        
                        {/* Button Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    </a>
                </motion.div>
                
                <motion.div 
                    variants={itemVariants} 
                    className="mt-16 flex flex-wrap justify-center gap-x-10 gap-y-6"
                >
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm font-medium text-slate-200 group hover:text-white transition-colors duration-300">
                            <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/20 mr-3 group-hover:scale-110 transition-transform duration-300">
                                <feature.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 flex-shrink-0"/> 
                            </div>
                            <span>{feature.text}</span>
                        </div>
                    ))}
                </motion.div>
            </motion.div>

             {/* Enhanced Scroll Down Indicator */}
             <motion.div 
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
             >
                <div className="w-7 h-12 border-2 border-cyan-400/60 rounded-full flex justify-center items-start p-1.5 bg-gradient-to-b from-cyan-500/10 to-blue-500/10 backdrop-blur-sm">
                    <motion.div 
                        className="w-1.5 h-3 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full shadow-lg shadow-cyan-400/50"
                        animate={{ y: [0, 20, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>
                <p className="text-xs text-slate-300 mt-2 font-medium">Scroll Down</p>
            </motion.div>

            {/* Floating Particles Effect */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400/40 to-blue-400/40 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [-20, 20],
                            opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;