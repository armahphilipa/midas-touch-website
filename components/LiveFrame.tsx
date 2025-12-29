
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, RefreshCcw, ExternalLink, Globe } from 'lucide-react';

interface LiveFrameProps {
  url: string;
  title: string;
  className?: string;
  theme?: 'light' | 'dark';
}

export const LiveFrame: React.FC<LiveFrameProps> = ({ 
  url, 
  title, 
  className = "",
  theme = 'dark'
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    setIsLoading(true);
  }, [url]);

  const handleReload = () => {
    setIsLoading(true);
    if (iframeRef.current) {
      iframeRef.current.src = url;
    }
  };

  const isDark = theme === 'dark';

  return (
    <div className={`relative flex flex-col w-full h-full overflow-hidden border rounded-3xl shadow-2xl transition-all duration-500 ${
      isDark ? 'bg-[#0a0c14] border-white/5' : 'bg-white border-black/5'
    } ${className}`}>
      <div className={`flex items-center justify-between px-6 py-4 backdrop-blur-xl border-b z-20 transition-colors duration-500 ${
        isDark ? 'bg-white/[0.02] border-white/5' : 'bg-black/[0.02] border-black/5'
      }`}>
        <div className="flex items-center gap-6">
          <div className="flex gap-2">
            <div className={`w-2.5 h-2.5 rounded-full ${isDark ? 'bg-white/10' : 'bg-black/10'}`} />
            <div className={`w-2.5 h-2.5 rounded-full ${isDark ? 'bg-white/10' : 'bg-black/10'}`} />
            <div className={`w-2.5 h-2.5 rounded-full ${isDark ? 'bg-white/10' : 'bg-black/10'}`} />
          </div>
          <div className={`hidden sm:flex items-center gap-2 px-3 py-1 rounded-full border transition-colors duration-500 ${
            isDark ? 'bg-white/[0.03] border-white/5' : 'bg-black/[0.03] border-black/5'
          }`}>
            <Globe size={10} className={isDark ? "text-white/30" : "text-black/30"} />
            <span className={`text-[10px] truncate select-none max-w-[200px] transition-colors ${
              isDark ? "text-white/40" : "text-black/40"
            }`}>
              {url.replace('https://', '')}
            </span>
          </div>
        </div>
        
        <div className="flex items-center gap-1">
          <button 
            onClick={handleReload}
            className={`p-2 rounded-full transition-colors ${
              isDark ? "text-white/40 hover:text-white hover:bg-white/5" : "text-black/40 hover:text-black hover:bg-black/5"
            }`}
          >
            <RefreshCcw size={14} className={isLoading ? "animate-spin" : ""} />
          </button>
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`p-2 rounded-full transition-colors ${
              isDark ? "text-white/40 hover:text-white hover:bg-white/5" : "text-black/40 hover:text-black hover:bg-black/5"
            }`}
          >
            <ExternalLink size={14} />
          </a>
        </div>
      </div>

      <div className={`relative flex-1 overflow-hidden transition-colors duration-500 ${
        isDark ? 'bg-[#111]' : 'bg-slate-200'
      }`}>
        <AnimatePresence>
          {isLoading && (
            <motion.div 
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`absolute inset-0 z-30 flex items-center justify-center transition-colors duration-500 ${
                isDark ? 'bg-[#030712]' : 'bg-slate-50'
              }`}
            >
              <div className="flex flex-col items-center gap-4">
                <Loader2 className={`w-6 h-6 animate-spin opacity-50 ${isDark ? 'text-indigo-500' : 'text-slate-900'}`} />
                <span className={`text-[9px] uppercase tracking-[0.3em] font-mono ${
                  isDark ? 'text-white/20' : 'text-black/20'
                }`}>Loading Viewport</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <iframe
          ref={iframeRef}
          src={url}
          title={title}
          onLoad={() => setIsLoading(false)}
          className={`w-full h-full border-none transition-all duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          loading="lazy"
        />
      </div>
    </div>
  );
};
