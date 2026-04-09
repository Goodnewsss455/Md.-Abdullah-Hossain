import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Zap } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-[#0a0f1a] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-600/10 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-orange-500 text-xs font-bold uppercase tracking-widest mb-8"
          >
            <MessageSquare size={14} />
            <span>Get In Touch</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter"
          >
            Let's Build Something <span className="text-orange-500 italic">Great</span>
          </motion.h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-xl leading-relaxed">
            Have a project in mind? We'd love to hear from you. Send us a message and we'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl font-bold mb-8 tracking-tight">Contact Information</h2>
                <p className="text-gray-500 text-lg mb-12">
                  Prefer a direct conversation? Reach out to us through any of these channels.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  { icon: Mail, label: 'Email Us', value: 'mdabdullahhossain3467@gmail.com', color: 'text-blue-500', bg: 'bg-blue-50' },
                  { icon: Phone, label: 'Call Us', value: '+880 1234 567890', color: 'text-green-500', bg: 'bg-green-50' },
                  { icon: MapPin, label: 'Our Studio', value: 'Dhaka, Bangladesh', color: 'text-red-500', bg: 'bg-red-50' },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-6 p-6 rounded-3xl border border-gray-100 hover:border-orange-500/20 hover:bg-gray-50 transition-all group"
                  >
                    <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110", item.bg, item.color)}>
                      <item.icon size={28} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">{item.label}</p>
                      <p className="text-lg font-bold text-gray-900">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="p-10 bg-[#0a0f1a] rounded-[40px] text-white relative overflow-hidden">
                <div className="relative z-10">
                  <Zap className="text-orange-500 mb-6" size={40} />
                  <h3 className="text-2xl font-bold mb-4">Fast Response Guaranteed</h3>
                  <p className="text-gray-400">Our average response time is under 2 hours during business days.</p>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-3xl rounded-full" />
              </div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 md:p-16 rounded-[48px] border border-gray-100 shadow-2xl"
            >
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-gray-700 ml-2">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 transition-all" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-gray-700 ml-2">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 transition-all" 
                      placeholder="john@example.com" 
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-gray-700 ml-2">Subject</label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 transition-all appearance-none">
                    <option>General Inquiry</option>
                    <option>WordPress Development</option>
                    <option>Malware Removal</option>
                    <option>AI Automation</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-gray-700 ml-2">Your Message</label>
                  <textarea 
                    rows={5} 
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 transition-all" 
                    placeholder="Tell us about your project goals..." 
                  />
                </div>
                <button className="w-full bg-[#ff6b6b] text-white py-6 rounded-2xl font-bold text-xl hover:opacity-90 transition-all active:scale-[0.98] shadow-xl shadow-red-500/20 flex items-center justify-center gap-3">
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
