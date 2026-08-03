import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CreditCard, ShieldCheck, Lock, Globe } from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
  price: string;
  onSuccess: () => void;
}

export default function PaymentModal({ isOpen, onClose, planName, price, onSuccess }: PaymentModalProps) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoading(false);
    onSuccess();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-xl bg-white rounded-[40px] shadow-2xl overflow-hidden font-sans"
        >
          {/* Header */}
          <div className="bg-[#0a0f1a] p-8 text-white relative">
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center">
                <CreditCard size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Secure Checkout</h2>
                <p className="text-gray-400 text-sm">Professional Payment Processing</p>
              </div>
            </div>
            <div className="flex justify-between items-end mt-8">
              <div>
                <p className="text-gray-400 text-xs uppercase font-bold tracking-widest mb-1">Selected Plan</p>
                <p className="text-xl font-bold">{planName}</p>
              </div>
              <div className="text-right">
                <p className="text-gray-400 text-xs uppercase font-bold tracking-widest mb-1">Total Amount</p>
                <p className="text-3xl font-bold text-orange-500">${price}</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Email Address</label>
                    <input 
                      required
                      type="email"
                      placeholder="alex@example.com"
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-orange-500 transition-all"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Cardholder Name</label>
                  <input 
                    required
                    type="text"
                    placeholder="Alex Johnson"
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-orange-500 transition-all"
                    value={formData.cardName}
                    onChange={e => setFormData({...formData, cardName: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Card Number</label>
                  <div className="relative">
                    <input 
                      required
                      type="text"
                      placeholder="0000 0000 0000 0000"
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-orange-500 transition-all pl-14"
                      value={formData.cardNumber}
                      onChange={e => setFormData({...formData, cardNumber: e.target.value})}
                    />
                    <CreditCard className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Expiry Date</label>
                    <input 
                      required
                      type="text"
                      placeholder="MM/YY"
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-orange-500 transition-all"
                      value={formData.expiry}
                      onChange={e => setFormData({...formData, expiry: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">CVV</label>
                    <div className="relative">
                      <input 
                        required
                        type="password"
                        placeholder="***"
                        maxLength={3}
                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-orange-500 transition-all"
                        value={formData.cvv}
                        onChange={e => setFormData({...formData, cvv: e.target.value})}
                      />
                      <Lock className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    </div>
                  </div>
                </div>
              </div>

              <button 
                disabled={loading}
                className="w-full bg-orange-500 text-white py-5 rounded-2xl font-bold text-lg hover:bg-orange-600 transition-all active:scale-[0.98] shadow-xl shadow-orange-500/20 flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {loading ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <ShieldCheck size={20} />
                    Pay Now
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-6 pt-4 border-t border-gray-50">
                <div className="flex items-center gap-2 text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                  <Lock size={12} />
                  SSL Encrypted
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                  <Globe size={12} />
                  Global Secure
                </div>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
