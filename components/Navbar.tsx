
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
          ? 'https://image2url.com/r2/default/images/1767189509445-57be120a-10b6-4f78-ba59-54a905c660c0.png':'https://image2url.com/r2/default/images/1767189738009-74ed5508-f537-4213-ba9d-88808fa89e45.png} 
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
