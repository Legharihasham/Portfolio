
import React from 'react';
import { ArrowRight, Github, Linkedin, Instagram, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-8 animate-bounce">
          <Sparkles size={16} />
          <span>Available for New AI Projects</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
          I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-emerald-500 to-indigo-600">AI systems</span> that actually work.
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
          Muhammad Hasham Khan — <span className="font-semibold text-slate-900 dark:text-slate-200">AI Engineer & Chatbot Architect</span> specialized in building practical, scalable, and impact-driven software.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="#projects"
            className="group flex items-center space-x-2 px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg shadow-xl shadow-blue-500/20 hover:scale-105 transition-all"
          >
            <span>View My Projects</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="flex items-center space-x-2 px-8 py-4 border-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-full font-bold text-lg hover:bg-slate-100 dark:hover:bg-slate-900 transition-all"
          >
            Get In Touch
          </a>
        </div>

        <div className="mt-16 flex items-center justify-center space-x-8 text-slate-400">
          <a href="#" className="hover:text-blue-600 transition-colors"><Linkedin size={24} /></a>
          <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors"><Github size={24} /></a>
          <a href="https://instagram.com/devwith.hash" target="_blank" className="hover:text-pink-600 transition-colors"><Instagram size={24} /></a>
        </div>
      </div>
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
    </div>
  );
};

export default Hero;
