import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Languages from './components/Languages';
import Leadership from './components/Leadership';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    document.title = 'Théo-Sambacor NIANG | Engineering Portfolio';

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Education />
      <Languages />
      <Leadership />
      <Contact />
    </div>
  );
}

export default App;
