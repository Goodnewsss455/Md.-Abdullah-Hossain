import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Code2, Shield, Bug, Zap, Layout, Bot, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const services = [
    { name: 'WordPress Development', icon: Code2, color: 'text-orange-500' },
    { name: 'Malware Removal', icon: Shield, color: 'text-red-500' },
    { name: 'Bug Fixing', icon: Bug, color: 'text-yellow-600' },
    { name: 'Speed Optimization', icon: Zap, color: 'text-emerald-500' },
    { name: 'Frontend Development', icon: Layout, color: 'text-purple-500' },
    { name: 'AI Automation', icon: Bot, color: 'text-cyan-500' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-[#ff6b6b] rounded-lg flex items-center justify-center text-white shadow-lg shadow-red-500/20">
            <Code2 size={24} />
          </div>
          <span className={cn(
            "text-2xl font-bold tracking-tight transition-colors",
            scrolled ? "text-gray-900" : "text-white"
          )}>
            DevCraft
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-8 mr-8">
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              { name: 'Services', path: '/services' },
              { name: 'Pricing', path: '/pricing' },
              { name: 'Contact', path: '/contact' }
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "text-sm font-bold transition-colors relative group",
                  scrolled ? "text-gray-600 hover:text-gray-900" : "text-white/80 hover:text-white"
                )}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff6b6b] transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>
          <a 
            href="mailto:mdabdullahhossain3467@gmail.com"
            className="bg-[#ff6b6b] text-white px-8 py-3 rounded-2xl text-sm font-bold hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-red-500/20"
          >
            Get Free Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "md:hidden transition-colors p-2",
            scrolled ? "text-gray-900" : "text-white"
          )}
          onClick={() => setIsOpen(true)}
        >
          <Menu size={32} />
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[60] flex flex-col md:hidden"
          >
            {/* Header in Mobile Menu */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#ff6b6b] rounded-lg flex items-center justify-center text-white">
                  <Code2 size={24} />
                </div>
                <span className="text-2xl font-bold text-gray-900">DevCraft</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-900 p-2"
              >
                <X size={32} />
              </button>
            </div>

            {/* Menu Content */}
            <div className="flex-1 overflow-y-auto px-6 py-8">
              <div className="space-y-8">
                <div className="space-y-6">
                  <Link 
                    to="/" 
                    onClick={() => setIsOpen(false)}
                    className="block text-xl font-bold text-gray-900"
                  >
                    Home
                  </Link>
                  <Link 
                    to="/about" 
                    onClick={() => setIsOpen(false)}
                    className="block text-xl font-bold text-gray-900"
                  >
                    About
                  </Link>
                  <Link 
                    to="/services" 
                    onClick={() => setIsOpen(false)}
                    className="block text-xl font-bold text-gray-900"
                  >
                    Services
                  </Link>
                  <Link 
                    to="/pricing" 
                    onClick={() => setIsOpen(false)}
                    className="block text-xl font-bold text-gray-900"
                  >
                    Pricing
                  </Link>
                  <Link 
                    to="/contact" 
                    onClick={() => setIsOpen(false)}
                    className="block text-xl font-bold text-gray-900"
                  >
                    Contact
                  </Link>
                </div>

                <div className="space-y-6">
                  <div className="text-gray-400 text-xs font-bold uppercase tracking-widest">Our Expertise</div>
                  <div className="space-y-6">
                    {services.map((service) => (
                      <Link 
                        key={service.name}
                        to="/services"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-4 group"
                      >
                        <service.icon className={cn("w-5 h-5", service.color)} />
                        <span className="text-lg font-medium text-gray-800 group-hover:text-[#ff6b6b] transition-colors">
                          {service.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer in Mobile Menu */}
            <div className="p-6 border-t border-gray-100">
              <a 
                href="mailto:mdabdullahhossain3467@gmail.com"
                className="block w-full bg-[#ff6b6b] text-white py-5 rounded-3xl text-center font-bold text-lg shadow-xl shadow-red-500/20 active:scale-95 transition-transform"
              >
                Get Free Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

