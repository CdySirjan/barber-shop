import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Expert = () => {
  const containerRef = useRef(null);
  const experts = [
    { img: 1, name: 'Aarav Sharma', role: 'Senior Barber' },
    { img: 2, name: 'Suman Thapa', role: 'Master Barber' },
    { img: 3, name: 'Rohan Gurung', role: 'Senior Stylist' },
    { img: 4, name: 'Prakash Karki', role: 'Master Barber' }
  ];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const reveal = (selector, options = {}) => {
        gsap.from(selector, { scrollTrigger: selector, opacity: 0, duration: 1, y: 100, delay: 0.3, ease: 'power2.out', ...options });
      };

      reveal('.expert .section__title', {});
      reveal('.expert__description', { delay: 0.6 });
      reveal('.expert__card', { delay: 0.9, stagger: 0.2 });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="expert section" id="expert" ref={containerRef}>
      <div className="expert__container container grid">
        <div>
          <h2 className="section__title">MEET OUR BARBERS</h2>
          <p className="expert__description">
            Every barber on our team is committed to providing an exceptional grooming experience, ensuring you leave our shop looking and feeling your best.
          </p>
        </div>

        <div className="expert__content">
          {experts.map((expert) => (
            <article className="expert__card" key={expert.name}>
              <img src={`/assets/img/expert-img-${expert.img}.png`} alt="Expert barbers" className="expert__img" />
              <div className="expert__data">
                <div className="expert__info">
                  <h3 className="expert__name">{expert.name}</h3>
                  <p className="expert__profession">{expert.role}</p>
                </div>
                <ul className="expert__social">
                  <li><a href="https://www.linkedin.com/" target="_blank" className="expert__link"><i className="ri-linkedin-box-fill"></i></a></li>
                  <li><a href="https://www.instagram.com/" target="_blank" className="expert__link"><i className="ri-instagram-line"></i></a></li>
                  <li><a href="https://www.facebook.com/" target="_blank" className="expert__link"><i className="ri-facebook-circle-fill"></i></a></li>
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expert;
