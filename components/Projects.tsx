
import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Terminal, BrainCircuit } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <div>
      <div className="mb-12">
        <h2 className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4">Featured Work</h2>
        <h3 className="text-4xl font-extrabold text-slate-900 dark:text-white">Applied AI & Security</h3>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <div key={project.id} className="group flex flex-col bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 hover:shadow-2xl hover:shadow-blue-500/5 transition-all">
            <div className="h-48 overflow-hidden relative">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex space-x-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] px-2 py-1 bg-white/20 backdrop-blur-md rounded text-white font-bold">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="p-8 flex-1 flex flex-col">
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center justify-between">
                {project.title}
                <BrainCircuit size={18} className="text-blue-500" />
              </h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-1">
                {project.description}
              </p>
              
              <div className="space-y-4 border-t border-slate-50 dark:border-slate-800 pt-6">
                <div>
                  <div className="text-[10px] uppercase tracking-wider font-bold text-red-500 mb-1">The Problem</div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{project.problem}</p>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider font-bold text-emerald-500 mb-1">The Impact</div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{project.impact}</p>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between">
                <div className="flex space-x-1">
                  {project.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="text-[10px] text-slate-400 font-mono">#{tag.toLowerCase()}</span>
                  ))}
                </div>
                <button className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-blue-600 hover:text-white transition-all">
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
