'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, ChevronRight } from 'lucide-react'

// Define the SocialIcon component, now with a permanent color class
interface SocialIconProps {
    children: React.ReactNode;
    href: string;
    colorClass: string; // Prop for the permanent icon color
}

const SocialIcon = ({ children, href, colorClass }: SocialIconProps) => (
    <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        // Updated className: No hover effects, no transition, and uses the permanent colorClass
        className={`w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center ${colorClass}`}
    >
        {children}
    </a>
);

const Footer = () => {
    const logoUrl = '/logo.png'; // Assuming logo is in the public folder

    const quickLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/About' },
        { name: 'Services', href: '/Services' },
        { name: 'Solutions', href: '/Solutions' },
        { name: 'Gallery', href: '/Gallery' },
    ];

    const ourServices = [
        { name: 'Steel Fabrication', href: '/Services' },
        { name: 'HVAC & Clean Room', href: '/Services' },
        { name: 'Water Treatment', href: '/Services' },
        { name: 'Fire & Safety', href: '/Services' },
        { name: 'MEP Turnkey Projects', href: '/Services' },
    ];

  return (
    <footer className="bg-white font-sans border-t border-gray-200/80">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Main Footer Content */}
            <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {/* Column 1: About */}
                <div className="md:col-span-2 lg:col-span-1">
                    <a href="/" className="flex items-center gap-3 mb-4">
                        <img src={logoUrl} alt="Iconic Logo" className="h-10 w-auto" />
                        <span className="font-extrabold text-2xl" style={{ color: '#1479ae' }}>
                            Iconic
                        </span>
                    </a>
                    <p className="text-gray-600 leading-relaxed">
                        Engineering the future of industrial solutions with innovation, quality, and reliability at our core.
                    </p>
                    <div className="mt-6 flex items-center space-x-3">
                        {/* Pass permanent brand color classes to each icon */}
                        <SocialIcon href="#" colorClass="text-blue-600"> {/* Facebook Blue */}
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                        </SocialIcon>
                        <SocialIcon href="#" colorClass="text-sky-500"> {/* Twitter (X) Blue */}
                             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                        </SocialIcon>
                        <SocialIcon href="#" colorClass="text-blue-700"> {/* LinkedIn Blue */}
                             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-3.096 0 1.548 1.548 0 013.096 0zM6.55 8.002H3.442V16.34h3.108V8.002zM17.925 2H6.075A4.075 4.075 0 002 6.075v11.85A4.075 4.075 0 006.075 22h11.85A4.075 4.075 0 0022 17.925V6.075A4.075 4.075 0 0017.925 2z" clipRule="evenodd" /></svg>
                        </SocialIcon>
                        <SocialIcon href="#" colorClass="text-pink-500"> {/* Instagram Pink/Purple */}
                           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049 1.064.218 1.791.465 2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.795 2.013 10.148 2 12.315 2zm-1.113 7.828a4.123 4.123 0 11-4.123 4.123 4.123 4.123 0 014.123-4.123zm-1.285 4.123a1.285 1.285 0 10-1.285-1.285 1.285 1.285 0 001.285 1.285z" clipRule="evenodd" /></svg>
                        </SocialIcon>
                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Quick Links</h3>
                    <ul className="space-y-3">
                        {quickLinks.map(link => (
                            <li key={link.name}>
                                <a href={link.href} className="group flex items-center text-gray-600 hover:text-[#1479ae] transition-colors">
                                    <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <span>{link.name}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 3: Our Services */}
                <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Our Services</h3>
                    <ul className="space-y-3">
                        {ourServices.map(service => (
                            <li key={service.name}>
                                <a href={service.href} className="group flex items-center text-gray-600 hover:text-[#1479ae] transition-colors">
                                    <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <span>{service.name}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 4: Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Contact Us</h3>
                    <ul className="space-y-4 text-gray-600">
                        <li className="flex items-start">
                            <MapPin className="w-5 h-5 mr-3 mt-1 text-[#1479ae] flex-shrink-0" />
                            <span>Plot No. 3/540, A to R, Ganga Nagar, Bedarapalli, Hosur-635126 Tamil Nadu</span>
                        </li>
                        <li className="flex items-start">
                            <Mail className="w-5 h-5 mr-3 mt-1 text-[#1479ae] flex-shrink-0" />
                            <a href="mailto:Info@iconiciits.com" className="hover:text-[#1479ae]">Info@iconiciits.com</a>
                        </li>
                        <li className="flex items-start">
                            <Phone className="w-5 h-5 mr-3 mt-1 text-[#1479ae] flex-shrink-0" />
                            <div>
                                <a href="tel:+918056554761" className="block hover:text-[#1479ae]">+91 80565 54761</a>
                                <a href="tel:+919789756826" className="block hover:text-[#1479ae]">+91 97897 56826</a>
                                {/* START: WhatsApp Link with Icon on the left */}
                                <a 
                                    href="https://wa.me/919629466826" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center hover:text-[#1479ae] group"
                                >
                                    {/* WhatsApp SVG Icon */}
                                    <svg 
                                        fill="currentColor" 
                                        viewBox="0 0 24 24" 
                                        className="w-4 h-4 mr-2 text-green-500 transition-transform group-hover:scale-110" 
                                        aria-hidden="true"
                                    >
                                        <path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.69-1.05-5.14-2.9-6.96zM12.04 20.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42 1.56 1.56 2.42 3.62 2.42 5.82-1.04 4.54-4.74 8.24-9.24 8.24zm4.52-6.19c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.18-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.07-.12-.23-.19-.48-.31z"/>
                                    </svg>
                                    <span>+91 96294 66826</span>
                                </a>
                                {/* END: WhatsApp Link with Icon */}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="py-6 border-t border-gray-200/80">
                <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Iconic Solutions. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer