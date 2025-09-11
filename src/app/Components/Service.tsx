"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Wind, TestTube2, Building, Syringe, ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {

    const servicesList = [
        {
            icon: Wrench,
            title: "Steel Fabrication",
            description: "Precision-engineered steel structures and components for industrial applications.",
        },
        {
            icon: Wind,
            title: "HVAC & Clean Room",
            description: "Advanced climate control and sterile environment solutions for sensitive operations.",
        },
        {
            icon: Building,
            title: "MEP Turnkey Projects",
            description: "Complete Mechanical, Electrical, and Plumbing solutions from design to execution.",
        },
        {
            icon: TestTube2,
            title: "Advanced Laboratories",
            description: "Designing and building state-of-the-art research and testing facilities.",
        },
        {
            icon: Syringe,
            title: "SS Pharma Equipment",
            description: "Custom stainless steel equipment fabrication for the pharmaceutical industry.",
        },
        {
            icon: Wrench,
            title: "Fabrications",
            description: "Custom industrial fabrications built to your precise specifications and quality standards.",
        },
        {
            icon: CheckCircle,
            title: "Validations",
            description: "Comprehensive validation services to ensure your systems meet all regulatory and quality benchmarks.",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5, ease: "easeInOut" as const }
        }
    };

    return (
        <section id="services" className="w-full py-24 bg-white font-sans text-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                         <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1479ae] to-slate-700">
                           Our Core Services
                        </span>
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                        We provide a comprehensive range of industrial solutions, engineered for excellence and reliability.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {servicesList.map((service, index) => (
                        <motion.div
                            key={index}
                            className="group relative p-8 bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden transition-all duration-300 hover:border-[#1479ae] hover:bg-white hover:shadow-2xl hover:shadow-[#1479ae]/10"
                            variants={cardVariants}
                            whileHover={{ y: -8 }}
                        >
                            <div className="relative z-10">
                                <div className="p-4 inline-block bg-[#1479ae] rounded-xl mb-6">
                                    <service.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-slate-900">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                            </div>
                             <ArrowRight className="absolute top-8 right-8 w-6 h-6 text-slate-300 group-hover:text-[#1479ae] transition-colors duration-300 transform scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100" />
                        </motion.div>
                    ))}

                    {/* "More Services" Card */}
                    <motion.div
                        className="group relative p-8 flex flex-col items-center justify-center text-center bg-transparent rounded-2xl border-2 border-dashed border-slate-300 transition-all duration-300 hover:border-[#1479ae] hover:bg-slate-50"
                        variants={cardVariants}
                        whileHover={{ y: -8, scale: 1.02 }}
                    >
                        <h3 className="text-2xl font-bold mb-3 text-slate-900">And Much More...</h3>
                        <p className="text-gray-600 mb-6">Our capabilities extend beyond this list. Contact us for custom solutions.</p>
                        <a href="/Contact" className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-[#1479ae] text-[#1479ae] rounded-full font-semibold hover:bg-[#1479ae] hover:text-white transition-colors duration-300">
                            Get in Touch
                        </a>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};

export default Services;