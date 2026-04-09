import { useParams, Link, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../constants/services';
import Lottie from 'lottie-react';
import { ArrowLeft, CheckCircle2, MessageSquare, ShieldCheck, Zap, Clock } from 'lucide-react';
import { cn } from '../lib/utils';

const LottieIcon = ({ url, className, fallback: FallbackIcon }: { url: string, className?: string, fallback?: any }) => {
  const [animationData, setAnimationData] = useState<any>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        const contentType = res.headers.get('content-type');
        if (contentType && !contentType.includes('application/json')) {
          throw new Error('Not a JSON response');
        }
        return res.json();
      })
      .then(data => setAnimationData(data))
      .catch(err => {
        setError(true);
      });
  }, [url]);

  if (error || !animationData) {
    return FallbackIcon ? <FallbackIcon size={48} className={className} /> : <div className={className} />;
  }

  return <Lottie animationData={animationData} loop={true} className={className} />;
};

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find((s) => s.id === id);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  const colorMap: Record<string, { bg: string, text: string, border: string, fill: string, glow: string }> = {
    blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-100', fill: 'bg-blue-500', glow: 'shadow-blue-500/20' },
    red: { bg: 'bg-red-50', text: 'text-red-600', border: 'border-red-100', fill: 'bg-red-500', glow: 'shadow-red-500/20' },
    orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-100', fill: 'bg-orange-500', glow: 'shadow-orange-500/20' },
    yellow: { bg: 'bg-yellow-50', text: 'text-yellow-600', border: 'border-yellow-100', fill: 'bg-yellow-500', glow: 'shadow-yellow-500/20' },
    purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-100', fill: 'bg-purple-500', glow: 'shadow-purple-500/20' },
    emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-100', fill: 'bg-emerald-500', glow: 'shadow-emerald-500/20' },
  };

  const colors = colorMap[service.color] || colorMap.blue;

  return (
    <div className="bg-white">
      {/* Cinematic Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-[#0a0f1a] text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src={service.imageUrl} 
            className="w-full h-full object-cover opacity-20 blur-sm scale-110" 
            alt="" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a] via-[#0a0f1a]/80 to-white" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="py-8 mb-12">
            <Link to="/services" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors font-bold uppercase tracking-widest text-xs">
              <ArrowLeft size={16} /> Back to Services
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className={cn(
                "w-20 h-20 rounded-3xl flex items-center justify-center mb-8 backdrop-blur-xl border border-white/10 relative group",
                colors.bg.replace('bg-', 'bg-white/10 '),
                colors.text.replace('text-', 'text-'),
                colors.glow
              )}>
                <div className="absolute inset-0 bg-white/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
                <service.icon size={40} className="relative z-10" />
              </div>
              <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-tight">
                {service.title.split(' ').map((word, i) => (
                  <span key={i} className={i === service.title.split(' ').length - 1 ? "text-[#ff6b6b] italic" : ""}>{word} </span>
                ))}
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed mb-10 max-w-xl">
                {service.fullDescription}
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#ff6b6b] text-white px-10 py-5 rounded-2xl font-bold hover:opacity-90 transition-all active:scale-95 shadow-2xl shadow-red-500/40 relative overflow-hidden group">
                  <span className="relative z-10">Get Started Now</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </button>
                <button className="bg-white/5 backdrop-blur-md border border-white/10 text-white px-10 py-5 rounded-2xl font-bold hover:bg-white/10 transition-all active:scale-95">
                  View Portfolio
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-blue-500/20 blur-[120px] rounded-full animate-pulse" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none" />
              <LottieIcon url={service.lottieUrl} className="w-full h-full relative z-10" fallback={service.icon} />
            </motion.div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-20 relative z-20 mb-32">
          {service.features.map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-2xl hover:translate-y-[-10px] transition-all duration-500 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700" />
              <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-8 relative z-10", colors.bg, colors.text)}>
                <CheckCircle2 size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">{feature}</h3>
              <p className="text-gray-500 leading-relaxed relative z-10">
                Premium implementation of {feature.toLowerCase()} using industry best practices and cutting-edge technology.
              </p>
            </motion.div>
          ))}
        </div>

        {/* Visual Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[48px] overflow-hidden h-[400px] relative group"
          >
            <img 
              src={`https://picsum.photos/seed/${service.id}1/800/600`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              alt="Showcase 1"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
              <p className="text-white font-bold text-xl">Precision Engineering</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[48px] overflow-hidden h-[400px] relative group"
          >
            <img 
              src={`https://picsum.photos/seed/${service.id}2/800/600`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              alt="Showcase 2"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
              <p className="text-white font-bold text-xl">Seamless Integration</p>
            </div>
          </motion.div>
        </div>

        {/* Our Process Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Our <span className="text-orange-500 italic">Process</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              A systematic approach to delivering excellence, ensuring every detail is perfectly crafted.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-8 rounded-3xl bg-gray-50 border border-gray-100 group hover:bg-white hover:shadow-2xl transition-all duration-500"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-xl shadow-xl group-hover:bg-orange-500 transition-colors">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-4 mt-4">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gray-50 rounded-[64px] p-12 md:p-24 mb-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 blur-3xl rounded-full" />
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Why Choose Our <span className="text-orange-500 italic">{service.title}</span>?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              We provide industry-leading expertise and dedicated support for every project, ensuring your digital success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {[
              { icon: ShieldCheck, title: 'Secure & Reliable', desc: 'Enterprise-grade security for your peace of mind.' },
              { icon: Zap, title: 'Lightning Fast', desc: 'Optimized performance for the best user experience.' },
              { icon: Clock, title: '24/7 Support', desc: 'Our experts are always here to help you.' },
              { icon: MessageSquare, title: 'Clear Communication', desc: 'Regular updates and transparent processes.' },
            ].map((item, index) => (
              <div key={item.title} className="text-center group">
                <div className="w-20 h-20 bg-white rounded-3xl shadow-sm flex items-center justify-center mx-auto mb-6 text-orange-500 group-hover:scale-110 transition-transform duration-500">
                  <item.icon size={36} />
                </div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-5xl mx-auto mb-32">
          <div className="bg-white p-12 md:p-20 rounded-[64px] border border-gray-100 shadow-2xl relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-2 bg-orange-500" />
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Request a Consultation</h2>
              <p className="text-gray-500 text-lg">Tell us about your project and we'll provide a custom strategy.</p>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-sm font-bold text-gray-700 ml-2">Full Name</label>
                <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-8 py-5 focus:outline-none focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 transition-all" placeholder="John Doe" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-bold text-gray-700 ml-2">Email Address</label>
                <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-8 py-5 focus:outline-none focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 transition-all" placeholder="john@example.com" />
              </div>
              <div className="md:col-span-2 space-y-3">
                <label className="text-sm font-bold text-gray-700 ml-2">Project Details</label>
                <textarea rows={5} className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-8 py-5 focus:outline-none focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 transition-all" placeholder="Tell us about your project goals..." />
              </div>
              <div className="md:col-span-2">
                <button type="submit" className="w-full bg-[#ff6b6b] text-white py-6 rounded-2xl font-bold text-xl hover:opacity-90 transition-all active:scale-[0.98] shadow-2xl shadow-red-500/20">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function Sparkles({ className, size }: { className?: string, size?: number }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size || 24} 
      height={size || 24} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
      <path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/>
    </svg>
  );
}
