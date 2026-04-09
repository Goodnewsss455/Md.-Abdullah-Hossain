import { motion } from 'motion/react';
import { SERVICES } from '../constants/services';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Services() {
  return (
    <div className="min-h-screen bg-[#0a0f1a] text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-orange-600/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-orange-500 text-xs font-bold uppercase tracking-widest mb-8"
          >
            <Zap size={14} />
            <span>Our Expertise</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter"
          >
            Premium <span className="text-orange-500 italic">Digital</span> Services
          </motion.h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-xl leading-relaxed">
            We combine cinematic aesthetics with technical precision to build WordPress solutions that don't just work—they inspire.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative h-[500px] rounded-[40px] overflow-hidden border border-white/10 bg-white/5"
                >
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={service.imageUrl} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-30 group-hover:opacity-50"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-[#0a0f1a]/60 to-transparent" />
                  </div>

                  <div className="absolute inset-0 z-10 p-10 flex flex-col justify-end">
                    <div className="mb-6 transform transition-transform duration-500 group-hover:-translate-y-4">
                      <div className={cn(
                        "w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center mb-6",
                        colorClasses[service.color]
                      )}>
                        <service.icon size={28} />
                      </div>
                      <h3 className="text-3xl font-bold mb-4 tracking-tight">{service.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {service.description}
                      </p>
                      
                      <Link 
                        to={`/service/${service.id}`}
                        className="inline-flex items-center gap-2 text-white font-bold group/btn"
                      >
                        Explore Service 
                        <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-2" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
