
import React from 'react';
import { Target, Code2, Users2, Shield } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { label: 'Specialization', value: 'Google AI Certified', icon: <Target className="text-blue-500" /> },
    { label: 'Coding Focus', value: 'AI & Python', icon: <Code2 className="text-emerald-500" /> },
    { label: 'Leadership', value: 'Head & Ambassador', icon: <Users2 className="text-purple-500" /> },
    { label: 'Security', value: 'Threat Monitoring', icon: <Shield className="text-indigo-500" /> },
  ];

  return (
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4">The Builder Mindset</h2>
        <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
          Beyond buzzwords, <br />I build solutions.
        </h3>
        <div className="space-y-4 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
          <p>
            I'm a BS Computer Science student at the <span className="text-slate-900 dark:text-white font-semibold">University of Lahore</span>, but my education extends far beyond the classroom. I focus on bridging the gap between cutting-edge AI research and real-world deployment.
          </p>
          <p>
            Whether it's building a RAG-powered chatbot for 10,000+ students or architecting cybersecurity monitors for network integrity, my goal is always <span className="italic">tangible impact</span>.
          </p>
          <p>
            I believe AI should empower people, not just replace processes. This philosophy drives my work in technical support, leadership, and volunteer efforts across Pakistan.
          </p>
        </div>
        
        <div className="mt-8 grid grid-cols-2 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="p-4 rounded-2xl glass border-slate-100 dark:border-slate-800">
              <div className="mb-2">{stat.icon}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-tight">{stat.label}</div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="relative">
        <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl group">
          <img
            src="https://picsum.photos/seed/hasham/800/800"
            alt="Muhammad Hasham Khan"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60"></div>
        </div>
        <div className="absolute -bottom-6 -right-6 p-6 glass border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl max-w-xs animate-in slide-in-from-bottom duration-1000">
          <p className="text-sm text-slate-600 dark:text-slate-400 italic">
            "I don't just prompt AI; I architect the systems that make AI useful for everyone."
          </p>
          <div className="mt-2 text-xs font-bold text-slate-900 dark:text-white">— devwith.hash</div>
        </div>
      </div>
    </div>
  );
};

export default About;
