'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import {
  Wrench, Wind, Droplet, Shield, Sparkles, DoorOpen,
  ArrowRight, CheckCircle, Star, Award,
  Factory, FlaskConical, Gauge, ChevronRight
} from "lucide-react";

// Service type definition
type Service = {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  category: string;
  description: string;
  items: string[];
};

// Reusable Service Card Component
type ServiceCardProps = {
  service: Service;
  isExpanded: boolean;
  onToggle: () => void;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ service, isExpanded, onToggle }) => {
  return (
    <motion.div
      layout
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.95, opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className={`group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-400 overflow-hidden border border-gray-200/60 ${isExpanded ? 'lg:col-span-2' : 'lg:col-span-1'}`}
    >
        <div className={`absolute top-0 right-0 h-24 w-24 bg-gradient-to-br ${service.gradient} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity duration-300`}></div>
      <div className="p-8 relative z-10">
        <div className="flex items-start justify-between mb-5">
            <div>
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                </div>
            </div>

        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">{service.description}</p>
        
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-3 overflow-hidden"
            >
              {service.items.map((item, idx) => (
                <motion.div 
                    key={idx} 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                >
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-6 pt-6 border-t border-gray-100 flex justify-between items-center">
          <button
            onClick={onToggle}
            className="text-sm font-semibold text-[#1479ae] hover:text-blue-800 flex items-center gap-2 group/btn"
          >
            {isExpanded ? 'Show Less' : `View All Features`}
            <ChevronRight className={`w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1 ${isExpanded ? 'transform rotate-90' : 'rotate-0'}`} />
          </button>
          <a href="/Contact" className="px-5 py-2 bg-[#1479ae] text-white rounded-lg text-sm font-semibold hover:bg-blue-800 transition-all duration-300 shadow-sm hover:shadow-lg transform hover:scale-105">
            Get Quote
          </a>
        </div>
      </div>
    </motion.div>
  );
};


export default function ServicesPage() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');

    const services = [
    {
      id: 'fabrication',
      title: "Fabrication & Maintenance",
      icon: Wrench,
      gradient: "from-blue-500 to-cyan-500",
      category: "fabrication",
      description: "Specialized in design, fabrication, and erection of steel & metal works for all industrial requirements.",
      items: [
        "Structural Steel Fabrication & Erection",
        "Cleanroom Fire Rated Steel Doors (ANSI A115)",
        "Fabrication & Erection of Ducts",
        "Fabrication & Erection of Pipelines",
        "Storage tanks, platforms, trolley, grills fabrication",
        "Plant & Equipment Fabrication, Erection & Maintenance",
        "Steel Vessels Fabrication",
        "Die Repair & Maintenance",
      ],
    },
    {
      id: 'mep',
      title: "MEP Turnkey Projects",
      icon: Factory,
      gradient: "from-purple-500 to-pink-500",
      category: "mep",
      description: "Complete MEP solutions for Pharmaceutical, Hospital, Electronic and Automobile industries.",
      items: [
        "Pharma, Hospitals, Electronic and Automobile Industries",
        "Clean rooms with modular Laboratory setup",
        "Modular Operation Theatre and equipment's",
        "Clean room Accessories, Doors, Furniture's & Equipment's",
        "Pass box, Laminar Air flow, Bio Safety Cabinets",
        "Dispensing Booth, Air showers, Modules",
        "AHU's, Garment Cabinet, Modular Clean Room Panels",
        "Instrument Table & Cabinet's",
      ],
    },
    {
      id: 'hvac',
      title: "HVAC Solutions",
      icon: Wind,
      gradient: "from-green-500 to-emerald-500",
      category: "hvac",
      description: "Comprehensive heating, ventilation, and air conditioning systems with advanced controls.",
      items: [
        "Supply, Installation, Testing, Commissioning & Maintenance",
        "HVAC project validation and Temperature Mapping",
        "Designing clean room classification and duct flow",
        "Dust Collectors & Scrubbers installation",
        "Water-cooled coils, DX coils, AHUs, Chillers maintenance",
        "Air Filters (Pre, Fine, HEPA, ULPA, Bag filters)",
        "Cooling tower spares & chemicals",
        "Fins cleaning and coil descaling services",
      ],
    },
    {
      id: 'water-treatment',
      title: "Water Treatment Solutions",
      icon: Droplet,
      gradient: "from-cyan-500 to-blue-500",
      category: "water-treatment",
      description: "Complete water treatment systems for industrial and commercial applications.",
      items: [
        "Raw water Pretreatment Systems",
        "Brackish Water RO Systems",
        "Sea Water RO systems",
        "Water Softening Plants",
        "Effluent Treatment Plant (ETP)",
        "Sewage Treatment Plant (STP)",
        "De-mineralization Plants",
        "RO Treatment Chemicals & Membranes",
        "Boiler water chemicals",
        "Installation, Maintenance & Troubleshooting",
      ],
    },
    {
      id: 'fire-safety',
      title: "Fire & Safety Solutions",
      icon: Shield,
      gradient: "from-red-500 to-orange-500",
      category: "fire-safety",
      description: "Comprehensive fire protection and industrial safety solutions for all sectors.",
      items: [
        "OHS Hazard Identification",
        "Risk Assessment & Control",
        "On-Site Emergency Plan development",
        "Fire hydrant systems - testing, inspection, maintenance",
        "Industrial Fire protection systems supply",
        "PPE (Personal Protective Equipment) supply",
        "All types of Fire extinguishers HP test and refilling",
        "Fire safety consultancy services",
      ],
    },
    {
      id: 'cleanroom',
      title: "Clean Room Solutions",
      icon: Sparkles,
      gradient: "from-indigo-500 to-purple-500",
      category: "cleanroom",
      description: "Complete cleanroom solutions for pharmaceutical, scientific research and specialized manufacturing.",
      items: [
        "Pharmaceutical cleanrooms (FDA validation & CGMP)",
        "Modular cleanroom design & manufacturing",
        "ISO 1 to ISO 9 classification cleanrooms",
        "Sterile manufacturing environment setup",
        "FRP modular cleanroom walls (chemical resistant)",
        "Filling rooms (ISO5 class 100)",
        "Turnkey Complete Cleanroom projects",
        "Certification of modular cleanrooms",
        "HVAC, electrical, and flooring integration",
      ],
    },
    {
      id: 'fire-rated-panels',
      title: "Fire Rated Clean Room Panels",
      icon: Shield,
      gradient: "from-orange-500 to-red-600",
      category: "cleanroom",
      description: "High-performance, fire-resistant panels for sterile environments requiring stringent safety and regulatory compliance.",
      items: [
        "Superior fire resistance (up to 2-hour rating)",
        "Compliant with international safety standards (ASTM E84, UL)",
        "Non-combustible and self-extinguishing core materials",
        "Maintains cleanroom integrity for ISO 5 to ISO 8 classifications",
        "Seamless, non-porous surfaces for easy sterilization",
        "Ideal for Pharmaceutical, Biotech, and Microelectronics facilities",
        "Customizable dimensions, finishes, and utility integrations",
        "Excellent thermal and acoustic insulation properties",
      ],
    },
    {
      id: 'fire-doors',
      title: "Fire Rated Steel Doors",
      icon: DoorOpen,
      gradient: "from-slate-500 to-gray-500",
      category: "fire-safety",
      description: "Quality fire rated steel doors manufactured according to ANSI A115 standards.",
      items: [
        "ANSI A115 compliant fire rated doors",
        "Core filling with advanced materials",
        "Honeycomb core construction",
        "Rockwool core insulation for superior fire resistance",
        "Steel Stiffener reinforcement",
        "Polyurethane Foam insulation",
        "Custom sizing and configurations",
        "Professional installation services",
        "Quality assurance and testing",
      ],
    },
    {
      id: 'ro-systems',
      title: "RO Water Systems",
      icon: Gauge,
      gradient: "from-teal-500 to-cyan-500",
      category: "water-treatment",
      description: "Advanced Reverse Osmosis systems with complete chemical treatment solutions.",
      items: [
        "RO Anti-scalant (Food Grade NTC certified)",
        "High Silica Anti-scalant for high silica content",
        "pH Booster (liquid & powder form)",
        "Membrane Cleaner LPH / HPH",
        "Microbiological Cleaning Liquid",
        "RO Membranes 80*40 / 40*40 (Filmtech, Hydranautics, Suez)",
        "FRP/MS/MSRL Pressure Vessels",
        "Complete system installation & maintenance",
      ],
    },
    {
      id: 'chemicals-supplies',
      title: "Chemicals & Supplies",
      icon: FlaskConical,
      gradient: "from-amber-500 to-yellow-500",
      category: "water-treatment",
      description: "Comprehensive range of water treatment chemicals and equipment supplies.",
      items: [
        "Multiport Valves & RO system accessories",
        "MBR Membranes & UF/NF Membranes",
        "Cooling tower chemicals & ETP/STP Chemicals",
        "Hydrated Lime & Polyelectrolyte (Anionic & Cationic)",
        "Sodium hypochlorite & Bio-Culture",
        "Ferric & Non-Ferric Alum",
        "DM Plant Resins (Ion Exchange, Thermax, Polymax)",
        "MGF Filter Media (Sand, Carbon, Anthracite, Pebbles)",
        "Chemical Dosing pumps & Water application valves",
      ],
    },
  ];

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'fabrication', label: 'Fabrication' },
    { id: 'mep', label: 'MEP Projects' },
    { id: 'hvac', label: 'HVAC' },
    { id: 'water-treatment', label: 'Water Treatment' },
    { id: 'fire-safety', label: 'Fire & Safety' },
    { id: 'cleanroom', label: 'Clean Room' },
  ];

  const filteredServices = activeFilter === 'all'
    ? services
    : services.filter(service => service.category === activeFilter);

  const handleToggle = (serviceId: string) => {
    setExpandedCard(expandedCard === serviceId ? null : serviceId);
  };
  
  return (
    <main className="bg-gray-50 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative py-32 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{backgroundImage: "url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2653&auto=format&fit=crop&ixlib=rb-4-0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#1479ae]/50 via-slate-900/80 to-slate-900"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2 text-yellow-400" />
              <span>Our Premier Industrial Services</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Engineered for Excellence</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              From steel fabrication to advanced cleanroom solutions, we deliver comprehensive industrial services with unmatched quality and reliability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => {
                    setActiveFilter(category.id);
                    setExpandedCard(null); // Collapse card on filter change
                }}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 relative ${activeFilter === category.id ? 'text-white' : 'text-gray-600 bg-white hover:bg-gray-200/50 shadow-sm border border-gray-200/80'}`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 1 }}
              >
                {activeFilter === category.id && (
                  <motion.div
                    layoutId="activeServicePill"
                    className="absolute inset-0 bg-gradient-to-r from-[#1479ae] to-blue-700 rounded-full shadow-lg"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category.label}</span>
              </motion.button>
            ))}
          </div>

          {/* Services Grid */}
          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
              {filteredServices.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  isExpanded={expandedCard === service.id}
                  onToggle={() => handleToggle(service.id)}
                />
              ))}
          </motion.div>
        </div>
      </section>

       {/* CTA Section */}
        <section className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-6 text-center">
                 <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                 >
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Ready to Start Your Next Project?</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Get in touch with our experts to discuss your requirements and receive a customized solution that drives your business forward.
                    </p>
                    <div className="mt-8">
                        <a
                            href="#contact"
                            className="group inline-flex items-center justify-center px-8 py-4 bg-[#1479ae] text-white rounded-lg font-semibold hover:bg-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-300/50"
                        >
                            Request a Free Quote
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                    </div>
                 </motion.div>
            </div>
        </section>
    </main>
  );
}