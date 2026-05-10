'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowRight } from 'lucide-react';

const ContactPage = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Partnership Inquiry',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: 'Partnership Inquiry', message: '' });
      } else {
        setErrorMessage(data.message || 'Submission failed');
        setStatus('error');
      }
    } catch (err) {
      setErrorMessage('Network connection failure');
      setStatus('error');
    }
  };

  return (
    <main className="min-h-screen pt-48 pb-32 bg-transparent relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-electric-blue/10 blur-[120px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.1, 0.05],
            x: [0, -50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-soft-pink/5 blur-[150px] rounded-full" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <header className="mb-24">
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "100%" }}
            transition={{ duration: 1, ease: "circOut" }}
            className="flex items-center gap-4 mb-6 overflow-hidden"
          >
            <div className="h-[2px] w-12 bg-electric-blue shrink-0" />
            <span className="text-electric-blue font-black text-[10px] uppercase tracking-[0.6em] whitespace-nowrap">Direct Connect</span>
          </motion.div>
          
          <div className="overflow-visible pt-10">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-7xl sm:text-9xl font-black uppercase tracking-[-0.04em] leading-[1.0] text-white"
            >
              <span className="block pb-6">Direct</span>
              <span className="text-white/10 italic pb-6 block">Inquiry</span>
            </motion.h1>
          </div>
        </header>

        <div className="grid lg:grid-cols-12 gap-20 lg:gap-32 items-start">
          {/* Left: Contact Info & Philosophy */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="lg:col-span-5 space-y-16"
          >
            <div className="space-y-12">
              <p className="text-2xl sm:text-3xl text-text-secondary leading-relaxed font-medium">
                Scaling high-performance ventures requires <span className="text-white">precision</span> and <span className="text-white">collaboration</span>.
              </p>
              
              <div className="space-y-10">
                {[
                  { icon: <MapPin size={22} />, label: 'Location', val: 'Nairobi, Kenya', color: 'text-electric-blue' },
                  { icon: <Mail size={22} />, label: 'Executive Email', val: 'info@manuuspaces.com', color: 'text-white' },
                  { icon: <Phone size={22} />, label: 'Private Line', val: '+254 712 240000', color: 'text-soft-pink' }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-8 group"
                  >
                    <div className={`w-14 h-14 rounded-2xl glass-panel flex items-center justify-center ${item.color} group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border-white/5 shadow-xl`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 mb-1">{item.label}</p>
                      <p className="text-xl font-black tracking-tight text-white/80 group-hover:text-white transition-colors">{item.val}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="pt-16 border-t border-white/5"
            >
              <p className="text-sm font-black uppercase tracking-[0.3em] text-white/40 mb-8">Engagement Scope</p>
              <div className="grid grid-cols-1 gap-4">
                {['International Venture Development', 'Executive Board Advisory', 'Capital Integration Partnerships', 'Commercial Ecosystem Strategy'].map((scope, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 text-text-secondary font-medium group transition-colors hover:text-white"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-electric-blue/40 group-hover:bg-electric-blue transition-colors" />
                    {scope}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right: Interactive Form */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="lg:col-span-7"
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="h-full min-h-[600px] flex flex-col items-center justify-center p-20 rounded-[60px] glass-panel border-green-500/20 text-center shadow-[0_0_100px_-20px_rgba(34,197,94,0.1)]"
                >
                  <motion.div 
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="w-24 h-24 rounded-full bg-green-500/10 flex items-center justify-center mb-8"
                  >
                    <CheckCircle2 size={48} className="text-green-500" />
                  </motion.div>
                  <h3 className="text-4xl font-black uppercase tracking-tighter text-white mb-4">Inquiry Logged</h3>
                  <p className="text-xl text-text-secondary mb-12 max-w-sm">The executive office has received your dispatch. Expect a formal response within 24 operational hours.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="group flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-white/40 hover:text-white transition-all px-8 py-3 rounded-full border border-white/5 hover:border-white/20"
                  >
                    New Dispatch
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-12 sm:p-20 rounded-[60px] glass-panel relative overflow-hidden border-white/[0.03] shadow-2xl group/form"
                >
                  {/* Subtle Interactive Light Tracking */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
                  
                  <div className="sm:col-span-1 space-y-3 relative z-10">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/20 ml-2">Principal Name</label>
                    <input 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      type="text" 
                      placeholder="Odhiambo Okoth" 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-white placeholder:text-white/10 focus:outline-none focus:border-electric-blue focus:bg-white/[0.08] transition-all duration-500 hover:border-white/20"
                    />
                  </div>
                  <div className="sm:col-span-1 space-y-3 relative z-10">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/20 ml-2">Secure Channel</label>
                    <input 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      type="text" 
                      placeholder="Email or LinkedIn" 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-white placeholder:text-white/10 focus:outline-none focus:border-electric-blue focus:bg-white/[0.08] transition-all duration-500 hover:border-white/20"
                    />
                  </div>
                  <div className="sm:col-span-2 space-y-3 relative z-10">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/20 ml-2">Collaborative Focus</label>
                    <div className="relative">
                      <select 
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-white focus:outline-none focus:border-electric-blue focus:bg-white/[0.08] transition-all duration-500 appearance-none cursor-pointer hover:border-white/20"
                      >
                        <option className="bg-obsidian">Partnership Inquiry</option>
                        <option className="bg-obsidian">Investment Opportunity</option>
                        <option className="bg-obsidian">Venture Development</option>
                        <option className="bg-obsidian">Press & Media</option>
                      </select>
                      <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none text-white/20 group-hover/form:text-white transition-colors">
                        <ArrowRight size={16} className="rotate-90" />
                      </div>
                    </div>
                  </div>
                  <div className="sm:col-span-2 space-y-3 relative z-10">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/20 ml-2">Executive Summary</label>
                    <textarea 
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={5} 
                      placeholder="Define the scope of synergy..." 
                      className="w-full bg-white/5 border border-white/10 rounded-[32px] px-8 py-6 text-white placeholder:text-white/10 focus:outline-none focus:border-electric-blue focus:bg-white/[0.08] transition-all duration-500 resize-none hover:border-white/20"
                    />
                  </div>

                  {status === 'error' && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="sm:col-span-2 text-[10px] font-black uppercase tracking-widest text-red-500 text-center"
                    >
                      {errorMessage}
                    </motion.div>
                  )}

                  <div className="sm:col-span-2 mt-6 relative z-10">
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={status === 'loading'}
                      type="submit" 
                      className="w-full flex items-center justify-center gap-4 bg-white text-black py-6 rounded-2xl font-black uppercase tracking-[0.25em] hover:bg-electric-blue hover:text-white disabled:opacity-50 transition-all duration-700 group shadow-[0_40px_80px_-20px_rgba(255,255,255,0.15)]"
                    >
                      {status === 'loading' ? 'Transmitting...' : 'Dispatch Inquiry'}
                      <Send size={18} strokeWidth={3} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-electric-blue group-hover:text-white" />
                    </motion.button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
