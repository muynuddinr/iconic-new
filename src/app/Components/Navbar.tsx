'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronRight, Briefcase, Home, Info, LayoutGrid, Images } from 'lucide-react'

// Type definitions
interface LogoProps {
  src?: string;
}

interface ContactButtonProps {
  className?: string;
}

// Main Navbar Component
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const [pathname, setPathname] = useState('')

  // The path to your logo in the 'public' folder.
  const logoUrl = '/logo.png';

  // Navigation links data
  const navLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/About', icon: Info },
    { name: 'Services', href: '/Services', icon: Briefcase },
    { name: 'Solutions', href: '/Solutions', icon: LayoutGrid },
    { name: 'Gallery', href: '/Gallery', icon: Images },
  ]

  useEffect(() => {
    // Set pathname on client-side mount
    setPathname(window.location.pathname);

    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  // Effect to prevent body scroll when the mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  // Reusable component for the logo
  const Logo: React.FC<LogoProps> = ({ src }) => (
    <a href="/" className="flex items-center gap-3 group cursor-pointer" aria-label="Iconic Solutions Home">
        <img src={src || '/logo.png'} alt="Iconic Logo" className="h-10 w-auto transition-transform duration-300 group-hover:scale-105 flex-shrink-0" />
        <span className="font-extrabold text-2xl" style={{ color: '#1479ae' }}>
        Iconic
        </span>
    </a>
  )

  // Reusable component for the Contact Us button, now as a link
  const ContactButton: React.FC<ContactButtonProps> = ({ className = '' }) => (
    <a 
      href="/Contact" 
      className={`flex items-center justify-center px-5 py-2.5 bg-[#1479ae] text-white rounded-full font-semibold hover:bg-[#116896] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#1479ae]/50 group ${className}`}
    >
      <span>Contact Us</span>
      <ChevronRight className="ml-1.5 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
    </a>
  )
  
  const menuVariants = {
    closed: { x: '100%' },
    open: { x: 0, transition: { type: 'spring' as const, stiffness: 300, damping: 30 } }
  };

  const navItemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${
        hasScrolled 
          ? 'py-4 bg-white/95 backdrop-blur-lg shadow-md border-b border-gray-200' 
          : 'py-6 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Logo src={logoUrl} />

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center bg-white/60 backdrop-blur-md px-3 py-2 rounded-full border border-gray-200/80 shadow-sm">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`flex items-center px-4 py-2 rounded-full text-base font-medium transition-colors duration-300 relative ${isActive ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'}`}
                  >
                    {isActive && <motion.div layoutId="desktop-active-link" className="absolute inset-0 bg-gray-100 rounded-full z-0"></motion.div>}
                    <span className="relative z-10">{link.name}</span>
                  </a>
                )
              })}
            </div>

            <div className="flex items-center space-x-4">
              <ContactButton className="hidden sm:flex" />
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(true)}
                className="lg:hidden p-2.5 rounded-full bg-gray-100/80 border border-gray-200/90 transition-all duration-300 hover:scale-110"
                aria-label="Toggle menu"
              >
                <Menu className="w-6 h-6 text-slate-800" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm" 
              onClick={() => setIsMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            ></motion.div>
            
            <motion.div 
              className="fixed top-0 right-0 bottom-0 z-[101] w-full max-w-xs bg-white shadow-2xl"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-center mb-10">
                    <Logo src={logoUrl} />
                    <button onClick={() => setIsMenuOpen(false)} className="p-2 -mr-2 rounded-full hover:bg-gray-100">
                        <X className="w-6 h-6 text-slate-800" />
                    </button>
                </div>
                <motion.nav
                  variants={{ open: { transition: { staggerChildren: 0.1, delayChildren: 0.2 }}}}
                >
                  <ul className="flex flex-col space-y-3">
                    {navLinks.map((link) => {
                      const isActive = pathname === link.href;
                      return (
                        <motion.li key={link.name} variants={navItemVariants}>
                          <a
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={`flex items-center p-4 rounded-xl text-lg transition-all duration-300 group ${isActive ? 'bg-[#1479ae] text-white shadow' : 'text-slate-800 hover:bg-gray-100'}`}
                          >
                            <link.icon className={`w-6 h-6 mr-4 transition-colors ${isActive ? 'text-white' : 'text-slate-500'}`} />
                            <span className="font-semibold">{link.name}</span>
                            <ChevronRight className={`ml-auto w-5 h-5 transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                          </a>
                        </motion.li>
                      )
                    })}
                  </ul>
                </motion.nav>
                <div className="mt-auto pt-6 border-t border-gray-200">
                    <ContactButton className="w-full" />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
