import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Works from './components/Works';
import Services from './components/Services';
import Expert from './components/Expert';
import Contact from './components/Contact';
import Footer from './components/Footer';

const MainLayout = () => {
  return (
    <>
      <Home />
      <About />
      <Works />
      <Services />
      <Expert />
      <Contact />
    </>
  );
};

function App() {
  const [showScroll, setShowScroll] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY >= 350);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const sectionId = pathname === '/' ? 'home' : pathname.replace('/', '');
    const element = document.getElementById(sectionId);
    
    // Slight delay ensures DOM elements and GSAP triggers are ready
    setTimeout(() => {
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo(0, 0);
      }
    }, 100);
  }, [pathname]);

  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/about" element={<MainLayout />} />
          <Route path="/work" element={<MainLayout />} />
          <Route path="/services" element={<MainLayout />} />
          <Route path="/expert" element={<MainLayout />} />
          <Route path="/contact" element={<MainLayout />} />
          <Route path="*" element={<MainLayout />} />
        </Routes>
      </main>
      <Footer />
      
      <a href="#" className={`scrollup ${showScroll ? 'show-scroll' : ''}`} id="scroll-up" onClick={scrollToTop}>
        <i className="ri-arrow-up-line"></i>
      </a>
    </>
  );
}

export default App;
