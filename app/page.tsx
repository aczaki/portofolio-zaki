import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Workflow from './components/Workflow';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <About />
        <Skills />
        <Projects />
        <Workflow />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
