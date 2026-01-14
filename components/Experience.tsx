
import React from 'react';
import { EXPERIENCES } from '../constants';
import { Briefcase, Trophy, Heart } from 'lucide-react';

const Experience: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'professional': return <Briefcase className="text-blue-500" />;
      case 'leadership': return <Trophy className="text-yellow-500" />;
      case 'volunteer': return <Heart className="text-red-500" />;
      default: return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-16 text-center">
        <h2 className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4">The Journey</h2>
        <h3 className="text-4xl font-extrabold text-slate-900 dark:text-white">Experience & Leadership</h3>
      </div>

      <div className="space-y-12">
        {EXPERIENCES.map((exp, index) => (
          <div key={exp.id} className="relative pl-12 before:content-[''] before:absolute before:left-4 before:top-0 before:bottom-[-48px] before:w-[2px] before:bg-slate-200 dark:before:bg-slate-800 last:before:hidden">
            <div className="absolute left-0 top-0 w-8 h-8 rounded-full glass border-slate-200 dark:border-slate-800 flex items-center justify-center z-10">
              {getIcon(exp.type)}
            </div>
            
            <div className="glass p-8 rounded-3xl border-slate-100 dark:border-slate-800 hover:border-blue-500/30 transition-all">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h4>
                  <div className="text-blue-600 dark:text-blue-400 font-semibold">{exp.company}</div>
                </div>
                <div className="mt-2 md:mt-0 px-4 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-full text-sm font-mono text-slate-500 dark:text-slate-400">
                  {exp.period}
                </div>
              </div>
              
              <ul className="space-y-3">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex items-start space-x-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
