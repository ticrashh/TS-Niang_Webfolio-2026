import { Trophy, ShieldCheck, Heart } from 'lucide-react';

export default function Leadership() {
  const initiatives = [
    {
      title: "Combat Sports Coordinator",
      icon: <Trophy className="text-cyan-400" size={28} />,
      description: "Organizing combat sports sessions and establishing strategic partnerships with local gyms. Managing group dynamics and technical coaching for students.",
      tags: ["Partnerships", "Coaching", "Logistics"]
    },
    {
      title: "Social Commitment & Ethics",
      icon: <Heart className="text-cyan-400" size={28} />,
      description: "Active member of an association committed to fighting sexual and gender-based violence (VSS). Promoting equity, awareness, and a safe environment within the community.",
      tags: ["Social Impact", "Awareness", "Ethics"]
    },
    {
      title: "Educational Responsibility",
      icon: <ShieldCheck className="text-cyan-400" size={28} />,
      description: "Academic support teacher and study hall monitor for the French NAVY. Ensuring discipline and providing pedagogical guidance for student groups.",
      tags: ["Marine Nationale", "Pedagogy", "Reliability"]
    }
  ];

  return (
    <section id="leadership" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-cyan-500/5"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Leadership & <span className="text-cyan-400">Initiatives</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-cyan-400 mx-auto mb-6"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Combining discipline, social responsibility, and educational transmission
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {initiatives.map((item, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-800/80 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all duration-300 group relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-slate-300 leading-relaxed mb-6 text-sm">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-800/50 border border-slate-700 rounded-full text-cyan-300 text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}