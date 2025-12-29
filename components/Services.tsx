
import React from 'react';
import { Palette, BarChart3, FileText, Smartphone, Cog, Briefcase } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

export const Services: React.FC = () => {
  const list = [
    { icon: <Palette />, title: "Graphic Design", desc: "Crafting visual identities that leave a mark.", color: "from-blue-500 to-indigo-600" },
    { icon: <Briefcase />, title: "Project Management", desc: "Agile delivery with structured workflows.", color: "from-purple-500 to-pink-600" },
    { icon: <BarChart3 />, title: "Data Analysis", desc: "Turning raw numbers into strategic growth.", color: "from-emerald-500 to-teal-600" },
    { icon: <FileText />, title: "Content Writing", desc: "Engaging copy and research-driven narratives.", color: "from-orange-500 to-red-600" },
    { icon: <Smartphone />, title: "Software Development", desc: "Robust web and mobile engineering solutions.", color: "from-sky-500 to-blue-600" },
    { icon: <Cog />, title: "Integrations", desc: "Seamless system bridges and API excellence.", color: "from-amber-500 to-yellow-600" }
  ];

  // Fixed: Added explicit Variants type to avoid staggerChildren property errors
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

  // Fixed: Added explicit Variants type to fix number[] vs [number, number, number, number] inference for 'ease'
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1] 
      } 
    }
  };

  return (
    <section id="services" className="py-24 bg-slate-50 dark:bg-brand-navy transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold dark:text-white text-gray-900 mb-4 tracking-tight"
          >
            Our Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg font-medium"
          >
            Comprehensive technology solutions designed to accelerate your journey.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {list.map((s, i) => (
            <motion.div 
              key={i} 
              variants={cardVariants}
              whileHover={{ 
                y: -12, 
                transition: { duration: 0.3 } 
              }}
              className="p-10 rounded-[3rem] bg-white dark:bg-brand-surface border border-gray-100 dark:border-white/5 transition-all hover:shadow-2xl hover:border-blue-600/30 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-600/5 to-transparent rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-700" />
              
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} text-white flex items-center justify-center mb-8 shadow-lg shadow-blue-600/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold dark:text-white text-gray-900 mb-4 tracking-tight relative z-10">{s.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 relative z-10">{s.desc}</p>
              
              <motion.button 
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-black text-xs uppercase tracking-[0.2em] relative z-10"
              >
                Explore More <span className="text-lg">→</span>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
