"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, Wrench, CheckCircle } from "lucide-react";

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
        <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 30% 40%, rgba(120,119,198,0.3), transparent 70%)' }}></div>
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 70% 70%, rgba(76,29,149,0.3), transparent 70%)' }}></div>
                <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
                {/* Additional animated background elements */}
                <motion.div 
                    className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div 
                    className="absolute bottom-40 left-20 w-96 h-96 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div 
                    className="text-center max-w-4xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Enhanced Merger Announcement Badge */}
                    <motion.div variants={itemVariants} className="mb-6">
                    </motion.div>

                    {/* Enhanced Main Heading */}
                    <motion.h1 
                        variants={itemVariants}
                        className="text-5xl md:text-7xl font-bold leading-tight mb-6"
                    >
                        ICONIC INNOVATIVE
                        <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                            SOLUTIONS
                        </span>
                        <span className="block text-2xl md:text-3xl font-medium text-gray-300 mt-4 tracking-wide">
                            PRIVATE LIMITED
                        </span>
                    </motion.h1>

                    {/* Enhanced Description */}
                    <motion.p 
                        variants={itemVariants}
                        className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto"
                    >
                        Uniting our legacies to deliver premier solutions in steel fabrication, HVAC, MEP systems, and industrial safety with unmatched quality and innovation.
                    </motion.p>

                    {/* Enhanced CTA Buttons */}
                    <motion.div 
                        variants={itemVariants}
                        className="flex flex-wrap gap-4 justify-center mb-12"
                    >
                        <motion.a
                            href="#services"
                            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Explore Our Services
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.a>
                        <motion.button 
                            className="px-8 py-4 border-2 border-white/30 hover:border-white/60 backdrop-blur-sm rounded-full font-semibold transition-all duration-300 hover:bg-white/10"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View Portfolio
                        </motion.button>
                    </motion.div>
                    
                    {/* Enhanced Features List */}
                    <motion.div 
                        variants={itemVariants} 
                        className="flex flex-wrap justify-center gap-x-8 gap-y-4"
                    >
                        {features.map((feature, index) => (
                            <motion.div 
                                key={index} 
                                className="flex items-center text-sm font-medium text-gray-300 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1 + index * 0.1 }}
                                whileHover={{ 
                                    scale: 1.05,
                                    backgroundColor: "rgba(255, 255, 255, 0.1)"
                                }}
                            >
                                <feature.icon className="w-5 h-5 mr-2.5 text-blue-400 flex-shrink-0"/> 
                                <span>{feature.text}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Enhanced Scroll Down Indicator */}
            <motion.div 
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.8 }}
            >
                <motion.div 
                    className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center items-start p-1 bg-white/5 backdrop-blur-sm"
                    whileHover={{ borderColor: "rgba(255, 255, 255, 0.6)" }}
                >
                    <motion.div 
                        className="w-1.5 h-3 bg-gradient-to-b from-blue-400 to-cyan-300 rounded-full"
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                </motion.div>
                <p className="text-xs text-gray-400 mt-2 font-medium">Scroll Down</p>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
                className="absolute top-1/4 left-10 w-4 h-4 bg-blue-400/30 rounded-full blur-sm"
                animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 0.8, 0.3]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute top-1/3 right-16 w-3 h-3 bg-cyan-400/40 rounded-full blur-sm"
                animate={{
                    y: [0, 15, 0],
                    opacity: [0.4, 0.9, 0.4]
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
            />
            <motion.div
                className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-purple-400/35 rounded-full blur-sm"
                animate={{
                    y: [0, -10, 0],
                    opacity: [0.2, 0.7, 0.2]
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
            />
        </section>
    );
};

export default Hero;