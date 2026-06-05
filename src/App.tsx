import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import RoadAssistance from './components/RoadAssistance';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-brand-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <RoadAssistance />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
