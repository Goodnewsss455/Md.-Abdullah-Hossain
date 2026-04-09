import { motion } from 'motion/react';
import { Shield, Target, Rocket, Zap, Users, Award } from 'lucide-react';
import Lottie from 'lottie-react';
import { useState, useEffect } from 'react';

const LottieIcon = ({ url, className }: { url: string, className?: string }) => {
  const [animationData, setAnimationData] = useState<any>(null);
  useEffect(() => {
    fetch(url).then(res => res.json()).then(data => setAnimationData(data)).catch(() => {});
  }, [url]);
  if (!animationData) return <div className={className} />;
  return <Lottie animationData={animationData} loop={true} className={className} />;
};

export default function About() {
  const stats = [
    { label: 'Projects Completed', value: '250+', icon: Target },
    { label: 'Happy Clients', value: '180+', icon: Award },
    { label: 'Years Experience', value: '5+', icon: Rocket },
    { label: 'Support Response', value: '< 2h', icon: Zap },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-[#0a0f1a] text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-600/10 to-transparent" />
          <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-orange-600/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-orange-500 text-xs font-bold uppercase tracking-widest mb-8">
                <Users size={14} />
                <span>Our Story</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-tight">
                Crafting <span className="text-orange-500 italic">Digital</span> Excellence
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed mb-10 max-w-xl">
                We are a team of passionate developers and designers dedicated to pushing the boundaries of what's possible in the WordPress ecosystem.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative aspect-square"
            >
              <LottieIcon url="https://assets3.lottiefiles.com/packages/lf20_qpwb7v.json" className="w-full h-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <stat.icon size={24} />
                </div>
                <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
                <p className="text-gray-500 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-[48px] overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                alt="Our Team" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <div className="space-y-10">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Driven by <span className="text-orange-500">Innovation</span> and Integrity</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded with a vision to simplify complex web challenges, DevCraft has grown into a premier digital agency. We believe in transparency, technical precision, and building long-term partnerships with our clients.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                  <Shield className="text-blue-500 mb-4" size={32} />
                  <h4 className="font-bold mb-2">Security First</h4>
                  <p className="text-sm text-gray-500">We prioritize the safety of your digital assets above all else.</p>
                </div>
                <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                  <Zap className="text-yellow-500 mb-4" size={32} />
                  <h4 className="font-bold mb-2">Performance Driven</h4>
                  <p className="text-sm text-gray-500">Every line of code is optimized for speed and efficiency.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
