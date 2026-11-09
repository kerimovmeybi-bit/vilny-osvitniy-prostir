
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { JoinSection } from './components/JoinSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Projects />
        <JoinSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;