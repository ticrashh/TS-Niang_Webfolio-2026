import { Linkedin, Mail, FileText, Download, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMGFmZmZmIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 font-medium mb-6">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
            Engineering Student at SeaTech
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold text-white mb-8 leading-tight">
            Théo-Sambacor <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">NIANG</span>
          </h1>

          <h2 className="text-2xl sm:text-3xl text-slate-300 mb-6 font-light">
            Signal Processing & <span className="text-cyan-400 font-semibold">Computer Vision</span> Specialist
          </h2>

          <p className="text-lg text-slate-400 mb-12 leading-relaxed max-w-2xl border-l-4 border-cyan-500/30 pl-6">
            Currently seeking a <span className="text-white font-semibold">4-month international internship</span> starting 
            <span className="text-cyan-400"> May 1st, 2026</span> in Data Science or Maritime Technology.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            {/* Bouton CV Principal */}
            <a
              href="/CV_NIANG.pdf"
              download="CV_Theo_NIANG.pdf"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl text-white font-bold text-lg hover:from-cyan-400 hover:to-cyan-500 transition-all duration-300 shadow-lg shadow-cyan-500/25 group"
            >
              <FileText size={24} />
              <span>Download CV</span>
              <Download size={20} className="group-hover:translate-y-1 transition-transform" />
            </a>

            {/* Liens Sociaux */}
            <div className="flex items-center gap-6">
              <a href="https://www.linkedin.com/in/tsniang" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800/50 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-all duration-300">
                <Linkedin size={24} />
              </a>
              <a href="mailto:niangtheo@gmail.com" className="p-3 bg-slate-800/50 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-all duration-300">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-slate-400 hover:text-cyan-400 transition-colors p-2">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
}