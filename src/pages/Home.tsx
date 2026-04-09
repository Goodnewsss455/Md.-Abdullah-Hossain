import { motion, AnimatePresence } from 'motion/react';
import { SERVICES } from '../constants/services';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import { ArrowRight, CheckCircle2, Sparkles, Star, Plus, Minus, Zap, Shield, Target, Rocket, Info, Camera, Layout, Code, Mail, Globe } from 'lucide-react';
import { cn } from '../lib/utils';
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [pricingType, setPricingType] = useState<'monthly' | 'project'>('monthly');
  const [serviceIndex, setServiceIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const lottieRef = useRef<any>(null);

  const services = [
    "WordPress Malware Removal",
    "WordPress Development",
    "Speed Optimization",
    "AI Automation Solutions",
    "E-commerce Excellence"
  ];

  const testimonials = [
    {
      name: 'Rahul Sharma',
      role: 'CEO, TechStartup BD',
      content: 'DevCraft rebuilt our entire WordPress site from scratch. The result was stunning — 3x faster load times and our conversion rate jumped by 45% in the first month.',
      service: 'WordPress Development',
      avatar: 'https://picsum.photos/seed/rahul/100/100'
    },
    {
      name: 'Sarah Mitchell',
      role: 'Owner, Boutique Store Online',
      content: 'Our site was hacked and we were panicking. DevCraft cleaned everything within 6 hours, secured it completely, and set up monitoring to prevent future attacks.',
      service: 'Malware Removal',
      avatar: 'https://picsum.photos/seed/sarah/100/100'
    },
    {
      name: 'James Okafor',
      role: 'Founder, E-Commerce Brand',
      content: 'My WooCommerce store had a critical checkout bug costing me thousands daily. DevCraft diagnosed and fixed it in under 2 hours. Truly professional service.',
      service: 'Bug Fixing',
      avatar: 'https://picsum.photos/seed/james/100/100'
    },
    {
      name: 'Priya Nair',
      role: 'Marketing Director, Agency',
      content: 'Our PageSpeed went from 34 to 96 after DevCraft\'s optimization. Our bounce rate dropped by 60% and Google rankings improved significantly.',
      service: 'Speed Optimization',
      avatar: 'https://picsum.photos/seed/priya/100/100'
    }
  ];

  const lottieAnimations = {
    development: "https://assets10.lottiefiles.com/packages/lf20_w51pcehl.json",
    security: "https://assets3.lottiefiles.com/packages/lf20_6aYl99.json",
    speed: "https://assets1.lottiefiles.com/packages/lf20_i9mxcD.json",
    ai: "https://assets9.lottiefiles.com/packages/lf20_qp1q7mct.json"
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setServiceIndex((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const stats = [
    { label: 'Projects Completed', value: '250+', icon: Target },
    { label: 'Happy Clients', value: '180+', icon: Star },
    { label: 'Years Experience', value: '5+', icon: Rocket },
    { label: 'Support Response', value: '< 2h', icon: Zap },
  ];

  const processSteps = [
    { title: 'Discovery', desc: 'We dive deep into your business goals and requirements.', icon: Sparkles },
    { title: 'Strategy', desc: 'Creating a roadmap for your digital success.', icon: Shield },
    { title: 'Development', desc: 'Building your solution with precision and care.', icon: Rocket },
    { title: 'Launch', desc: 'Going live and ensuring everything is perfect.', icon: Zap },
  ];

  const faqs = [
    { q: 'How long does a typical WordPress project take?', a: 'A standard website usually takes 2-4 weeks, while complex e-commerce sites can take 6-8 weeks depending on requirements.' },
    { q: 'Do you provide ongoing maintenance?', a: 'Yes, we offer monthly maintenance packages that include security updates, backups, and performance monitoring.' },
    { q: 'Can you fix a hacked WordPress site?', a: 'Absolutely. We specialize in malware removal and security hardening to get your site back online safely.' },
    { q: 'Is your development SEO-friendly?', a: 'Yes, all our websites are built with SEO best practices in mind, including clean code and fast loading speeds.' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Redesigned to match screenshot */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
        {/* Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000" 
            alt="Workspace" 
            className="w-full h-full object-cover opacity-40 blur-sm scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white text-xs font-medium mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span>Professional Web Services — Trusted by 500+ Clients</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-6xl md:text-8xl font-bold text-white mb-6 leading-[1.1] tracking-tight"
            >
              Expert <span className="text-orange-500">WordPress</span><br />
              & Web Solutions
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-md border border-white/20 rounded-full text-white text-lg font-semibold mb-8 border-orange-500/50 min-w-[300px]"
            >
              <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center shrink-0">
                <ArrowRight size={18} />
              </div>
              <div className="relative h-7 overflow-hidden flex-1">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={serviceIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 flex items-center"
                  >
                    {services[serviceIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-300 text-xl max-w-xl mb-10 leading-relaxed"
            >
              We build, secure, optimize, and automate your WordPress & web presence. From custom development to AI automation — one team, all solutions.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center gap-6 mb-16"
            >
              <a 
                href="mailto:mdabdullahhossain3467@gmail.com"
                className="bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20 flex items-center gap-2"
              >
                Get Free Consultation <ArrowRight size={20} />
              </a>
              <button className="flex items-center gap-3 text-white font-bold text-lg hover:text-orange-500 transition-colors group">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-orange-500 transition-colors">
                  <Info size={20} />
                </div>
                About Us
              </button>
              {/* Hero Lottie */}
              <div className="w-24 h-24 hidden md:block">
                <Lottie animationData={null} path={lottieAnimations.speed} loop={true} />
              </div>
            </motion.div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-bold text-white mb-1">500+</div>
                <div className="text-gray-400 text-sm">Projects Done</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">98%</div>
                <div className="text-gray-400 text-sm">Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">24/7</div>
                <div className="text-gray-400 text-sm">Support</div>
              </div>
            </div>
          </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden lg:block"
              onMouseEnter={() => lottieRef.current?.play()}
              onMouseLeave={() => lottieRef.current?.stop()}
            >
              {/* Floating Lottie Animation */}
              <div className="absolute -top-24 -left-24 w-72 h-72 z-20 pointer-events-none">
                <Lottie 
                  lottieRef={lottieRef}
                  animationData={null} 
                  path={lottieAnimations.development} 
                  loop={true} 
                  autoplay={false}
                />
              </div>

              {/* Floating Browser Window */}
              <div className="relative z-10 bg-[#1a1a1a] rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
              <div className="h-8 bg-[#2a2a2a] flex items-center px-4 gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                <div className="ml-4 flex-1 bg-black/20 rounded h-5 flex items-center px-3 text-[10px] text-gray-500">
                  peachweb.studio
                </div>
              </div>
              <div className="relative">
                <img 
                  src="input_file_2.png" 
                  alt="Expert Developer" 
                  className="w-full aspect-[4/3] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="text-white font-black text-lg tracking-tighter">MD ABDULLAH</div>
                  <div className="text-orange-500 text-[10px] font-bold uppercase tracking-widest">Lead Developer</div>
                </div>
              </div>
            </div>

            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-12 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-2xl flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white">
                <Shield size={24} />
              </div>
              <div>
                <div className="text-white font-bold text-sm">Secured</div>
                <div className="text-gray-400 text-[10px]">Malware Free</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -right-8 bottom-20 z-20 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-2xl flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center text-white">
                <Zap size={24} />
              </div>
              <div>
                <div className="text-white font-bold text-sm">100/100</div>
                <div className="text-gray-400 text-[10px]">PageSpeed Score</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Portfolio Card - Replaces the "bad" gap */}
      <section className="relative py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 rounded-full text-orange-500 text-xs font-bold uppercase tracking-widest mb-6">
                <Sparkles size={14} />
                <span>Premium Quality</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 tracking-tighter leading-tight">
                Unmatched <span className="text-orange-500 italic">Quality</span> <br />
                Digital Legacies
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl">
                We don't just build websites; we build digital legacies. Every project is a masterpiece of design and engineering, tailored to your unique vision.
              </p>
              <div className="flex gap-4">
                <button className="bg-black text-white px-8 py-4 rounded-2xl font-bold hover:bg-orange-500 transition-all">
                  View Case Studies
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="relative z-10 rounded-[48px] overflow-hidden border border-gray-100 shadow-[0_0_80px_rgba(249,115,22,0.1)] bg-gray-50 aspect-[4/5]">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={serviceIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.8 }}
                    src={[
                      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
                      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000",
                      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
                      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000"
                    ][serviceIndex % 4]} 
                    alt="Interactive Portfolio" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-12 left-12 right-12">
                  <div className="text-orange-500 font-black text-sm uppercase tracking-widest mb-2">Featured Project</div>
                  <h3 className="text-3xl font-bold text-white tracking-tight group-hover:text-orange-500 transition-colors">
                    {services[serviceIndex % services.length]}
                  </h3>
                </div>
              </div>
              {/* Decorative Glow */}
              <div className="absolute -inset-4 bg-orange-500/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 border-y border-gray-100 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">Trusted by industry leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale">
            {['WordPress', 'Google', 'Stripe', 'Meta', 'Amazon'].map((brand) => (
              <span key={brand} className="text-2xl font-black italic tracking-tighter">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 rounded-[32px] bg-gray-50 border border-gray-100 hover:border-orange-500/30 transition-all group"
              >
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mx-auto mb-6 text-orange-500 group-hover:scale-110 transition-transform">
                  <stat.icon size={24} />
                </div>
                <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
                <p className="text-gray-500 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Cinematic Redesign */}
      <section id="services" className="py-32 px-6 bg-[#0a0f1a] text-white relative overflow-hidden">
        {/* Atmospheric Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-orange-600/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-24 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-orange-500 text-xs font-bold uppercase tracking-widest mb-6"
            >
              <Zap size={14} />
              <span>Our Expertise</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter"
            >
              Premium <span className="text-orange-500 italic">Digital</span> Services
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed"
            >
              We combine cinematic aesthetics with technical precision to build WordPress solutions that don't just work—they inspire.
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          >
            {SERVICES.map((service, index) => {
              const colorClasses: Record<string, string> = {
                blue: "text-blue-400",
                red: "text-red-400",
                orange: "text-orange-400",
                yellow: "text-yellow-400",
                purple: "text-purple-400",
                emerald: "text-emerald-400",
              };

              return (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="group relative h-[500px] md:h-[600px] rounded-[40px] overflow-hidden border border-white/10 bg-white/5"
                >
                  {/* Background Image with Zoom Effect */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={service.imageUrl} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-40 group-hover:opacity-60"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-[#0a0f1a]/60 to-transparent" />
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 z-10 p-10 flex flex-col justify-end">
                    <div className="mb-6 transform transition-transform duration-500 group-hover:-translate-y-8">
                      <div className={cn(
                        "w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center mb-6",
                        colorClasses[service.color]
                      )}>
                        <service.icon size={28} />
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">{service.title}</h3>
                      <p className="text-gray-300 text-sm md:text-base max-w-md leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {service.description}
                      </p>
                      
                      {/* Creative Feature List */}
                      <div className="grid grid-cols-1 gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 transform translate-y-4 group-hover:translate-y-0">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-3">
                            <div className={cn("w-1.5 h-1.5 rounded-full", colorClasses[service.color].replace('text-', 'bg-'))} />
                            <span className="text-xs font-bold uppercase tracking-wider text-gray-200">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-white/10">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0a0f1a] bg-gray-800 flex items-center justify-center overflow-hidden">
                            <img src={`https://picsum.photos/seed/${service.id}${i}/50/50`} alt="Avatar" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                          </div>
                        ))}
                        <div className="w-8 h-8 rounded-full border-2 border-[#0a0f1a] bg-orange-500 flex items-center justify-center text-[10px] font-bold">
                          +12
                        </div>
                      </div>
                      <Link
                        to={`/service/${service.id}`}
                        className="group/btn flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-orange-500 hover:text-white transition-all"
                      >
                        View Project <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  {/* Hover Border Glow */}
                  <div className="absolute inset-0 border-2 border-orange-500/0 group-hover:border-orange-500/30 rounded-[40px] transition-all duration-500 pointer-events-none" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-4"
            >
              Pricing Plans
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
            >
              Choose Your <span className="italic">Service</span> Plan
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 max-w-2xl mx-auto text-lg mb-12"
            >
              Transparent pricing plans tailored to your specific business needs.
            </motion.p>

            {/* Pricing Toggle */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center justify-center gap-4 mb-16"
            >
              <div className="relative bg-gray-100 p-1.5 rounded-2xl flex items-center shadow-inner">
                {/* Savings Badge */}
                <div className="absolute -top-4 left-4 bg-orange-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow-lg animate-bounce">
                  SAVE 50%
                </div>
                
                <button
                  onClick={() => setPricingType('monthly')}
                  className={cn(
                    "px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300",
                    pricingType === 'monthly' 
                      ? "bg-black text-white shadow-xl" 
                      : "text-gray-500 hover:text-gray-900"
                  )}
                >
                  Monthly Subscription
                </button>
                <button
                  onClick={() => setPricingType('project')}
                  className={cn(
                    "px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300",
                    pricingType === 'project' 
                      ? "bg-black text-white shadow-xl" 
                      : "text-gray-500 hover:text-gray-900"
                  )}
                >
                  Per Project
                </button>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-gray-50 rounded-[40px] p-10 border border-gray-100 hover:border-orange-500/30 hover:shadow-2xl transition-all group"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform">
                    <service.icon size={28} />
                  </div>
                  <div className="text-right">
                    <div className="flex items-baseline justify-end gap-1">
                      <span className="text-gray-400 text-lg font-bold">$</span>
                      <span className="text-4xl font-black">
                        {pricingType === 'monthly' ? service.monthlyPrice : service.perProjectPrice}
                      </span>
                    </div>
                    <span className="text-gray-400 text-xs font-bold uppercase tracking-widest block mt-1">
                      {pricingType === 'monthly' ? '/ month' : '/ project'}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                  {service.shortDescription}
                </p>

                <div className="space-y-4 mb-10">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-orange-500" />
                      <span className="text-sm font-medium text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full py-4 bg-black text-white rounded-2xl font-bold hover:bg-orange-500 transition-all active:scale-95">
                  Subscribe Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Marquee - Brutalist Energy */}
      <section className="py-20 bg-white border-y border-gray-100 overflow-hidden">
        <div className="flex whitespace-nowrap">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-20 pr-20"
          >
            {['WordPress', 'React', 'Tailwind CSS', 'Framer Motion', 'TypeScript', 'Node.js', 'PHP', 'MySQL', 'Gemini AI', 'Next.js'].map((tech) => (
              <span key={tech} className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-gray-100 hover:text-orange-500 transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </motion.div>
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-20 pr-20"
          >
            {['WordPress', 'React', 'Tailwind CSS', 'Framer Motion', 'TypeScript', 'Node.js', 'PHP', 'MySQL', 'Gemini AI', 'Next.js'].map((tech) => (
              <span key={tech} className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-gray-100 hover:text-orange-500 transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects - Premium Grid */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-4"
              >
                Selected Works
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-bold tracking-tight"
              >
                Showcasing Our <span className="italic">Digital</span> Craftsmanship
              </motion.h2>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <button className="group flex items-center gap-3 font-bold text-lg">
                View All Projects 
                <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                  <ArrowRight size={20} />
                </div>
              </button>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: 'Modern E-commerce', category: 'WordPress / Woo', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000' },
              { title: 'SaaS Landing Page', category: 'React / Next.js', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000' },
              { title: 'Corporate Portal', category: 'Security / Speed', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000' },
              { title: 'AI Dashboard', category: 'Automation / AI', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000' },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[16/10] rounded-[40px] overflow-hidden mb-8 bg-gray-100">
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                </div>
                <div className="flex justify-between items-start px-4">
                  <div>
                    <h4 className="text-2xl font-bold mb-2 group-hover:text-orange-500 transition-colors">{project.title}</h4>
                    <p className="text-gray-500 font-medium uppercase tracking-widest text-xs">{project.category}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                    <ArrowRight size={18} className="-rotate-45 group-hover:rotate-0 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">How We Work</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              A streamlined process designed to deliver excellence at every step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -z-10" />
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-md transition-all text-center"
              >
                <div className="w-16 h-16 bg-orange-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-500/20">
                  <step.icon size={28} />
                </div>
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cinematic Branding Section - New */}
      <section className="py-32 px-6 bg-[#050505] relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[48px] overflow-hidden border border-white/10 shadow-2xl bg-gray-900">
              <img 
                src="input_file_3.png" 
                alt="Cinematic Portrait" 
                className="w-full h-[500px] md:h-[700px] object-cover hover:scale-105 transition-transform duration-1000 opacity-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            </div>
            {/* Floating Lottie */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 md:w-48 md:h-48 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-4 z-20 hidden md:block">
              <Lottie animationData={null} path={lottieAnimations.development} loop={true} className="w-full h-full" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 rounded-full text-orange-500 text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles size={14} />
              <span>Visionary Development</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-tight">
              Transforming <span className="text-orange-500">Ideas</span> into <br />
              <span className="italic">Digital Reality</span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-xl">
              I specialize in creating high-performance, secure, and visually stunning WordPress solutions that help businesses scale in the digital age.
            </p>
            <div className="space-y-8">
              {[
                { title: "Custom Architecture", desc: "Tailored solutions built from the ground up.", icon: Layout },
                { title: "Bulletproof Security", desc: "Advanced protection against all digital threats.", icon: Shield }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cinematic Gallery Section - New Premium Section */}
      <section className="py-32 px-6 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/20 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-orange-500 text-xs font-bold uppercase tracking-widest mb-6"
            >
              <Camera size={14} />
              <span>Visual Journey</span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
              Cinematic <span className="text-orange-500 italic">Moments</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000", title: "Creative Focus", size: "md:col-span-2 md:row-span-2" },
              { url: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1000", title: "Studio Vibes", size: "" },
              { url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000", title: "Tech Mastery", size: "" },
            ].map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={cn("relative group rounded-[40px] overflow-hidden border border-white/10 aspect-square md:aspect-auto bg-gray-900", img.size)}
              >
                <img 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-8 left-8">
                  <h4 className="text-2xl font-bold text-white mb-2">{img.title}</h4>
                  <div className="w-12 h-1 bg-orange-500 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Updated with User Images */}
      <section id="about" className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="rounded-3xl overflow-hidden bg-gray-200 aspect-[3/4] shadow-xl">
                  <img 
                    src="input_file_1.png" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000";
                    }}
                    alt="Expert" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                    referrerPolicy="no-referrer" 
                  />
                </div>
                <div className="bg-black text-white p-6 rounded-3xl shadow-xl">
                  <h4 className="text-3xl font-bold mb-1">10+</h4>
                  <p className="text-gray-400 text-sm">Years Experience</p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4 pt-12"
              >
                <div className="bg-orange-500 text-white p-6 rounded-3xl shadow-xl">
                  <h4 className="text-3xl font-bold mb-1">500+</h4>
                  <p className="text-orange-100 text-sm">Projects Completed</p>
                </div>
                <div className="rounded-3xl overflow-hidden bg-gray-200 aspect-[3/4] shadow-xl">
                  <img 
                    src="input_file_2.png" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1000";
                    }}
                    alt="Expert Portrait" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                    referrerPolicy="no-referrer" 
                  />
                </div>
              </motion.div>
            </div>
            
            {/* Additional User Images */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <div className="rounded-3xl overflow-hidden bg-gray-200 aspect-video shadow-lg">
                  <img 
                    src="input_file_3.png" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000";
                    }}
                    alt="Expert Working" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                    referrerPolicy="no-referrer" 
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="rounded-3xl overflow-hidden bg-gray-200 aspect-video shadow-lg">
                  <img 
                    src="input_file_4.png" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1000";
                    }}
                    alt="Expert Studio" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                    referrerPolicy="no-referrer" 
                  />
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-4">Meet Your Expert</div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Crafting Digital <span className="italic">Masterpieces</span> with Passion
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With over a decade of experience in WordPress development and modern web technologies, I help businesses transform their digital presence into a powerful growth engine. My approach combines technical excellence with cinematic design aesthetics.
            </p>
            <div className="space-y-6 mb-10">
              {[
                'Expert WordPress Developers',
                'Advanced Security Protocols',
                'Cutting-edge AI Integrations',
                'Performance-driven Design'
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center text-orange-500">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="font-bold text-gray-800">{item}</span>
                </div>
              ))}
            </div>
            <button className="bg-black text-white px-8 py-4 rounded-2xl font-bold hover:bg-orange-500 transition-all shadow-xl shadow-black/10">
              Download My CV
            </button>
          </motion.div>
        </div>
      </section>



      {/* Creative Portfolio Showcase - Second New Section */}
      <section className="py-32 px-6 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full text-orange-600 text-xs font-bold uppercase tracking-widest mb-6">
                <Layout size={14} />
                <span>Modern Aesthetics</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter leading-tight">
                Where <span className="text-orange-500">Design</span> Meets <br />
                <span className="italic">Performance</span>
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Every pixel is crafted with intention. We don't just build websites; we create digital experiences that resonate with your audience and drive real business results.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="p-6 rounded-3xl bg-gray-50 border border-gray-100">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-orange-500 mb-4">
                    <Code size={24} />
                  </div>
                  <h4 className="font-bold text-lg mb-2">Clean Code</h4>
                  <p className="text-sm text-gray-500">Optimized for speed and scalability.</p>
                </div>
                <div className="p-6 rounded-3xl bg-gray-50 border border-gray-100">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-500 mb-4">
                    <Sparkles size={24} />
                  </div>
                  <h4 className="font-bold text-lg mb-2">AI Ready</h4>
                  <p className="text-sm text-gray-500">Integrating the latest AI technologies.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative z-10 rounded-[60px] overflow-hidden shadow-2xl border-8 border-white bg-gray-100">
                <img 
                  src="input_file_5.png" 
                  alt="Premium Portrait" 
                  className="w-full aspect-[4/5] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-500/10 blur-[60px] rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 blur-[60px] rounded-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-6 bg-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-6"
            >
              <Star size={12} className="text-orange-500" />
              <span>Client Success Stories</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              What Our Clients <span className="text-orange-500">Say</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Real results from real clients across all our services.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Featured Testimonial Slider */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 bg-[#141414] rounded-[40px] p-10 md:p-16 border border-white/5 relative group overflow-hidden"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonialIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 rounded-full text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-10">
                    <Globe size={12} />
                    <span>{testimonials[testimonialIndex].service}</span>
                  </div>
                  
                  <div className="text-orange-500 mb-8">
                    <svg width="40" height="30" viewBox="0 0 40 30" fill="currentColor">
                      <path d="M0 30V15C0 6.71573 6.71573 0 15 0V7.5C10.8579 7.5 7.5 10.8579 7.5 15H15V30H0ZM25 30V15C25 6.71573 31.7157 0 40 0V7.5C35.8579 7.5 32.5 10.8579 32.5 15H40V30H25Z" />
                    </svg>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 leading-snug min-h-[120px]">
                    {testimonials[testimonialIndex].content}
                  </h3>

                  <div className="flex items-center justify-between pt-10 border-t border-white/5">
                    <div className="flex items-center gap-4">
                      <img 
                        src={testimonials[testimonialIndex].avatar} 
                        alt={testimonials[testimonialIndex].name} 
                        className="w-14 h-14 rounded-full object-cover border-2 border-orange-500/20"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <h4 className="text-white font-bold text-lg">{testimonials[testimonialIndex].name}</h4>
                        <p className="text-gray-500 text-sm">{testimonials[testimonialIndex].role}</p>
                        <div className="flex gap-1 text-orange-500 mt-1">
                          {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Pagination Dots */}
              <div className="flex gap-2 mt-12">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setTestimonialIndex(i)}
                    className={cn(
                      "transition-all duration-300 rounded-full",
                      testimonialIndex === i ? "w-6 h-2 bg-orange-500" : "w-2 h-2 bg-white/10 hover:bg-white/20"
                    )}
                  />
                ))}
              </div>
            </motion.div>

            {/* Side Testimonials */}
            <div className="lg:col-span-5 space-y-6">
              {[
                {
                  name: 'Sarah Mitchell',
                  role: 'Owner, Boutique Store Online',
                  content: 'Our site was hacked and we were panicking. DevCraft cleaned everything within 6 hours, secured it completely, and set up monitorin...',
                  service: 'Malware Removal',
                  color: 'text-red-400 bg-red-400/10',
                  avatar: 'https://picsum.photos/seed/sarah/100/100'
                },
                {
                  name: 'James Okafor',
                  role: 'Founder, E-Commerce Brand',
                  content: 'My WooCommerce store had a critical checkout bug costing me thousands daily. DevCraft diagnosed and fixed it in under 2 hours...',
                  service: 'Bug Fixing',
                  color: 'text-orange-400 bg-orange-400/10',
                  avatar: 'https://picsum.photos/seed/james/100/100'
                },
                {
                  name: 'Priya Nair',
                  role: 'Marketing Director, Agency',
                  content: 'Our PageSpeed went from 34 to 96 after DevCraft\'s optimization. Our bounce rate dropped by 60% and Google rankings improved...',
                  service: 'Speed Optimization',
                  color: 'text-yellow-400 bg-yellow-400/10',
                  avatar: 'https://picsum.photos/seed/priya/100/100'
                }
              ].map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#141414] rounded-[32px] p-8 border border-white/5 hover:border-white/10 transition-all group"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" referrerPolicy="no-referrer" />
                      <div>
                        <h4 className="text-white font-bold text-sm">{t.name}</h4>
                        <p className="text-gray-500 text-[10px]">{t.role}</p>
                      </div>
                    </div>
                    <div className={cn("px-3 py-1 rounded-full text-[8px] font-bold uppercase tracking-widest", t.color)}>
                      {t.service}
                    </div>
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">"{t.content}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-gray-500 text-lg">Everything you need to know about our services.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border border-gray-100 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-gray-800">{faq.q}</span>
                  <div className="w-8 h-8 bg-white rounded-lg shadow-sm flex items-center justify-center text-orange-500">
                    {activeFaq === index ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: activeFaq === index ? 'auto' : 0, opacity: activeFaq === index ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-gray-500 leading-relaxed text-sm border-t border-gray-50">
                    {faq.a}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 px-6 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-black rounded-[48px] p-12 md:p-20 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
            <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-orange-500 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] bg-blue-500 blur-[120px] rounded-full" />
          </div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Ready to Transform Your <br /> <span className="text-orange-500">Digital Future?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
              Join hundreds of successful businesses that trust PeachWeb for their web development and automation needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:mdabdullahhossain3467@gmail.com" className="bg-white text-black px-10 py-5 rounded-2xl font-bold text-xl hover:bg-gray-100 transition-all active:scale-95 flex items-center gap-2">
                <Mail size={24} /> Get a Free Quote
              </a>
              <button className="bg-transparent text-white border-2 border-white/20 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all active:scale-95">
                Contact Sales
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
