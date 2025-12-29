
import React from 'react';
import { Target, Users, Award, Zap, Linkedin, Twitter, Github } from 'lucide-react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  const values = [
    { icon: <Target />, title: "Innovation First", desc: "Leading the tech frontier." },
    { icon: <Users />, title: "Client Centric", desc: "Your growth is our goal." },
    { icon: <Award />, title: "Quality Focus", desc: "Precision in every pixel." },
    { icon: <Zap />, title: "Agile Speed", desc: "Rapid secure deployment." }
  ];

  const stats = [
    { label: "Projects", val: "100+" },
    { label: "Talents", val: "10+" },
    { label: "Experience", val: "5+ Yrs" },
    { label: "Satisfaction", val: "99%" }
  ];

  const leaders = [
    {
      name: "Ishmael Abakah",
      role: "Founder",
      bio: "A visionary entrepreneur dedicated to unlocking human and corporate potential through strategic digital transformation. Ishmael leads Midas Touch with a focus on innovation and global scale.",
      image: "https://i.pinimg.com/1200x/87/89/08/87890865db20992bcf2e06ec67674aeb.jpg",
      socials: [
        { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/ishmeal-abakah?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
        { icon: <Twitter size={18} />, href: "https://x.com/MOdiksin?t=Lxei8chEwniTFB33RMfv0w&s=09" }
      ]
    },
    {
      name: "Philipa Armah",
      role: "Lead Developer",
      bio: "An elite software architect specializing in scalable full-stack systems and intuitive UI/UX. Philipa oversees the technical precision of every digital artifact we deploy.",
      image: "https://i.pinimg.com/1200x/e7/33/76/e73376280267e28d8e55492b45457e82.jpg",
      socials: [
        { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/philipa-armah" },
        { icon: <Github size={18} />, href: "https://github.com/armahphilipa" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-24 bg-white dark:bg-brand-navy transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold dark:text-white text-gray-900 mb-4 tracking-tight"
          >
            About Us
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Midas Touch Consult Group is more than a consultancy; we are your digital architects, transforming vision into reality.
          </motion.p>
        </div>

        {/* Impact Section */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold dark:text-white text-gray-900">Built for Impact</h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              Founded in Takoradi, Ghana, we've expanded our reach globally by providing unparalleled research, creative design, and robust engineering. Our mission is simple: transform complexity into competitive advantage.
            </p>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-8 pt-4"
            >
              {stats.map((s, i) => (
                <motion.div 
                  key={i} 
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="p-6 bg-gray-50 dark:bg-brand-surface rounded-3xl border border-gray-100 dark:border-white/5 transition-all hover:border-blue-600/30 group shadow-sm"
                >
                  <div className="text-3xl font-black text-blue-600 mb-1 group-hover:scale-110 transition-transform origin-left">{s.val}</div>
                  <div className="text-gray-500 dark:text-gray-400 font-bold text-xs uppercase tracking-widest">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[3rem] overflow-hidden group shadow-2xl border-4 border-white/10"
          >
            <img 
              src="https://images.unsplash.com/photo-1739292774739-ee38cd9a5735?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              className="w-full h-[500px] object-cover transition-transform duration-1000 group-hover:scale-105" 
              alt="Team Collaboration"
            />
            <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/10 transition-colors" />
            <div className="absolute bottom-8 left-8 right-8 p-6 bg-brand-navy/60 backdrop-blur-xl border border-white/20 rounded-2xl text-white">
              <p className="text-sm font-medium italic opacity-90">"We don't just build software; we build the future of your business."</p>
            </div>
          </motion.div>
        </div>

        {/* Leadership Section */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold dark:text-white text-gray-900 mb-4">Our Visionaries</h3>
              <p className="text-gray-500 dark:text-gray-400 max-w-lg">Meet the minds behind Midas Touch, driving our commitment to excellence and innovation.</p>
            </motion.div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {leaders.map((leader, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="group p-8 bg-slate-50 dark:bg-brand-surface rounded-[3rem] border border-gray-100 dark:border-white/5 flex flex-col md:flex-row gap-8 items-center transition-all hover:shadow-2xl hover:shadow-blue-600/10 hover:border-blue-600/30"
              >
                <div className="w-40 h-40 shrink-0 rounded-[2.5rem] overflow-hidden shadow-lg border-4 border-white dark:border-brand-navy">
                  <img src={leader.image} alt={leader.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="flex-1 space-y-4 text-center md:text-left">
                  <div>
                    <h4 className="text-2xl font-bold dark:text-white text-gray-900 mb-1 tracking-tight">{leader.name}</h4>
                    <p className="text-blue-600 font-bold text-sm uppercase tracking-widest">{leader.role}</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{leader.bio}</p>
                  <div className="flex justify-center md:justify-start gap-4">
                    {leader.socials.map((social, idx) => (
                      <motion.a 
                        key={idx} 
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        href={social.href} 
                        className="p-3 rounded-xl bg-white dark:bg-brand-navy text-gray-500 dark:text-gray-400 hover:text-blue-600 hover:dark:text-white hover:bg-blue-600/10 hover:shadow-md transition-all border border-gray-100 dark:border-white/10"
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Values Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8"
        >
          {values.map((v, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              whileHover={{ y: -10, transition: { type: "spring", stiffness: 300 } }}
              className="p-10 bg-white dark:bg-brand-surface border border-gray-100 dark:border-white/5 rounded-[3rem] shadow-sm text-center transition-all hover:shadow-2xl hover:border-blue-600/20 group"
            >
              <div className="w-16 h-16 bg-blue-600/10 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                {v.icon}
              </div>
              <h4 className="text-xl font-bold dark:text-white text-gray-900 mb-2">{v.title}</h4>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
