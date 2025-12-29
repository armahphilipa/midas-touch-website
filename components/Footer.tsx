
import React, { useContext } from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Sparkles } from 'lucide-react';
import { ThemeContext } from '../App';

export const Footer: React.FC = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" }
  ];

  const socialLinks = [
    { Icon: Facebook, href: "https://www.facebook.com/share/17FCkHfWdJ/?mibextid=wwXIfr" },
    { Icon: Twitter, href: "#" },
    { Icon: Linkedin, href: "#" },
    { Icon: Instagram, href: "https://www.instagram.com/midastouch_cg?igsh=YzljYTk1ODg3Zg==" },
  ];

  return (
    <footer className="bg-white dark:bg-brand-darker text-gray-900 dark:text-white py-20 border-t border-gray-100 dark:border-white/5 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 border-b border-gray-100 dark:border-white/5 pb-20">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-8">
              <div className="w-[120px] h-10 flex items-center transition-transform duration-500 group-hover:scale-105">
                <img 
                  src={isDarkMode 
                  ? 'https://img.sanishtech.com/u/86b8a5a4b6350ce1215538ccdb944729.png' 
                  : 'https://img.sanishtech.com/u/79a31aaeda83fceac7f498c32f08715a.png'
                  } 
                  alt="Midas Touch Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <p className="text-gray-500 dark:text-gray-400 max-w-sm mb-8 leading-relaxed">
              Unlocking potential and delivering breakthrough results through high-fidelity engineering and creative strategy.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all dark:text-gray-400"
                >
                  <social.Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black mb-8 uppercase tracking-[0.2em] text-sm text-blue-500">Links</h4>
            <ul className="space-y-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-white transition-all text-lg font-medium text-left w-full"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black mb-8 uppercase tracking-[0.2em] text-sm text-blue-500">Legal</h4>
            <ul className="space-y-6 text-gray-500 dark:text-gray-400">
              <li><a href="#" className="hover:text-blue-500 dark:hover:text-white transition-colors text-lg font-medium">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-500 dark:hover:text-white transition-colors text-lg font-medium">Terms of Use</a></li>
              <li><a href="#" className="hover:text-blue-500 dark:hover:text-white transition-colors text-lg font-medium">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-400 dark:text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Midas Touch Consult Group. All rights reserved.</p>
          <div className="flex gap-8">
            <span>Built with Innovation</span>
            <span>Takoradi, Ghana</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
