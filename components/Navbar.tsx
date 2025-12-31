
import React, { useState, useEffect, useContext } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeContext } from "../App";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    
    // Prevent body scroll when mobile menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    // Short timeout to allow menu exit animation to start
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  const Logo = () => (
    <div 
      className="w-[120px] h-10 flex items-center transition-transform duration-500 group-hover:scale-105 cursor-pointer"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsOpen(false);
      }}
    >
      <img 
        src={isDarkMode 
          ? 'data:image/png;base64,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' 
          : 'data:image/png;base64,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' 
          } 
          alt="Midas Touch Logo" 
          className="w-full h-full object-contain"
        />
    </div>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-brand-navy/80 backdrop-blur-xl shadow-lg py-3 border-b border-gray-200/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Logo />

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-semibold tracking-wide"
              >
                {item.name}
              </button>
            ))}
            
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-brand-surface text-gray-600 dark:text-blue-400 transition-all border border-gray-200 dark:border-white/10"
              aria-label="Toggle dark mode"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isDarkMode ? 'dark' : 'light'}
                  initial={{ opacity: 0, rotate: -45 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 45 }}
                  transition={{ duration: 0.2 }}
                >
                  {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            <button 
              onClick={() => scrollToSection('#contact')}
              className="bg-blue-600 text-white px-7 py-2.5 rounded-full hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/20 transition-all font-bold text-sm tracking-wide"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Toggle Icons (Hidden when menu is full screen) */}
          {!isOpen && (
            <div className="md:hidden flex items-center space-x-4">
              <button 
                onClick={toggleTheme} 
                className="p-2.5 rounded-xl bg-gray-100 dark:bg-brand-surface border border-gray-200 dark:border-white/10 dark:text-blue-400"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button onClick={() => setIsOpen(true)} className="p-2 dark:text-white">
                <Menu size={24} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[110] bg-white dark:bg-brand-darker flex flex-col md:hidden overflow-y-auto"
          >
            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center px-4 py-5 border-b border-gray-100 dark:border-white/5">
              <Logo />
              <div className="flex items-center space-x-4">
                <button 
                  onClick={toggleTheme} 
                  className="p-2.5 rounded-xl bg-gray-100 dark:bg-brand-surface border border-gray-200 dark:border-white/10 dark:text-blue-400"
                >
                  {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="p-2.5 rounded-xl bg-gray-100 dark:bg-brand-surface border border-gray-200 dark:border-white/10 dark:text-white"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Mobile Menu Links */}
            <div className="flex-1 flex flex-col justify-center px-8 py-12 space-y-8">
              {navItems.map((item, idx) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-gray-900 dark:text-white font-black text-3xl tracking-tighter hover:text-blue-600 transition-colors"
                >
                  {item.name}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Footer Action */}
            <div className="p-8 border-t border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-brand-surface/50">
              <button 
                onClick={() => scrollToSection('#contact')}
                className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-blue-600/20 active:scale-95 transition-transform"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
