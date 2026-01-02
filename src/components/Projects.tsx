import { Ship, Activity, Zap, Radio, Gamepad2, FileText, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
  span: string;
  reportUrl?: string;
  externalUrl?: string; // Pour le lien GitLab
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: 'Maritime Surveillance AI (CS GROUP)',
      description:
        'Industrial project focused on enhancing automated ship detection for maritime security. Led the creation of a massive 13,000+ annotated vessel database covering 14 categories (military, cargo, jet-skis, etc.). Developed a dual AI pipeline using YOLOv8 for object detection and CLIP for weather/time classification. Delivered a complete software solution featuring a PostgreSQL backend and a custom PyQt5 HMI for advanced multi-criteria retrieval.',
      tags: ['Python', 'YOLOv8', 'CLIP', 'PyQt5', 'PostgreSQL', 'Computer Vision'],
      icon: <Ship size={32} />,
      span: 'md:col-span-2 md:row-span-2', // Projet phare (2x2)
      reportUrl: '/Projet_Surveillance_Maritime.pdf'
    },
    {
      title: 'Biomechanical Motion Analysis',
      description:
        'Mathematical modeling of a football strike. Analyzed dynamics using Lagrange\'s equations and built a Python simulator integrating SciPy (odeint) to account for Magnus effect, drag, and gravity.',
      tags: ['Python', 'SciPy', 'Lagrange', 'Dynamics'],
      icon: <Activity size={32} />,
      span: 'md:col-span-1 md:row-span-1',
      reportUrl: '/Etude_Biomecanique_Football.pdf'
    },
    {
      title: 'Renewable Energy Study',
      description:
        'Technical analysis and optimization of sustainable energy systems. Evaluated efficiency and transition strategies for future energy infrastructures.',
      tags: ['Energy Systems', 'Optimization', 'Sustainability'],
      icon: <Zap size={32} />,
      span: 'md:col-span-1 md:row-span-1',
    },
    {
      title: 'Advanced Signal Processing',
      description:
        'Implementation of spectral estimation algorithms (DSP) in MATLAB. Developed automated classification systems using learning centroids for signal pattern recognition.',
      tags: ['MATLAB', 'DSP', 'Spectral Analysis', 'Classification'],
      icon: <Radio size={32} />,
      span: 'md:col-span-2 md:row-span-1', // Largeur 2 en bas
    },
    {
      title: 'Balatro Game Clone',
      description:
        'Development of a poker-inspired roguelike game logic. Implemented core mechanics, scoring systems, and UI components as part of a computer science project.',
      tags: ['Python/C++', 'Game Logic', 'GitHub'],
      icon: <Gamepad2 size={32} />,
      span: 'md:col-span-1 md:row-span-1', // Comble le trou en bas à droite
      externalUrl: 'https://github.com/ticrashh/Balapatro' // REMPLACE PAR TON LIEN
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMGFmZmZmIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-cyan-400 mx-auto mb-6"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Engineering simulations, computer vision, and software development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${project.span} group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden flex flex-col`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:to-transparent transition-all duration-300"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all duration-300">
                  {project.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-300 leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-slate-800/50 border border-slate-700 rounded-full text-cyan-300 text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col gap-3 pt-4 border-t border-slate-800">
                    {project.reportUrl && (
                      <a href={project.reportUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-bold transition-colors">
                        <FileText size={18} />
                        <span>Technical Report</span>
                        <ExternalLink size={14} className="ml-auto" />
                      </a>
                    )}
                    {project.externalUrl && (
                      <a href={project.externalUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-slate-300 hover:text-white text-sm font-bold transition-colors">
                        <ExternalLink size={18} />
                        <span>Source Code (GitHub)</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}