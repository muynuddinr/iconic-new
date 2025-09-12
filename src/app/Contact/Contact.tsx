'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, ArrowRight, FileText } from 'lucide-react'

const ContactPage = () => {

  const contactDetails = [
    { icon: MapPin, title: "Production Office", lines: ["Plot No. 3/540, A to R, Ganga Nagar", "Bedarapalli, Hosur-635126 Tamil Nadu"] },
    { icon: Mail, title: "Email Us", lines: ["Info@iconiciits.com",] },
    { icon: Phone, title: "Call Us", lines: ["+91 8056554761", "+91 9789756826", "+91 9629466826"] },
    { icon: FileText, title: "GST Information", lines: ["Innovation GST: 33AAICI2795M1Z2", "Indus GST: 29BKYPD9433R1ZW"] },
  ];

  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState<null | { ok: boolean; message: string }>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget as HTMLFormElement
    const formData = new FormData(form)
    const payload = {
      name: String(formData.get('full-name') || ''),
      company: String(formData.get('company') || ''),
      email: String(formData.get('email') || ''),
      message: String(formData.get('message') || ''),
    }
    if (!payload.email || !payload.message) {
      setSubmitted({ ok: false, message: 'Email and message are required.' })
      return
    }
    try {
      setSubmitting(true)
      setSubmitted(null)
      const res = await fetch('/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.message || 'Failed to send message')
      }
      form.reset()
      setSubmitted({ ok: true, message: 'Thanks! Your message has been sent.' })
    } catch (err: any) {
      setSubmitted({ ok: false, message: err?.message || 'Something went wrong.' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="bg-gray-50 font-sans">
      {/* Hero Section */}
      <section className="relative py-32 bg-white text-gray-800 border-b border-gray-200/80 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 w-full h-full bg-gradient-to-br from-cyan-100/50 to-[#1479ae]/20 rounded-full blur-3xl opacity-50"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            <div>
                <motion.h1 
                    className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 100, delay: 0.1 }}
                >
                    Get in Touch
                </motion.h1>
                <motion.p 
                    className="text-lg text-gray-600 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
                >
                    We're here to help and answer any question you might have. We look forward to hearing from you and discussing your next project.
                </motion.p>
            </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column: Contact Info */}
            <motion.div 
              className="lg:col-span-5"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-8">
                    Reach out to us through any of the following channels. Our team is ready to assist you with all your industrial solution needs.
                </p>
                <div className="space-y-8">
                    {contactDetails.map((detail, index) => (
                        <div key={index} className="flex items-start gap-5 group">
                            <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg border border-gray-200/80 group-hover:bg-[#1479ae] transition-all duration-300 group-hover:scale-105">
                                <detail.icon className="w-8 h-8 text-[#1479ae] group-hover:text-white transition-colors duration-300" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-800 text-lg mb-1">{detail.title}</h3>
                                {detail.lines.map((line, i) => (
                                    <p key={i} className="text-gray-600">{line}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Right Column: Contact Form */}
            <motion.div 
              className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl shadow-2xl border border-gray-200/80"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Send us a Message</h2>
              <p className="text-gray-600 mb-8">Fill out the form and our team will get back to you within 24 hours.</p>
              {submitted && (
                <div className={`mb-4 rounded-md border px-4 py-3 text-sm ${submitted.ok ? 'border-green-200 bg-green-50 text-green-800' : 'border-red-200 bg-red-50 text-red-800'}`}>
                  {submitted.message}
                </div>
              )}

              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input type="text" name="full-name" id="full-name" autoComplete="name" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-[#1479ae] focus:border-[#1479ae] transition" />
                  </div>
                   <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
                    <input type="text" name="company" id="company" autoComplete="organization" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-[#1479ae] focus:border-[#1479ae] transition" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input id="email" name="email" type="email" autoComplete="email" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-[#1479ae] focus:border-[#1479ae] transition" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">How can we help?</label>
                  <textarea id="message" name="message" rows={5} required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-[#1479ae] focus:border-[#1479ae] transition"></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className={`group w-full inline-flex items-center justify-center px-8 py-4 rounded-lg text-lg font-semibold transform transition-all duration-300 shadow-lg ${submitting ? 'bg-gray-400 cursor-not-allowed text-white' : 'bg-[#1479ae] text-white hover:bg-[#116896] hover:scale-105 hover:shadow-[#1479ae]/40'}`}
                  >
                    {submitting ? 'Sending...' : 'Send Message'}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section>
        <div className="w-full h-[500px]">
           <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.6865683935633!2d77.80161831526696!3d12.13290623696668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac6d6b8a9a3b8f%3A0x8e8b8f2f8f8f8f8f!2sBedarapalli%2C%20Tamil%20Nadu%20635126%2C%20India!5e0!3m2!1sen!2sus!4v1628532135848!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Google Map of our location in Hosur"
            ></iframe>
        </div>
      </section>
    </main>
  )
}

export default ContactPage
