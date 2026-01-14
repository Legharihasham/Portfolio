
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-slate-100 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <span className="text-slate-400 text-sm font-mono">© 2025 devwith.hash</span>
            <span className="text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-widest px-2 py-1 glass rounded">Pakistan 🇵🇰</span>
          </div>
          
          <div className="flex space-x-8 text-sm font-medium text-slate-500 dark:text-slate-400">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Github</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Instagram</a>
          </div>
          
          <div className="text-xs text-slate-400 font-mono">
            Built with React, Tailwind & <span className="text-blue-500 animate-pulse">Gemini</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
