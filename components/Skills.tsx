
import React from 'react';
import { SKILLS } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <div className="p-12 glass rounded-[3rem] border-slate-200 dark:border-slate-800">
      <div className="text-center mb-16">
        <h2 className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4">Core Competencies</h2>
        <h3 className="text-4xl font-extrabold text-slate-900 dark:text-white">My Technical Toolkit</h3>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {SKILLS.map((skillGroup) => (
          <div key={skillGroup.category} className="space-y-6">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
              {skillGroup.category}
            </h4>
            <ul className="space-y-4">
              {skillGroup.items.map((skill) => (
                <li key={skill} className="flex items-center space-x-3 group">
                  <CheckCircle2 size={18} className="text-emerald-500 group-hover:scale-125 transition-transform" />
                  <span className="text-slate-600 dark:text-slate-400 font-medium group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="mt-16 pt-12 border-t border-slate-200 dark:border-slate-800 flex flex-wrap justify-center gap-8 opacity-50">
        {/* Placeholder for certifications logos */}
        <div className="text-xs font-mono tracking-tighter uppercase font-bold text-slate-400">Google AI Essentials</div>
        <div className="text-xs font-mono tracking-tighter uppercase font-bold text-slate-400">Python Institute</div>
        <div className="text-xs font-mono tracking-tighter uppercase font-bold text-slate-400">Streamlit Partner</div>
        <div className="text-xs font-mono tracking-tighter uppercase font-bold text-slate-400">LangChain Certified</div>
      </div>
    </div>
  );
};

export default Skills;
