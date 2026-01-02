import { GraduationCap, Code2, Database, Calculator, Monitor } from 'lucide-react';

export default function Education() {
  const skills = [
    { name: 'Python', tools: 'NumPy, SciPy, PyTorch, OpenCV', icon: <Code2 size={24} /> },
    { name: 'MATLAB', tools: 'Simulink, Signal Processing', icon: <Calculator size={24} /> },
    { name: 'SQL', tools: 'PostgreSQL, Database Design', icon: <Database size={24} /> },
    { name: 'C/C++', tools: 'Systems Programming, Algorithms', icon: <Code2 size={24} /> },
  ];

  return (
    <section id="education" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-cyan-500/5"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Education & <span className="text-cyan-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-cyan-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* SeaTech Card */}
          <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all duration-300">
            <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6">
              <GraduationCap className="text-cyan-400" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">SeaTech School of Engineering</h3>
            <p className="text-cyan-400 font-medium mb-1">Data Science & Marine Technology</p>
            <p className="text-slate-500 text-sm mb-4">2024 — 2027</p>
            <p className="text-slate-300 leading-relaxed">
              Combining Marine Technology & Management with advanced training in Data Science, 
              Data Processing, and Information Systems. Developing expertise in autonomous systems 
              and maritime surveillance AI.
            </p>
          </div>

          {/* Paul Sabatier Card */}
          <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all duration-300">
            <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6">
              <GraduationCap className="text-cyan-400" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Paul Sabatier University</h3>
            <p className="text-cyan-400 font-medium mb-1">Intensive University Preparatory Program (CUPGE)</p>
            <p className="text-slate-500 text-sm mb-4">2021 — 2024</p>
            <p className="text-slate-300 leading-relaxed">
              Completed an intensive program in advanced Mathematics and Physics. 
              Obtained a Bachelor's degree in Mechanical Engineering with a specialization 
              in analytical mechanics and renewable energies.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Technical <span className="text-cyan-400">Stack</span>
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 transition-colors flex-shrink-0">
                    {skill.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">{skill.name}</h4>
                    <p className="text-slate-400 text-sm">{skill.tools}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center text-cyan-400">
                <Monitor size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Additional Tools</h4>
                <p className="text-slate-400 text-sm">
                  Qt (PyQt5) , LaTeX, Git, Linux, Docker, Jupyter Notebooks
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}