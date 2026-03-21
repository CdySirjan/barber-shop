import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Works from './components/Works';
import Services from './components/Services';
import Expert from './components/Expert';
import Contact from './components/Contact';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [showScroll, setShowScroll] = useState(false);

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
    let ctx = gsap.context(() => {
      // GSAP Animations
      const tl = gsap.timeline({});
      tl.fromTo('.home__bg, .home__shadow', { y: -800, scale: 0.3, opacity: 0 }, { y: 0, scale: 0.3, opacity: 1, duration: 1, ease: 'power3.out' });
      tl.to('.home__bg, .home__shadow', { scale: 1, duration: 1, ease: 'back.out(0.5)' });
      tl.to('.home__bg', { scale: 1.08, duration: 8, ease: 'power1.inOut', repeat: -1, yoyo: true, transformOrigin: 'center center' });

      const reveal = (selector, options = {}) => {
        gsap.from(selector, { scrollTrigger: selector, opacity: 0, duration: 1, y: 100, delay: 0.3, ease: 'power2.out', ...options });
      };

      reveal('.home__logo', { y: 0, scale: 0.3, delay: 1.9, ease: 'elastic.out(0.8,0.5)' });
      reveal('.home__title', { delay: 2.2 });
      reveal('.home__description', { delay: 2.5 });
      reveal('.home__data .button', { delay: 2.8 });

      reveal('.about__data > *', { stagger: 0.2 });
      reveal('.about__img', { delay: 0.9 });

      document.querySelectorAll('.about__counter').forEach((el) => {
        gsap.from(el, { textContent: 0, duration: 3, ease: 'power1.out', snap: { textContent: 1 }, scrollTrigger: { trigger: el, once: true } });
      });

      reveal('.work__data .section__title', {});
      reveal('.work__description', { delay: 0.6 });
      reveal('.work__data .swiper-pagination', { delay: 0.9 });
      reveal('.work__data .swiper-button-prev, .work__data .swiper-button-next', { delay: 1.2 });
      reveal('.work__swiper', { delay: 0.9 });

      reveal('.service__data .section__title', {});
      reveal('.service__plan', { delay: 0.6, stagger: 0.2 });
      reveal('.service__swiper', { delay: 0.9, stagger: 0.2 });

      reveal('.expert .section__title', {});
      reveal('.expert__description', { delay: 0.6 });
      reveal('.expert__card', { delay: 0.9, stagger: 0.2 });

      reveal('.contact__data .section__title', {});
      reveal('.contact__description', { delay: 0.6 });
      reveal('.contact__data .button', { delay: 0.9, y: 0, scale: 0 });
      reveal('.contact__map', { delay: 0.9 });
      reveal('.contact__card', { delay: 1.2, stagger: 0.2 });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Works />
        <Services />
        <Expert />
        <Contact />
      </main>
      <Footer />
      
      <a href="#" className={`scrollup ${showScroll ? 'show-scroll' : ''}`} id="scroll-up" onClick={scrollToTop}>
        <i className="ri-arrow-up-line"></i>
      </a>
    </>
  );
}

export default App;
