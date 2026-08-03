import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Zap, Sparkles, Shield, Rocket } from 'lucide-react';
import { cn } from '../lib/utils';
import { collection, onSnapshot, doc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { useNavigate } from 'react-router-dom';
import PaymentModal from '../components/PaymentModal';

export default function Pricing() {
  const [pricingType, setPricingType] = useState<'monthly' | 'project'>('monthly');
  const [pricingOverrides, setPricingOverrides] = useState<any>({});
  const [settings, setSettings] = useState<any>(null);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Listen to settings
    const unsubSettings = onSnapshot(doc(db, 'settings', 'global'), (doc) => {
      if (doc.exists()) setSettings(doc.data());
    });

    // Listen to pricing overrides
    const unsubPricing = onSnapshot(collection(db, 'pricing'), (snapshot) => {
      const overrides: any = {};
      snapshot.docs.forEach(doc => {
        overrides[doc.id] = doc.data();
      });
      setPricingOverrides(overrides);
    });

    return () => {
      unsubSettings();
      unsubPricing();
    };
  }, []);

  const handleGetStarted = (plan: any) => {
    const price = pricingType === 'monthly' 
      ? (pricingOverrides[plan.name.toLowerCase()]?.monthlyPrice || plan.monthly) 
      : (pricingOverrides[plan.name.toLowerCase()]?.perProjectPrice || plan.project);
    
    setSelectedPlan({ ...plan, currentPrice: price });
    setIsPaymentOpen(true);
  };

  const plans = [
    {
      name: 'Maintenance',
      monthly: '99',
      project: '199',
      icon: Shield,
      color: 'blue',
      features: ['24/7 Monitoring', 'Security Hardening', 'Weekly Backups', 'Malware Cleanup', 'Priority Support']
    },
    {
      name: 'Growth',
      monthly: '249',
      project: '499',
      icon: Zap,
      color: 'orange',
      popular: true,
      features: ['Everything in Maintenance', 'Speed Optimization', 'SEO Audit', 'Custom Development (2h)', 'Monthly Reports']
    },
    {
      name: 'Enterprise',
      monthly: '499',
      project: '999',
      icon: Rocket,
      color: 'purple',
      features: ['Everything in Growth', 'Dedicated Manager', 'Unlimited Support', 'Custom AI Solutions', 'API Integrations']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-[#0a0f1a] text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-600/10 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-orange-500 text-xs font-bold uppercase tracking-widest mb-8"
          >
            <Sparkles size={14} />
            <span>Pricing Plans</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter"
          >
            Simple <span className="text-orange-500 italic">Transparent</span> Pricing
          </motion.h1>
          
          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={cn("text-sm font-bold transition-colors", pricingType === 'monthly' ? "text-white" : "text-gray-500")}>Monthly</span>
            <button 
              onClick={() => setPricingType(prev => prev === 'monthly' ? 'project' : 'monthly')}
              className="w-16 h-8 bg-white/10 rounded-full relative p-1 transition-all"
            >
              <motion.div 
                animate={{ x: pricingType === 'monthly' ? 0 : 32 }}
                className="w-6 h-6 bg-orange-500 rounded-full shadow-lg"
              />
            </button>
            <span className={cn("text-sm font-bold transition-colors", pricingType === 'project' ? "text-white" : "text-gray-500")}>Per Project</span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "relative p-10 rounded-[48px] border transition-all duration-500",
                  plan.popular ? "bg-[#0a0f1a] text-white border-white/10 shadow-2xl scale-105 z-10" : "bg-white text-gray-900 border-gray-100 shadow-xl"
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                
                <div className={cn(
                  "w-14 h-14 rounded-2xl flex items-center justify-center mb-8",
                  plan.popular ? "bg-white/10 text-orange-500" : "bg-orange-50 text-orange-500"
                )}>
                  <plan.icon size={28} />
                </div>

                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-bold">
                    ${pricingType === 'monthly' 
                      ? (pricingOverrides[plan.name.toLowerCase()]?.monthlyPrice || plan.monthly) 
                      : (pricingOverrides[plan.name.toLowerCase()]?.perProjectPrice || plan.project)}
                  </span>
                  <span className={cn("text-sm font-medium", plan.popular ? "text-gray-400" : "text-gray-500")}>
                    /{pricingType === 'monthly' ? 'mo' : 'project'}
                  </span>
                </div>

                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-orange-500 shrink-0" />
                      <span className={cn("text-sm font-medium", plan.popular ? "text-gray-300" : "text-gray-600")}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => handleGetStarted(plan)}
                  className={cn(
                    "w-full py-5 rounded-2xl font-bold text-lg transition-all active:scale-95",
                    plan.popular ? "bg-orange-500 text-white hover:bg-orange-600" : "bg-black text-white hover:bg-gray-800"
                  )}
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selectedPlan && (
        <PaymentModal 
          isOpen={isPaymentOpen}
          onClose={() => setIsPaymentOpen(false)}
          planName={selectedPlan.name}
          price={selectedPlan.currentPrice}
          onSuccess={() => {
            setIsPaymentOpen(false);
            alert('Payment Successful! Thank you for choosing DevCraft.');
            navigate('/contact');
          }}
        />
      )}
    </div>
  );
}
