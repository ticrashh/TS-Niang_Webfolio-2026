import { Globe2, Briefcase, MapPinned, Music, Trophy } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-cyan-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* 1. Global Perspective [cite: 10, 11, 12, 13] */}
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300 group">
            <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
              <Globe2 className="text-cyan-400" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Global Perspective</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              My unique international profile has shaped my adaptability and cross-cultural
              communication skills. I've lived in <span className="text-cyan-400 font-semibold">4 countries</span> across
              different continents:
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {['Senegal', 'Ghana', 'Dominican Republic', 'France'].map((country) => (
                <span
                  key={country}
                  className="px-3 py-1 bg-slate-800/50 border border-slate-700 rounded-full text-cyan-300 text-sm"
                >
                  {country}
                </span>
              ))}
            </div>
          </div>

          {/* 2. World Traveler [cite: 10, 11] */}
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300 group">
            <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
              <MapPinned className="text-cyan-400" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">World Traveler</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              My passion for exploration has taken me to{' '}
              <span className="text-cyan-400 font-semibold">17 countries</span> spanning{' '}
              <span className="text-cyan-400 font-semibold">4 continents</span>. Each journey
              has enriched my understanding of diverse cultures and technologies.
            </p>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-slate-800/30 rounded-lg py-3">
                <div className="text-3xl font-bold text-cyan-400">17</div>
                <div className="text-slate-400 text-sm">Countries</div>
              </div>
              <div className="bg-slate-800/30 rounded-lg py-3">
                <div className="text-3xl font-bold text-cyan-400">4</div>
                <div className="text-slate-400 text-sm">Continents</div>
              </div>
            </div>
          </div>

          {/* 3. Early Tech Exposure [cite: 78, 79, 80] */}
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300 group">
            <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
              <Briefcase className="text-cyan-400" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Early Tech Exposure</h3>
            <p className="text-slate-300 leading-relaxed">
              Started with an IT infrastructure internship at{' '}
              <span className="text-cyan-400 font-semibold">Econocom</span>. This included
              exclusive sessions at <span className="text-cyan-400 font-semibold">Microsoft</span> and{' '}
              <span className="text-cyan-400 font-semibold">Apple</span>, exposing me to
              industry best practices early on.
            </p>
          </div>

          {/* 4. Beyond Engineering (NEW SECTION)  */}
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300 group">
            <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
              <Trophy className="text-cyan-400" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Beyond Engineering</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              Passionate about movement and creativity. I'm an active <span className="text-cyan-400 font-semibold">guitar player</span> and 
              a dedicated athlete, practicing <span className="text-cyan-400 font-semibold">Football, Boxing, and BJJ</span>.
            </p>
            <div className="flex gap-4 items-center text-slate-400">
              <div className="flex items-center gap-2">
                <Music size={18} className="text-cyan-400" />
                <span className="text-sm">Guitarist</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy size={18} className="text-cyan-400" />
                <span className="text-sm">Combat Sports</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}