import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Code2, ChevronDown, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { SERVICES } from '../constants/services';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
    setShowDropdown(false);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services', dropdown: true },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' }
  ];

  const colorClasses: Record<string, string> = {
    blue: "text-blue-500 bg-blue-50",
    red: "text-red-500 bg-red-50",
    orange: "text-orange-500 bg-orange-50",
    yellow: "text-yellow-600 bg-yellow-50",
    purple: "text-purple-500 bg-purple-50",
    emerald: "text-emerald-500 bg-emerald-50",
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 bg-white shadow-md border-b border-gray-100'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-[#ff6b6b] rounded-xl flex items-center justify-center text-white shadow-lg shadow-red-500/20 group-hover:scale-110 transition-transform">
            <Code2 size={24} />
          </div>
          <span className="text-2xl font-bold tracking-tighter text-gray-900">
            DevCraft
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <div 
                key={item.name} 
                className="relative group"
                onMouseEnter={() => item.dropdown && setShowDropdown(true)}
                onMouseLeave={() => item.dropdown && setShowDropdown(false)}
              >
                  <Link
                    to={item.path}
                    className="text-sm font-bold transition-all flex items-center gap-1 py-2 text-gray-600 hover:text-[#ff6b6b]"
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown size={14} className={cn("transition-transform", showDropdown && "rotate-180")} />}
                  </Link>

                {item.dropdown && (
                  <AnimatePresence>
                    {showDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                      >
                        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-4 w-[600px] grid grid-cols-2 gap-2">
                          {SERVICES.map((service) => (
                            <Link
                              key={service.id}
                              to={`/service/${service.id}`}
                              className="flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-all group/item"
                            >
                              <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center shrink-0", colorClasses[service.color])}>
                                <service.icon size={24} />
                              </div>
                              <div>
                                <h4 className="text-sm font-bold text-gray-900 mb-1 group-hover/item:text-[#ff6b6b] transition-colors">{service.title}</h4>
                                <p className="text-xs text-gray-500 line-clamp-1">{service.shortDescription}</p>
                              </div>
                            </Link>
                          ))}
                          <div className="col-span-2 mt-2 pt-4 border-t border-gray-50 flex justify-center">
                            <Link to="/services" className="text-xs font-bold text-gray-400 hover:text-[#ff6b6b] flex items-center gap-2 transition-colors">
                              View All Services <ArrowRight size={14} />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>
          <a 
            href="mailto:mdabdullahhossain3467@gmail.com"
            className="bg-[#ff6b6b] text-white px-8 py-4 rounded-2xl text-sm font-bold hover:opacity-90 transition-all active:scale-95 shadow-xl shadow-red-500/20"
          >
            Get Free Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden transition-colors p-2 text-gray-900"
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
                  {navItems.map((item) => (
                    <Link 
                      key={item.name}
                      to={item.path} 
                      onClick={() => setIsOpen(false)}
                      className="block text-2xl font-bold text-gray-900"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <div className="space-y-6">
                  <div className="text-gray-400 text-xs font-bold uppercase tracking-widest">Our Expertise</div>
                  <div className="space-y-6">
                    {SERVICES.map((service) => (
                      <Link 
                        key={service.id}
                        to={`/service/${service.id}`}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-4 group"
                      >
                        <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center shrink-0", colorClasses[service.color])}>
                          <service.icon size={20} />
                        </div>
                        <span className="text-lg font-bold text-gray-800 group-hover:text-[#ff6b6b] transition-colors">
                          {service.title}
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

