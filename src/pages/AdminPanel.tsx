import React, { useState, useEffect } from 'react';
import { collection, onSnapshot, query, orderBy, doc, updateDoc, deleteDoc, setDoc, getDoc } from 'firebase/firestore';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { db, auth } from '../lib/firebase';
import { useAuth } from '../contexts/AuthContext';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LayoutDashboard, 
  CreditCard, 
  MessageSquare, 
  Settings as SettingsIcon, 
  LogOut, 
  ChevronRight, 
  Trash2, 
  CheckCircle, 
  Clock,
  DollarSign,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { SERVICES } from '../constants/services';

export default function AdminPanel() {
  const { user, isAdmin, loading } = useAuth();
  const [activeTab, setActiveTab] = useState<'dashboard' | 'payments' | 'pricing' | 'messages'>('dashboard');
  const [messages, setMessages] = useState<any[]>([]);
  const [settings, setSettings] = useState<any>(null);
  const [pricingOverrides, setPricingOverrides] = useState<any>({});

  useEffect(() => {
    if (!isAdmin) return;

    // Listen to messages
    const q = query(collection(db, 'messages'), orderBy('createdAt', 'desc'));
    const unsubMessages = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    // Listen to settings
    const unsubSettings = onSnapshot(doc(db, 'settings', 'global'), (doc) => {
      if (doc.exists()) setSettings(doc.data());
    });

    // Listen to pricing
    const unsubPricing = onSnapshot(collection(db, 'pricing'), (snapshot) => {
      const overrides: any = {};
      snapshot.docs.forEach(doc => {
        overrides[doc.id] = doc.data();
      });
      setPricingOverrides(overrides);
    });

    return () => {
      unsubMessages();
      unsubSettings();
      unsubPricing();
    };
  }, [isAdmin]);

  if (loading) return <div className="min-h-screen bg-black flex items-center justify-center text-white font-sans">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-gray-400 animate-pulse">Verifying Admin Access...</p>
    </div>
  </div>;

  if (!isAdmin) return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center text-white p-6 font-sans">
      <div className="max-w-md w-full bg-[#0a0f1a] p-10 rounded-[40px] border border-white/5 text-center shadow-2xl">
        <div className="w-20 h-20 bg-orange-500/10 text-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-8">
          <ShieldCheck size={40} />
        </div>
        <h1 className="text-3xl font-bold mb-4 tracking-tight">Admin Portal</h1>
        <p className="text-gray-400 mb-10 leading-relaxed">
          This area is restricted to authorized administrators only. Please sign in with your admin account.
        </p>
        
        {!user ? (
          <button 
            onClick={() => {
              const provider = new GoogleAuthProvider();
              signInWithPopup(auth, provider);
            }}
            className="w-full bg-white text-black py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all active:scale-95 flex items-center justify-center gap-3"
          >
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-6 h-6" alt="Google" />
            Sign in with Google
          </button>
        ) : (
          <div className="space-y-6">
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-400 text-sm font-medium">
              Access Denied: {user.email} is not an authorized admin.
            </div>
            <button 
              onClick={() => auth.signOut()}
              className="text-gray-400 hover:text-white text-sm font-bold transition-colors"
            >
              Sign out and try another account
            </button>
          </div>
        )}
      </div>
    </div>
  );

  const updateGateway = async (gateway: string, field: string, value: any) => {
    const newSettings = { ...settings };
    if (!newSettings.paymentGateways) newSettings.paymentGateways = {};
    if (!newSettings.paymentGateways[gateway]) newSettings.paymentGateways[gateway] = {};
    newSettings.paymentGateways[gateway][field] = value;
    
    await setDoc(doc(db, 'settings', 'global'), newSettings);
  };

  const updatePricing = async (serviceId: string, field: string, value: string) => {
    const ref = doc(db, 'pricing', serviceId);
    await setDoc(ref, { [field]: value }, { merge: true });
  };

  const deleteMessage = async (id: string) => {
    if (confirm('Are you sure you want to delete this message?')) {
      await deleteDoc(doc(db, 'messages', id));
    }
  };

  const markAsRead = async (id: string) => {
    await updateDoc(doc(db, 'messages', id), { status: 'read' });
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white flex">
      {/* Sidebar */}
      <div className="w-64 bg-[#0a0f1a] border-r border-white/5 flex flex-col">
        <div className="p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
              <ShieldCheck size={24} />
            </div>
            <span className="text-xl font-bold tracking-tighter">Admin Hub</span>
          </div>

          <nav className="space-y-2">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
              { id: 'payments', label: 'Payments', icon: CreditCard },
              { id: 'pricing', label: 'Pricing', icon: DollarSign },
              { id: 'messages', label: 'Messages', icon: MessageSquare },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  activeTab === tab.id ? 'bg-orange-500 text-white' : 'text-gray-400 hover:bg-white/5'
                }`}
              >
                <tab.icon size={20} />
                <span className="font-bold text-sm">{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-auto p-8">
          <button 
            onClick={() => auth.signOut()}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-all"
          >
            <LogOut size={20} />
            <span className="font-bold text-sm">Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight capitalize">{activeTab} Management</h1>
          <p className="text-gray-400 mt-2">Control your website's core features securely.</p>
        </header>

        <AnimatePresence mode="wait">
          {activeTab === 'dashboard' && (
            <motion.div 
              key="dashboard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <div className="bg-[#0a0f1a] p-8 rounded-3xl border border-white/5">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center">
                    <MessageSquare size={24} />
                  </div>
                  <span className="text-2xl font-bold">{messages.length}</span>
                </div>
                <h3 className="text-gray-400 font-medium">Total Messages</h3>
              </div>
              <div className="bg-[#0a0f1a] p-8 rounded-3xl border border-white/5">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-green-500/10 text-green-500 rounded-xl flex items-center justify-center">
                    <Zap size={24} />
                  </div>
                  <span className="text-2xl font-bold">{SERVICES.length}</span>
                </div>
                <h3 className="text-gray-400 font-medium">Active Services</h3>
              </div>
              <div className="bg-[#0a0f1a] p-8 rounded-3xl border border-white/5">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-orange-500/10 text-orange-500 rounded-xl flex items-center justify-center">
                    <ShieldCheck size={24} />
                  </div>
                  <span className="text-2xl font-bold">Secure</span>
                </div>
                <h3 className="text-gray-400 font-medium">System Status</h3>
              </div>
            </motion.div>
          )}

          {activeTab === 'payments' && (
            <motion.div 
              key="payments"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              {['stripe', 'paypal', 'checkout2'].map((gw) => (
                <div key={gw} className="bg-[#0a0f1a] p-8 rounded-3xl border border-white/5">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-xl font-bold capitalize">{gw} Integration</h3>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="sr-only peer"
                        checked={settings?.paymentGateways?.[gw]?.enabled || false}
                        onChange={(e) => updateGateway(gw, 'enabled', e.target.checked)}
                      />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                    </label>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                        {gw === 'stripe' ? 'Public Key' : gw === 'paypal' ? 'Client ID' : 'Merchant ID'}
                      </label>
                      <input 
                        type="text"
                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:border-orange-500 outline-none transition-all"
                        value={settings?.paymentGateways?.[gw]?.[gw === 'stripe' ? 'publicKey' : gw === 'paypal' ? 'clientId' : 'merchantId'] || ''}
                        onChange={(e) => updateGateway(gw, gw === 'stripe' ? 'publicKey' : gw === 'paypal' ? 'clientId' : 'merchantId', e.target.value)}
                        placeholder={`Enter ${gw} credentials`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'pricing' && (
            <motion.div 
              key="pricing"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 gap-8"
            >
              {SERVICES.map((service) => (
                <div key={service.id} className="bg-[#0a0f1a] p-8 rounded-3xl border border-white/5 flex flex-wrap items-center gap-8">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold">{service.title}</h3>
                    <p className="text-gray-400 text-sm">{service.id}</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-gray-400 uppercase">Monthly ($)</label>
                      <input 
                        type="text"
                        className="w-24 bg-black/50 border border-white/10 rounded-xl px-4 py-2 focus:border-orange-500 outline-none"
                        value={pricingOverrides[service.id]?.monthlyPrice || service.monthlyPrice}
                        onChange={(e) => updatePricing(service.id, 'monthlyPrice', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-gray-400 uppercase">Project ($)</label>
                      <input 
                        type="text"
                        className="w-24 bg-black/50 border border-white/10 rounded-xl px-4 py-2 focus:border-orange-500 outline-none"
                        value={pricingOverrides[service.id]?.perProjectPrice || service.perProjectPrice}
                        onChange={(e) => updatePricing(service.id, 'perProjectPrice', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-gray-400 uppercase">Checkout Code</label>
                      <input 
                        type="text"
                        className="w-32 bg-black/50 border border-white/10 rounded-xl px-4 py-2 focus:border-orange-500 outline-none"
                        value={pricingOverrides[service.id]?.checkoutCode || service.checkoutCode || ''}
                        onChange={(e) => updatePricing(service.id, 'checkoutCode', e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'messages' && (
            <motion.div 
              key="messages"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {messages.length === 0 ? (
                <div className="text-center py-20 bg-[#0a0f1a] rounded-3xl border border-white/5">
                  <MessageSquare className="mx-auto mb-4 text-gray-600" size={48} />
                  <p className="text-gray-400">No messages yet.</p>
                </div>
              ) : (
                messages.map((msg) => (
                  <div key={msg.id} className={`bg-[#0a0f1a] p-8 rounded-3xl border ${msg.status === 'new' ? 'border-orange-500/30' : 'border-white/5'} transition-all`}>
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-xl font-bold">{msg.name}</h3>
                          {msg.status === 'new' && (
                            <span className="bg-orange-500 text-white text-[10px] px-2 py-0.5 rounded-full font-black">NEW</span>
                          )}
                        </div>
                        <p className="text-orange-500 font-medium">{msg.email}</p>
                      </div>
                      <div className="flex gap-2">
                        {msg.status === 'new' && (
                          <button 
                            onClick={() => markAsRead(msg.id)}
                            className="p-2 hover:bg-green-500/10 text-green-500 rounded-lg transition-all"
                            title="Mark as Read"
                          >
                            <CheckCircle size={20} />
                          </button>
                        )}
                        <button 
                          onClick={() => deleteMessage(msg.id)}
                          className="p-2 hover:bg-red-500/10 text-red-500 rounded-lg transition-all"
                          title="Delete"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </div>
                    <div className="bg-black/30 p-6 rounded-2xl text-gray-300 leading-relaxed mb-4">
                      {msg.message}
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                      <Clock size={14} />
                      {new Date(msg.createdAt?.toDate()).toLocaleString()}
                    </div>
                  </div>
                ))
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
