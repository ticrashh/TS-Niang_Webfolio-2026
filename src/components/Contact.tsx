import { Mail, Linkedin, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 via-transparent to-transparent"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-cyan-400 mx-auto mb-6"></div>
          <p className="text-slate-400 text-lg">
            Open to internship opportunities and professional collaborations
          </p>
        </div>

        <div className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300">
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <a
              href="mailto:niangtheo@gmail.com"
              className="flex items-center gap-4 p-6 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 transition-colors flex-shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <div className="text-sm text-slate-400 mb-1">Email</div>
                <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                  niangtheo@gmail.com
                </div>
              </div>
            </a> 

            <a
              href="https://www.linkedin.com/in/tsniang"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 transition-colors flex-shrink-0">
                <Linkedin size={24} />
              </div>
              <div>
                <div className="text-sm text-slate-400 mb-1">LinkedIn</div>
                <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                  Connect with me
                </div>
              </div>
            </a>
          </div>

          <div className="flex items-center justify-center gap-3 p-6 bg-slate-800/30 rounded-xl">
            <MapPin className="text-cyan-400" size={20} />
            <span className="text-slate-300">Based in France</span>
            <span className="text-slate-500">•</span>
            <span className="text-cyan-400 font-medium">Available for International Opportunities</span>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-400 mb-6">
            Seeking a 4-month international internship starting May 1st, 2025
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full text-white font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
            <Calendar size={20} />
            <span>Available from May 2025</span>
          </div>
        </div>
      </div>

      <footer className="mt-24 pt-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-slate-500 text-sm">
            <p>&copy; 2025 Théo-Sambacor NIANG. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </section>
  );
}

function Calendar({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  );
}
