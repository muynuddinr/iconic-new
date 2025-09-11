'use client'
import React from 'react';
import Link from 'next/link'; // 1. IMPORT LINK COMPONENT
import { motion, AnimatePresence } from 'framer-motion';
import img1 from '../../../public/solution3.jpeg'
import img2 from '../../../public/solution1.jpeg'
import img3 from '../../../public/solution2.jpeg'

import {
  Award,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  TrendingUp,
  Users,
  Globe,
  CheckSquare,
  Microscope,
  Gauge,
  Filter,
  Beaker,
  Settings,
  Shield,
  Droplet
} from "lucide-react";

const SolutionsPage = () => {

  const solutions = [
    {
      icon: Microscope,
      title: "Clean Room Solutions",
      category: 'Controlled Environments',
      gradient: "from-teal-500 to-cyan-500",
      description: "We design and construct state-of-the-art cleanrooms for specialized industrial production and scientific research, including the manufacturing of pharmaceutical products.",
      features: [
        "Extremely low levels of particulates (dust, airborne organisms, vaporized particles).",
        "Cleanliness level quantified by particles per cubic meter (e.g., ISO 1 to ISO 9).",
        "FDA validation and CGMP compliant designs for pharmaceutical applications.",
        "Modular construction with durable Fire rated clean room panels for aggressive chemical cleaning.",
        "Complete turnkey service: design, manufacturing, installation, HVAC, and certification."
      ],
      img: img1.src
    },
    {
      icon: Shield,
      title: "Fire Rated Steel Doors",
      category: 'Safety & Compliance',
      gradient: "from-red-500 to-orange-500",
      description: "Iconic specializes in the supply and installation of high-quality, certified fire-rated steel doors, compliant with ANSI A115 standards for maximum facility protection.",
      features: [
        "Certified to meet stringent ANSI A115 fire safety standards.",
        "Multiple core filling options: Honeycomb, Steel Stiffener, Polyurethane Foam, and Rockwool.",
        "Durable construction for high-traffic industrial environments.",
        "Customizable sizes and hardware options available.",
        "Expert installation ensuring proper sealing and functionality."
      ],
      img: img3.src
    },
    {
      icon: Droplet,
      title: "Industrial Water Treatment",
      category: 'Resource Management',
      gradient: "from-indigo-500 to-blue-500",
      description: "We provide end-to-end installation, commissioning, and maintenance of Reverse Osmosis (RO) water systems, supported by comprehensive chemical solutions and advanced membrane technology.",
      features: [
        "Removes contaminants using high-pressure semi-permeable membranes.",
        "Full range of RO treatment chemicals: Anti-scalant, pH boosters, and cleaners.",
        "Supply of top-tier RO membranes from brands like Filmtech and Hydranautics.",
        "Comprehensive supply of components: pressure vessels, valves, resins, and filter media.",
        "Expert solutions for ETP, STP, and cooling tower chemical treatments."
      ],
      img: img2.src
    },
  ];

  const coreExpertise = [
    {
      category: 'Controlled Environments',
      solution: 'Clean Room Solutions',
      icon: Microscope,
      color: 'text-teal-500'
    },
    {
      category: 'Safety & Compliance',
      solution: 'Fire Rated Steel Doors',
      icon: Shield,
      color: 'text-red-500'
    },
    {
      category: 'Resource Management',
      solution: 'Industrial Water Treatment',
      icon: Droplet,
      color: 'text-blue-500'
    }
  ];

  const supplies = [
    { title: "Pressure Systems & Vessels", icon: Gauge, description: "FRP, MS, and MSRL vessels with all accessories." },
    { title: "Membranes & Filtration", icon: Filter, description: "RO, UF, NF, and MBR membranes from top brands." },
    { title: "Water Treatment Chemicals", icon: Beaker, description: "Cooling tower, ETP, STP, and RO chemicals." },
    { title: "Resins & Components", icon: Settings, description: "DM plant and softener resins, valves, and parts." },
  ];
  
  const whyChooseUs = [
      { icon: TrendingUp, title: "Proven Expertise", description: "With over 15 years in the industry, we bring a wealth of knowledge to every project." },
      { icon: Users, title: "Client-Centric Approach", description: "We prioritize your needs, ensuring solutions are tailored to your specific requirements." },
      { icon: Award, title: "Unmatched Quality", description: "Our commitment to quality is evident in our 98% client satisfaction rate and robust solutions." },
      { icon: Globe, title: "End-to-End Service", description: "From design to commissioning and 24/7 support, we are your comprehensive industrial partner." },
  ]

  const [openAccordion, setOpenAccordion] = React.useState<string | null>(solutions[0].title);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } }
  };

  return (
    <main className="bg-gray-50 text-gray-800 font-sans">
        {/* Section 1: Hero */}
        <section className="relative text-white py-32 md:py-40">
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{backgroundImage: 'url(https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4-0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%D)'}}
            ></div>
            <div className="absolute inset-0 bg-slate-900/70"></div>
            
            <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10 text-center">
                 <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                 >
                    <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20 mb-6">
                        <Award className="w-5 h-5 text-yellow-400" />
                        <span className="text-sm font-medium">15+ Years of Excellence</span>
                    </motion.div>
                    <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl font-extrabold tracking-tight">
                        Complete Industrial Solutions
                    </motion.h1>
                    <motion.p variants={itemVariants} className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
                        Comprehensive cleanroom solutions, fire-rated steel doors, and industrial water treatment systems for pharmaceutical, manufacturing, and research facilities.
                    </motion.p>
                </motion.div>
            </div>
        </section>

        {/* Section 2: Core Expertise Grid */}
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Our Core Expertise</h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        We specialize in three key areas to provide comprehensive industrial solutions, ensuring quality, safety, and efficiency.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {coreExpertise.map((item, index) => (
                    <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-200/90 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                      <item.icon className={`w-12 h-12 mb-4 ${item.color}`} strokeWidth={1.5} />
                      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                        {item.category}
                      </p>
                      <h3 className="mt-2 text-2xl font-bold text-slate-800">
                        {item.solution}
                      </h3>
                    </div>
                  ))}
                </div>
            </div>
        </section>


        {/* Section 3: Detailed Solutions Accordion */}
        <section id="solutions" className="py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Our Turnkey Solutions in Detail</h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        We deliver excellence across all industrial sectors with over 15 years of proven expertise. Select a solution to learn more.
                    </p>
                </div>
                
                <div className="max-w-4xl mx-auto">
                    {solutions.map((sol) => (
                        <div key={sol.title} className="mb-4 overflow-hidden rounded-2xl border border-gray-200/80">
                            <motion.button
                                onClick={() => setOpenAccordion(openAccordion === sol.title ? null : sol.title)}
                                className={`w-full p-6 text-left flex justify-between items-center transition-colors duration-300 ${openAccordion === sol.title ? 'bg-white' : 'bg-gray-50 hover:bg-gray-100'}`}
                            >
                               <div className="flex items-center gap-4">
                                    <div className={`w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-lg bg-gradient-to-br ${sol.gradient}`}>
                                        <sol.icon className="w-6 h-6 text-white"/>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-500 text-sm">{sol.category}</p>
                                        <h4 className="font-bold text-lg text-slate-900">{sol.title}</h4>
                                    </div>
                                </div>
                                <ChevronDown className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${openAccordion === sol.title ? 'rotate-180' : ''}`} />
                            </motion.button>
                            <AnimatePresence>
                                {openAccordion === sol.title && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                                        className="bg-white"
                                    >
                                        <div className="p-6 grid md:grid-cols-2 gap-8">
                                            <div>
                                                <p className="text-gray-600 mb-6">{sol.description}</p>
                                                <div className="space-y-4">
                                                    {sol.features.map((feature, index) => (
                                                        <div key={index} className="flex items-start gap-3">
                                                            <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0"/>
                                                            <p className="text-gray-700">{feature}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="h-64 rounded-xl overflow-hidden">
                                                <img src={sol.img} alt={sol.title} className="w-full h-full object-cover object-center"/>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Section 4: Why Choose Us */}
        <section className="py-24 bg-white">
             <div className="max-w-7xl mx-auto px-6 lg:px-8">
                 <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Why Partner With Us?</h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Our success is built on a foundation of expertise, quality, and an unwavering dedication to our clients.
                    </p>
                </div>
                 <motion.div
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    variants={containerVariants}
                    viewport={{ once: true }}
                 >
                     {whyChooseUs.map((item, index) => (
                         <motion.div key={index} variants={itemVariants} className="text-center p-6">
                            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#1479ae] to-cyan-500 rounded-2xl flex items-center justify-center mb-4">
                                <item.icon className="w-8 h-8 text-white" />
                            </div>
                            <h4 className="text-lg font-bold text-gray-900">{item.title}</h4>
                            <p className="text-gray-600 mt-2">{item.description}</p>
                         </motion.div>
                     ))}
                 </motion.div>
             </div>
        </section>

        {/* Section 5: Premium Supplies */}
        <section className="py-24">
             <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                     <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold mb-4 text-sm">
                        <CheckSquare className="w-5 h-5" />
                        <span>Premium Supplies</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Quality Components & Chemicals</h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Sourced from leading manufacturers to ensure optimal performance and longevity for your systems.
                    </p>
                </div>
                <motion.div 
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    variants={containerVariants}
                    viewport={{ once: true }}
                >
                    {supplies.map((supply, index) => (
                        <motion.div 
                            key={index} 
                            variants={itemVariants} 
                            className="group bg-white p-6 rounded-xl border border-gray-200/80 hover:shadow-xl hover:border-[#1479ae] transition-all duration-300"
                        >
                            <supply.icon className="w-10 h-10 text-[#1479ae] mb-4" />
                            <h4 className="text-lg font-bold text-gray-900">{supply.title}</h4>
                             <p className="text-gray-600 mt-2 text-sm">{supply.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
             </div>
        </section>

        {/* Section 6: CTA */}
        <section className="py-24 bg-[#1479ae]">
            <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center text-white">
                 <h2 className="text-3xl sm:text-4xl font-extrabold">Ready to Enhance Your Operations?</h2>
                 <p className="mt-4 text-lg opacity-90">
                    Contact us today for a free consultation on your cleanroom, fire safety, or water treatment requirements.
                 </p>
                 <div className="mt-8">
                    {/* 2. UPDATED BUTTON WITH LINK TO /Contact */}
                    <Link
                        href="/Contact"
                        className="group inline-flex items-center justify-center px-8 py-4 bg-white text-[#1479ae] rounded-lg font-semibold hover:bg-gray-200 transform hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                        Get a Free Consultation
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                 </div>
            </div>
        </section>
    </main>
  );
};

export default SolutionsPage;