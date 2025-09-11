"use client";
import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../../../public/logos/ashirvad.png'
import img2 from '../../../public/logos/biocon.png'
import img3 from '../../../public/logos/geltec.png'
import img4 from '../../../public/logos/hikal.png'
import img5 from '../../../public/logos/himalaya.png'
import img6 from '../../../public/logos/omniactive.png'
import img7 from '../../../public/logos/reckitt.png'
import img8 from '../../../public/logos/schaeffler.png'
import img9 from '../../../public/logos/strides.png'
import img10 from '../../../public/logos/titan.png'

const TrustedBy = () => {

    const clientLogos = [
        { src: img1.src, name: "Himalaya" },
        { src: img2.src, name: "Biocon" },
        { src: img3.src, name: "Titan" },
        { src: img4.src, name: "Strides" },
        { src: img5.src, name: "Hikal" },
        { src: img6.src, name: "OmniActive" },
        { src: img7.src, name: "Reckitt" },
        { src: img8.src, name: "Schaeffler" },
        { src: img9.src, name: "Geltec" },
        { src: img10.src, name: "Ashirvad" },
    ];
    
    // Duplicate logos for a seamless loop
    const extendedLogos = [...clientLogos, ...clientLogos];

    return (
        <>
            <style>
                {`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-scroll {
                    animation: scroll 40s linear infinite;
                }
                `}
            </style>
            <section id="trusted-by" className="w-full py-24 bg-white font-sans overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        className="text-center"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1479ae] to-slate-700">
                                Trusted by Industry Leaders
                            </span>
                        </h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                            We are proud to have earned the trust of and collaborated with leading companies across various sectors.
                        </p>
                    </motion.div>

                    <motion.div
                        className="mt-16 relative"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {/* Gradient Fades */}
                        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
                        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

                        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear_gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-scroll">
                                {extendedLogos.map((logo, index) => (
                                    <li key={index}>
                                        <img 
                                            className="max-h-10 w-auto object-contain transition-all duration-300 hover:scale-110" 
                                            src={logo.src} 
                                            alt={logo.name}
                                            onError={(e) => { 
                                                const target = e.target as HTMLImageElement;
                                                target.onerror = null; 
                                                target.src = `https://placehold.co/150x40/F3F4F6/9CA3AF?text=${logo.name.replace(' ', '+')}`; 
                                            }}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default TrustedBy;

