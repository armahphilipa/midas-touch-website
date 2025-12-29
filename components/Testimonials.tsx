
import React from 'react';
import { Quote } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

export const Testimonials: React.FC = () => {
  const reviews = [
    { name: "Mr. Asamoah", role: "Godye", text: "A well-designed graphic from your consultation. Rapid timeline phase system and a good transition from abstract ideas to magical visuals. Very impactful work" },
    { name: "Mr. Kesse", role: "KESS Myoskeletal", text: "Your proposal draft was very thoughtful I had a welcome feedback with precision. They laid the link between me and my partners My partnership with the company was through your responsive proposal." },
    { name: "Good News Charismatic Church", role: "GNCC", text: "Midas Touch truly has the touch. They transformed our imaginations into reality in record time." }
  ];

  // Fixed: Added explicit Variants type
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  // Fixed: Added explicit Variants type to avoid string inference errors for 'ease'
  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="testimonials" className="py-24 bg-slate-50 dark:bg-brand-navy transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight"
          >
            Client Voices
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 dark:text-gray-400 font-medium"
          >
            Authentic feedback from our global partners.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {reviews.map((r, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="p-10 bg-white dark:bg-brand-surface rounded-[3rem] shadow-sm border border-gray-100 dark:border-white/5 relative group transition-all hover:shadow-2xl"
            >
              <Quote className="absolute top-10 right-10 text-blue-600/10 group-hover:text-blue-600/20 group-hover:rotate-12 transition-all duration-500" size={48} />
              <p className="text-gray-700 dark:text-gray-300 italic mb-8 relative z-10 leading-relaxed text-lg">"{r.text}"</p>
              <div className="relative z-10">
                <h4 className="font-bold text-gray-900 dark:text-white text-lg">{r.name}</h4>
                <p className="text-blue-600 dark:text-blue-400 text-sm font-black uppercase tracking-widest">{r.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
