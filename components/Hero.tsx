
import React from 'react';
import { ArrowRight, Rocket, Shield, Zap, Sparkles } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

export const Hero: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-brand-navy transition-colors duration-500 pt-20">
      {/* Decorative Radial Backgrounds */}
      <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-blue-50/50 dark:bg-blue-900/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-cyan-50/50 dark:bg-cyan-900/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-10"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-blue-600/5 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 px-5 py-2 rounded-full border border-blue-600/10 backdrop-blur-sm">
              <Zap size={14} className="fill-current" />
              <span className="text-[11px] font-black tracking-[0.2em] uppercase">Innovation Redefined</span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1 
                variants={itemVariants} 
                className="text-6xl sm:text-7xl lg:text-8xl font-black leading-[0.95] dark:text-white text-[#0a1a31] tracking-tighter"
              >
                Unlocking <br />
                <span className="text-blue-600">Potential</span>, <br />
                Delivering <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400">Results</span>
              </motion.h1>
            </div>

            <motion.p variants={itemVariants} className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 leading-relaxed max-w-lg font-medium">
              At Midas Touch Consult Group, we blend creativity with engineering to solve complex business challenges with elegant, scalable digital artifacts.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection('#contact')}
                className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-600/30 transition-all"
              >
                Launch Project <ArrowRight size={18} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection('#portfolio')}
                className="bg-white dark:bg-brand-surface text-gray-900 dark:text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest border border-gray-100 dark:border-white/5 hover:border-blue-600/30 transition-all shadow-sm"
              >
                View Artifacts
              </motion.button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-8 pt-6 text-xs text-gray-400 dark:text-gray-500 font-bold uppercase tracking-[0.15em]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-px bg-gray-200 dark:bg-gray-800" />
                <Rocket size={14} className="text-blue-500" /> 
                Rapid Deployment
              </div>
              <div className="flex items-center gap-2.5">
                <Shield size={14} className="text-blue-500" /> 
                Enterprise Security
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-[4rem] overflow-hidden border border-white/20 shadow-2xl">
               <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent" />
               <img 
                 src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1000" 
                 alt="High Fidelity Digital Engineering" 
                 className="w-full h-[650px] object-cover hover:scale-105 transition-transform duration-1000"
               />
            </div>
            
            {/* Floating Glassmorphism Cards */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 p-8 bg-white/10 dark:bg-black/20 backdrop-blur-2xl rounded-[3rem] border border-white/20 shadow-2xl z-20"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg shadow-blue-600/20">
                <Sparkles size={24} />
              </div>
              <div className="text-3xl font-black text-blue-600 dark:text-white mb-1">99.9%</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-gray-500 dark:text-gray-400">System Uptime</div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-12 -left-12 p-10 bg-white dark:bg-brand-surface rounded-[4rem] shadow-2xl border border-gray-100 dark:border-white/5 z-20 flex items-center gap-6"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white dark:border-brand-surface bg-gray-200 overflow-hidden shadow-sm">
                    <img src={`https://i.pravatar.cc/100?img=${i + 50}`} alt="Team member" />
                  </div>
                ))}
              </div>
              <div>
                <div className="text-xl font-bold dark:text-white">Active Talents</div>
                <div className="text-xs font-medium text-blue-600">Collaborating Worldwide</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
