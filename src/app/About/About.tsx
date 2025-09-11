'use client'
import React, { useState } from 'react';
import {
  Wrench,
  Droplets,
  Flame,
  Cog,
  Factory,
  Shield,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Users,
  Award,
  Target,
  Eye
} from 'lucide-react';

const About = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  
  // Updated Stats
  const stats = [
    { number: '300+', label: 'Projects Completed', icon: CheckCircle },
    { number: '10+', label: 'Years of Experience', icon: TrendingUp },
    { number: '50+', label: 'Team Members', icon: Users },
    { number: '97%', label: 'Client Satisfaction', icon: Award },
  ];

  const capabilities = [
    { icon: Wrench, label: 'MEP Systems', description: 'Complete mechanical, electrical & plumbing systems' },
    { icon: Factory, label: 'Clean Rooms', description: 'Contamination-controlled environments for critical processes' },
    { icon: Droplets, label: 'Water Treatment', description: 'Advanced filtration and purification systems' },
    { icon: Flame, label: 'Fire & Safety', description: 'Comprehensive fire protection and safety solutions' },
    { icon: Cog, label: 'HVAC Solutions', description: 'Climate control and air quality management' },
    { icon: Shield, label: 'Safety Compliance', description: 'Regulatory compliance and safety auditing' },
  ];
  const industries = [
    { name: 'Pharmaceutical industries', icon: '💊', gradient: 'from-blue-500 to-cyan-500' },
    { name: 'Automobile industries', icon: '🚗', gradient: 'from-red-500 to-orange-500' },
    { name: 'Power generation', icon: '⚡', gradient: 'from-yellow-500 to-amber-500' },
    { name: 'Food & beverage (FMCGs)', icon: '🏭', gradient: 'from-green-500 to-emerald-500' },
    { name: 'Medical care facilities', icon: '🏥', gradient: 'from-pink-500 to-rose-500' },
    { name: 'Semiconductor & electronics', icon: '💾', gradient: 'from-purple-500 to-violet-500' },
  ];
  return (
    <>
      <main className="bg-white text-gray-900 overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 30% 40%, rgba(120,119,198,0.3), transparent 70%)' }}></div>
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 70% 70%, rgba(76,29,149,0.3), transparent 70%)' }}></div>
            <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium mb-6">
                About IITS
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                ICONIC INDUS TECH
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">SOLUTIONS</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                A versatile multidisciplinary industrial contractor specializing in MEP, Clean room, Water treatment, and Fire & Safety systems with decades of industry experience.
              </p>
              <div className="flex flex-wrap gap-4 justify-center mb-10">
                <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Discover Our Services
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 border-2 border-white/30 hover:border-white/60 backdrop-blur-sm rounded-full font-semibold transition-all duration-300 hover:bg-white/10">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* --- NEW: Stats Section --- */}
        <section className="bg-gray-50 py-16 -mt-20 relative z-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center p-4">
                  <stat.icon className="w-10 h-10 text-blue-600 mb-3" />
                  <p className="text-3xl md:text-4xl font-bold text-gray-900">{stat.number}</p>
                  <p className="text-gray-600 mt-1 text-sm md:text-base">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            {/* --- MODIFIED: Company Overview --- */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">IITS</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Established in 2021, Iconic Indus Tech Solutions (IITS) is a dynamic and versatile multidisciplinary industrial contractor. With a dedicated team of over 50 professionals, including 25+ experienced core members, we bring over a decade of collective industry expertise to every project. We design, manufacture, erect, and commission various types of MEP, Clean Room, Water Treatment, and Fire & Safety systems, providing need-based products and services to our customers.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our rapid growth and commitment to excellence are demonstrated by the completion of our first 100 projects by 2023. This in-depth knowledge and hands-on experience enable us to provide a complete line of services, ensuring a client satisfaction rate of 97%.
                </p>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-2xl p-8 shadow-xl">
                  <h3 className="text-2xl font-bold mb-6">Our Main Business Modules</h3>
                  <div className="space-y-4">
                    {['MEP Systems','HVAC Solutions','Clean Rooms','Water Treatment','Fire & Safety Systems'].map((module, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-cyan-300" />
                        <span className="font-medium">{module}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Business Services */}
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Services</span>
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: 'New Projects', description: 'Complete turnkey solutions from design to commissioning', icon: <Wrench className='w-8 h-8 text-blue-500' />, gradient: 'from-blue-50 to-cyan-50' },
                  { title: 'Revamp & Retrofit', description: 'Upgrade existing systems for better efficiency', icon: <Cog className='w-8 h-8 text-cyan-500' />, gradient: 'from-cyan-50 to-blue-50' },
                  { title: 'Products & Components', description: 'High-quality industrial equipment and parts', icon: <Factory className='w-8 h-8 text-indigo-500' />, gradient: 'from-indigo-50 to-blue-50' },
                  { title: 'AMC Services', description: 'Operation, Maintenance & Troubleshooting', icon: <Shield className='w-8 h-8 text-blue-500' />, gradient: 'from-blue-50 to-cyan-50' },
                ].map((service, index) => (
                  <div key={index} className={`group p-6 bg-gradient-to-br ${service.gradient} rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}>
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="grid lg:grid-cols-2 gap-16 mb-20">
              <div className="bg-white rounded-3xl shadow-2xl p-10 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">MISSION</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    'Iconic is dedicated to serving the customers to reduce, reuse & recycle their resources by providing technologically innovative solutions, services & products by meet their requirements.',
                    'Pay attention to customer needs.',
                    'We are committed to following best practices in our operation & services to provide a safe and clean environment.'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-cyan-500 mt-1" />
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-3xl shadow-2xl p-10 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">VISION</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    'To be a prominent and dynamic organization by providing world-class products and services to the customers',
                    'To be the most valued and remembered company by providing safe and sustainable solutions for the customers',
                    'Sustaining integrity at all stages of business.',
                    'Prioritise customer care to exceed expectations'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-pink-500 mt-1" />
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Capabilities */}
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Capabilities</span>
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {capabilities.map((item, idx) => (
                  <div
                    key={idx}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 text-center transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-blue-200 cursor-pointer"
                    onMouseEnter={() => setHoveredCard(`capability-${idx}`)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-300 ${hoveredCard === `capability-${idx}` ? 'scale-110' : ''}`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{item.label}</h4>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Industries Served */}
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                Industries We Serve
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {industries.map((industry, idx) => (
                  <div
                    key={idx}
                    className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 cursor-pointer"
                    onMouseEnter={() => setHoveredCard(`industry-${idx}`)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} transition-opacity duration-500 ${hoveredCard === `industry-${idx}` ? 'opacity-10' : 'opacity-0'}`}></div>
                    <div className="relative p-8 text-center">
                      <div className="text-4xl mb-4">{industry.icon}</div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{industry.name}</h4>
                      <div className={`w-12 h-1 bg-gradient-to-r ${industry.gradient} mx-auto rounded-full`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 rounded-2xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-xl mb-8 opacity-90">
                Let's discuss how IITS can help with your industrial solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Contact Us
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-10 py-5 border-2 border-white/30 hover:border-white/60 backdrop-blur-sm rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/10 transform hover:scale-105">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;