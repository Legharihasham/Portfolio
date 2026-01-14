
import React from 'react';
import { Mail, Linkedin, Instagram, ArrowRight, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-slate-950 rounded-[4rem] p-12 md:p-24 text-center">
      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-6">Let's Build Something</h2>
        <h3 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
          Ready to scale your next <span className="text-emerald-400">AI solution?</span>
        </h3>
        <p className="text-slate-400 text-lg mb-12 leading-relaxed">
          I'm currently open to collaborations, research projects, and freelance AI system architecture. Let's discuss how we can bring your ideas to life.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="mailto:legharihasham408@gmail.com"
            className="flex items-center space-x-3 px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:scale-105 transition-all w-full sm:w-auto"
          >
            <Mail size={20} />
            <span>legharihasham408@gmail.com</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-3 px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:scale-105 transition-all w-full sm:w-auto shadow-xl shadow-blue-500/20"
          >
            <Linkedin size={20} />
            <span>LinkedIn Profile</span>
          </a>
        </div>

        <div className="mt-16 flex items-center justify-center space-x-8">
          <a href="https://instagram.com/devwith.hash" target="_blank" className="text-slate-500 hover:text-white transition-colors flex items-center space-x-2">
            <Instagram size={24} />
            <span className="font-mono text-sm">@devwith.hash</span>
          </a>
          <div className="h-4 w-[1px] bg-slate-800" />
          <div className="text-slate-500 flex items-center space-x-2">
            <MessageSquare size={24} />
            <span className="font-mono text-sm">Open for DM</span>
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[120%] bg-gradient-to-b from-blue-500/10 via-transparent to-transparent blur-[120px] pointer-events-none"></div>
    </div>
  );
};

export default Contact;
