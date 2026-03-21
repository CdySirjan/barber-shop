import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
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
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section className="home" id="home" ref={containerRef}>
      <img src="/assets/img/home-bg.png" alt="Barbershop interior" className="home__bg" />
      <div className="home__shadow"></div>

      <div className="home__container container grid">
        <div className="home__data">
          <img src="/assets/img/home-logo.svg" alt="Barbershop" className="home__logo" />

          <h1 className="home__title">
            HAIRCUT AND BEARD <br />
            SPECIALISTS
          </h1>
          <p className="home__description">
            Barbershop specializing in haircuts, fades, classic shaves, and beard design for men. Our team of professional barbers guarantees impeccable results, tailored to your style, personality, and modern tastes.
          </p>
          <a href="#work" className="button">
            See Our Haircut Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
