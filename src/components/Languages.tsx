import { Languages as LanguagesIcon } from 'lucide-react';

interface Language {
  name: string;
  level: string;
  proficiency: number;
}

export default function Languages() {
  const languages: Language[] = [
    { name: 'French', level: 'Native', proficiency: 100 },      // Langue maternelle 
    { name: 'English', level: 'Fluent', proficiency: 90 },     // Fluent [cite: 40]
    { name: 'Spanish', level: 'Fluent', proficiency: 80 },     // Fluent [cite: 41]
    { name: 'German', level: 'Good', proficiency: 50 },        // Good 
    { name: 'Chinese', level: 'Basics', proficiency: 20 }      // Rudimentary 
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/10 rounded-2xl mb-6">
            <LanguagesIcon className="text-cyan-400" size={32} />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Language <span className="text-cyan-400">Proficiency</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-cyan-400 mx-auto mb-6"></div>
          <p className="text-slate-400 text-lg">
            Multilingual capabilities enabling international collaboration
          </p>
        </div>

        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 space-y-6">
          {languages.map((language, index) => (
            <div key={index} className="group">
              <div className="flex justify-between items-center mb-3">
                <div>
                  <span className="text-lg font-semibold text-white">{language.name}</span>
                  <span className="ml-3 text-sm text-cyan-400">{language.level}</span>
                </div>
                <span className="text-slate-400 text-sm font-medium">{language.proficiency}%</span>
              </div>
              <div className="w-full h-3 bg-slate-800/50 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full transition-all duration-1000 ease-out relative overflow-hidden group-hover:from-cyan-400 group-hover:to-cyan-300"
                  style={{ width: `${language.proficiency}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-slate-400 text-sm">
            Multilingual proficiency developed through international living and education
          </p>
        </div>
      </div>
    </section>
  );
}
