
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { name, email, subject, message } = formData;
    
    if (!name || !email || !message) {
      alert("Please fill in all required fields.");
      return;
    }

    const mailtoSubject = subject ? `Project Inquiry: ${subject}` : `Contact Form Submission from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    
    const mailtoLink = `mailto:midastouchcg@gmail.com?subject=${encodeURIComponent(mailtoSubject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-brand-navy transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-8 leading-tight tracking-tight">
              Ready to <span className="text-blue-600">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 font-medium">
              Fill out the form or reach out directly. Our team responds within 24 hours.
            </p>
            
            <div className="space-y-8">
              {[
                { 
                  icon: <Mail />, 
                  label: "Email Us", 
                  val: "midastouchcg@gmail.com", 
                  href: "mailto:midastouchcg@gmail.com" 
                },
                { 
                  icon: <Phone />, 
                  label: "Call Us", 
                  val: "+233 534 463 913", 
                  href: "tel:+233534463913" 
                },
                { 
                  icon: <MapPin />, 
                  label: "Location", 
                  val: "Takoradi, Ghana" 
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                >
                  {item.href ? (
                    <a href={item.href} className="flex items-center gap-6 group transition-all">
                      <div className="w-14 h-14 bg-blue-600/10 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-[10px] text-gray-500 dark:text-gray-400 font-black uppercase tracking-[0.2em] mb-1">{item.label}</div>
                        <div className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">{item.val}</div>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-6 group">
                      <div className="w-14 h-14 bg-blue-600/10 text-blue-600 rounded-2xl flex items-center justify-center transition-all shadow-sm">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-[10px] text-gray-500 dark:text-gray-400 font-black uppercase tracking-[0.2em] mb-1">{item.label}</div>
                        <div className="text-xl font-bold text-gray-900 dark:text-white">{item.val}</div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-10 bg-slate-50 dark:bg-brand-surface rounded-[3rem] space-y-6 border border-gray-100 dark:border-white/5 shadow-inner" 
            onSubmit={handleSubmit}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name" 
                required
                className="w-full bg-white dark:bg-brand-navy border border-gray-200 dark:border-white/10 p-5 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 transition-all" 
              />
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address" 
                required
                className="w-full bg-white dark:bg-brand-navy border border-gray-200 dark:border-white/10 p-5 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 transition-all" 
              />
            </div>
            <input 
              type="text" 
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject (Optional)" 
              className="w-full bg-white dark:bg-brand-navy border border-gray-200 dark:border-white/10 p-5 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 transition-all" 
            />
            <textarea 
              rows={5} 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Project Description" 
              required
              className="w-full bg-white dark:bg-brand-navy border border-gray-200 dark:border-white/10 p-5 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 transition-all resize-none" 
            />
            <motion.button 
              type="submit"
              whileHover={{ scale: 1.02, backgroundColor: "#1d4ed8" }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-blue-600 text-white font-black uppercase tracking-widest text-sm py-5 rounded-2xl transition-all flex justify-center items-center gap-3 shadow-xl shadow-blue-600/20"
            >
              Send Message <Send size={18} />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
