
// Add React to the import list to fix 'Cannot find namespace React' error
import React, { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Globe, Image as ImageIcon, Zap } from "lucide-react";
import { LiveFrame } from "./LiveFrame";
import { Project } from "../types";
import { ThemeContext } from "../App";

export const Portfolio: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");
  const { isDarkMode } = useContext(ThemeContext);

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform built with React and Node.js",
      longDescription: "A full-stack e-commerce solution featuring user authentication, payment processing, inventory management, and an admin dashboard. Built with React and Tailwind CSS.",
      liveUrl: "https://tmp-challenge.vercel.app",
      category: "Full Stack",
    },
    {
      id: 2,
      title: "KolikoWear Ecommerce",
      description: "Interactive 3D portfolio with Three.js animations",
      longDescription: "An immersive 3D portfolio website showcasing creative web development skills. Features interactive 3D models, particle systems, and smooth animations using Three.js and GSAP.",
      liveUrl: "https://kolikowearshop.vercel.app/",
      category: "Web App",
    },
    {
      id: 3,
      title: "Club Management System",
      description: "Collaborative task management with real-time updates",
      longDescription: "A comprehensive task management application with real-time collaboration features, drag-and-drop functionality, team management, and progress tracking.",
      liveUrl: "https://ankosms-qp3k.vercel.app/",
      category: "Web App",
    },
    {
      id: 4,
      title: "AI Chat Interface",
      description: "Modern chat interface with AI integration",
      longDescription: "An intelligent chat interface with AI-powered responses, message history, file sharing, and real-time typing indicators.",
      liveUrl: "https://kolikolandingpage.netlify.app/",
      category: "AI/ML",
    },
    {
      id: 5,
      title: "Foodies Plug",
      description: "Food vendor platform with online ordering",
      longDescription: "A beautiful restaurant website featuring online menu, reservation system, order tracking, and payment integration.",
      liveUrl: "https://foodiesplug.vercel.app",
      category: "Frontend",
    },
    {
      id: 6,
      title: "Hospital CMS",
      description: "End-to-end management for health facilities",
      longDescription: "A complete hospital management system designed to streamline patient registration, appointment scheduling, and doctor management.",
      liveUrl: "https://empathycarelandingpage.vercel.app",
      category: "Management System",
    },
    {
      id: 9,
      title: "Blackjack Game",
      description: "Interactive web-based card game",
      longDescription: "A fun and engaging Blackjack game built with React. Features chip management and automated dealer logic.",
      liveUrl: "https://blackjackgame-sand.vercel.app/",
      category: "Game Development",
    },
    {
      id: 10,
      title: "Koliko Dashboard",
      description: "End-to-end management for Ecommerce",
      longDescription: "A complete dashboard system designed to streamline patient registration, appointment scheduling, and doctor management.",
      liveUrl: "https://kolikoadmin-pmq4.vercel.app/",
      category: "Management System",
    },
    {
      id: 11,
      title: "Ping Coming landingpage",
      description: "Food vendor platform with online ordering",
      longDescription: "A beautiful restaurant website featuring online menu, reservation system, order tracking, and payment integration.",
      liveUrl: "https://ping-coming-three.vercel.app/",
      category: "Frontend",
    },
    {
      id: 12,
      title: "Huddle Landingpage",
      description: "Food vendor platform with online ordering",
      longDescription: "A beautiful restaurant website featuring online menu, reservation system, order tracking, and payment integration.",
      liveUrl: "https://huddle-landing-page-taupe-one.vercel.app/",
      category: "Frontend",
    },
    {
      id: 13,
      title: "Brand Flyer One",
      description: "High-fidelity brand marketing flyer",
      longDescription: "A professionally designed marketing flyer focusing on typography, layout hierarchy, and visual impact for brand identity.",
      liveUrl: "https://image2url.com/r2/bucket2/images/1766834574067-75d7ee29-78b5-48a6-8496-8ff433cff647.jpg",
      category: "Graphic Design",
    },
    {
      id: 14,
      title: "Corporate Identity",
      description: "Full brand guidelines and marketing assets",
      longDescription: "Comprehensive visual identity system including logo usage, color palettes, and social media templates.",
      liveUrl: "https://image2url.com/r2/bucket2/images/1766835229182-e3abf6a0-232c-4e64-8c8c-045b0c075e6c.jpg",
      category: "Graphic Design",
    },
    {
      id: 15,
      title: "Modern Event Poster",
      description: "Aesthetic event marketing material",
      longDescription: "High-impact visual communication for premium corporate events, featuring modern layout techniques.",
      liveUrl: "https://image2url.com/r2/bucket2/images/1766837744904-1b5cc87c-fff9-4d67-9c37-086829691445.png",
      category: "Graphic Design",
    },
    {
      id: 16,
      title: "Minimalist Branding",
      description: "Clean and effective brand presence",
      longDescription: "A study in minimalism and high-end design principles applied to modern brand communication.",
      liveUrl: "https://image2url.com/r2/bucket2/images/1766838294269-a73a12af-8581-4c59-836e-00d8644792ae.png",
      category: "Graphic Design",
    },
    {
      id: 17,
      title: "Product Showcase",
      description: "3D-style flyer for product launches",
      longDescription: "Creative use of depth and lighting to showcase technological products in marketing materials.",
      liveUrl: "https://image2url.com/r2/bucket2/images/1766838403147-58cd016c-2ca0-4eb9-b269-96ebbf2d560d.png",
      category: "Graphic Design",
    }
  ];

  const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const nextProject = () => setCurrentIndex(prev => (prev + 1) % filteredProjects.length);
  const prevProject = () => setCurrentIndex(prev => (prev - 1 + filteredProjects.length) % filteredProjects.length);

  const currentProject = filteredProjects[currentIndex];
  const isGraphic = currentProject.category === "Graphic Design";

  return (
    <section id="portfolio" className="py-24 bg-slate-50 dark:bg-brand-navy transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold dark:text-white text-gray-900 mb-4">Digital Artifacts</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-md text-lg font-medium">Engineering high-fidelity systems with performance and minimalism at the core.</p>
          </motion.div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setCurrentIndex(0); }}
                className={`px-5 py-2.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold transition-all ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                    : "bg-white dark:bg-brand-surface text-gray-500 dark:text-gray-300 border border-gray-100 dark:border-white/10 hover:border-blue-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-8"
              >
                <div className="flex items-center gap-3">
                   <div className="px-3 py-1 bg-blue-600/10 text-blue-600 text-[10px] font-bold uppercase tracking-widest rounded-full border border-blue-600/20">
                    {currentProject.category}
                  </div>
                  <div className="text-gray-400 font-mono text-[10px] uppercase tracking-widest">
                    Artifact {currentIndex + 1} / {filteredProjects.length}
                  </div>
                </div>
                
                <h3 className="text-5xl md:text-6xl font-extrabold dark:text-white text-gray-900 leading-tight tracking-tight">{currentProject.title}</h3>
                <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-medium">{currentProject.longDescription}</p>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center gap-4 bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold group hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20"
                  >
                    <span className="uppercase tracking-widest text-xs">Request Similar Project</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  {!isGraphic && (
                    <a 
                      href={currentProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-4 bg-white dark:bg-brand-surface dark:text-white px-6 py-3 rounded-2xl font-bold border border-gray-100 dark:border-white/10 hover:border-blue-600 transition-all"
                    >
                      <Globe size={18} />
                      <span className="uppercase tracking-widest text-xs">Open Live Site</span>
                    </a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex gap-4">
              <button 
                onClick={prevProject} 
                className="p-5 rounded-2xl border bg-white dark:bg-brand-surface border-gray-100 dark:border-white/10 text-gray-900 dark:text-white hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextProject} 
                className="p-5 rounded-2xl border bg-white dark:bg-brand-surface border-gray-100 dark:border-white/10 text-gray-900 dark:text-white hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border border-white/5 bg-gray-200 dark:bg-brand-darker">
             <AnimatePresence mode="wait">
                <motion.div
                  key={currentProject.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.6, ease: "circOut" }}
                  className="w-full h-full"
                >
                  {isGraphic ? (
                    <div className="w-full h-full p-8 flex items-center justify-center bg-gray-100 dark:bg-brand-darker">
                       <img 
                        src={currentProject.liveUrl} 
                        alt={currentProject.title} 
                        className="max-w-full max-h-full object-contain shadow-2xl rounded-xl"
                      />
                    </div>
                  ) : (
                    <LiveFrame 
                      url={currentProject.liveUrl} 
                      title={currentProject.title} 
                      theme={isDarkMode ? 'dark' : 'light'}
                    />
                  )}
                  
                  <div className="absolute bottom-10 left-10 p-5 bg-white/10 dark:bg-black/30 backdrop-blur-xl rounded-[2rem] border border-white/20 dark:border-white/10 text-white z-40 pointer-events-none">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <div>
                        <div className="text-[10px] uppercase tracking-widest opacity-70 font-bold mb-0.5">Deployment Status</div>
                        <div className="font-bold text-xs">Production Ready</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
             </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
