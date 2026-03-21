import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const reveal = (selector, options = {}) => {
        gsap.from(selector, { scrollTrigger: selector, opacity: 0, duration: 1, y: 100, delay: 0.3, ease: 'power2.out', ...options });
      };

      reveal('.about__data > *', { stagger: 0.2 });
      reveal('.about__img', { delay: 0.9 });

      document.querySelectorAll('.about__counter').forEach((el) => {
        gsap.from(el, { textContent: 0, duration: 3, ease: 'power1.out', snap: { textContent: 1 }, scrollTrigger: { trigger: el, once: true } });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about section" id="about" ref={containerRef}>
      <div className="about__container container grid">
        <div className="about__data">
          <h2 className="section__title">
            About OUR<br />LOCAL BARBORSHOP
          </h2>
          <p className="about__description">
            At our barbershop, we combine the tradition of classic haircuts with modern trends to offer you a unique experience. Every service is designed to highlight your personality.
          </p>

          <div className="about__info">
            <div className="about__box">
              <p className="about__number">
                <span className="about__counter">99</span><span>%</span>
              </p>
              <h3 className="about__subtitle">CUSTOMER<br />SATISFACTION</h3>
            </div>

            <div className="about__box">
              <p className="about__number">
                <span className="about__counter">7</span><span>+ </span>
              </p>
              <h3 className="about__subtitle">YEAR OF<br />EXPERIENCE</h3>
            </div>
          </div>
        </div>
        <img src="/assets/img/about-img.png" alt="Haircut at a Barbershop" className="about__img" />
      </div>
    </section>
  );
};

export default About;
