import { useLayoutEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const reveal = (selector, options = {}) => {
        gsap.from(selector, { scrollTrigger: selector, opacity: 0, duration: 1, y: 100, delay: 0.3, ease: 'power2.out', ...options });
      };

      reveal('.service__swiper', { delay: 0.6, stagger: 0.2 });
      reveal('.service__data .section__title', { delay: 0.9 });
      reveal('.service__plan', { delay: 1.2, stagger: 0.1 });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="service section" id="service" ref={containerRef} style={{ backgroundColor: 'var(--beige-color)' }}>
      <div className="service__container container grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', alignItems: 'center', columnGap: '4rem' }}>
        
        {/* Testimonial Box (Left) */}
        <div className="service__swiper swiper" style={{ backgroundColor: '#f9963d', borderRadius: '1.5rem', padding: '3rem 2rem', position: 'relative' }}>
          <Swiper
            modules={[Navigation, Pagination]}
            loop={true}
            slidesPerView={1}
            spaceBetween={56}
            grabCursor={true}
            pagination={{ el: '.service-pagination', clickable: true }}
            navigation={{ nextEl: '.service-next', prevEl: '.service-prev' }}
          >
            <SwiperSlide className="service__testimonial">
              <p className="service__testimonial-description" style={{ marginBottom: '4.5rem', color: 'var(--title-color)', fontWeight: 500, lineHeight: 1.6 }}>
                Excellent barbershop; the atmosphere feels authentic from the moment you walk in. The service is professional, and the results are top-notch. Definitely a place you'll always want to return to.
              </p>
              <h3 className="service__testimonial-name" style={{ fontWeight: 700, color: 'var(--title-color)', fontSize: '1.25rem' }}>Ram Pariyar</h3>
            </SwiperSlide>
            <SwiperSlide className="service__testimonial">
              <p className="service__testimonial-description" style={{ marginBottom: '4.5rem', color: 'var(--title-color)', fontWeight: 500, lineHeight: 1.6 }}>
                The best haircut experience I've had in years. The attention to detail is unmatched, and I always leave feeling fresh and confident for my next match.
              </p>
              <h3 className="service__testimonial-name" style={{ fontWeight: 700, color: 'var(--title-color)', fontSize: '1.25rem' }}>Paras Khadka</h3>
            </SwiperSlide>
            <SwiperSlide className="service__testimonial">
              <p className="service__testimonial-description" style={{ marginBottom: '4.5rem', color: 'var(--title-color)', fontWeight: 500, lineHeight: 1.6 }}>
                Great place, great people! They perfectly understand the style I want and the service is extremely professional. Highly recommended for a perfect look.
              </p>
              <h3 className="service__testimonial-name" style={{ fontWeight: 700, color: 'var(--title-color)', fontSize: '1.25rem' }}>Rohit Paudel</h3>
            </SwiperSlide>
          </Swiper>

          <div style={{ position: 'absolute', bottom: '2rem', right: '2rem', display: 'flex', gap: '0.75rem', zIndex: 10 }}>
            <div className="swiper-button-prev service-prev" style={{ position: 'static', margin: 0, width: '32px', height: '32px', borderRadius: '50%', border: '2px solid var(--title-color)', display: 'flex', alignItems:'center', justifyContent:'center', cursor:'pointer' }}><i className="ri-arrow-left-line" style={{ color: 'var(--title-color)' }}></i></div>
            <div className="swiper-button-next service-next" style={{ position: 'static', margin: 0, width: '32px', height: '32px', borderRadius: '50%', border: '2px solid var(--title-color)', display: 'flex', alignItems:'center', justifyContent:'center', cursor:'pointer' }}><i className="ri-arrow-right-line" style={{ color: 'var(--title-color)' }}></i></div>
          </div>
          <div className="swiper-pagination service-pagination" style={{ bottom: '2rem', left: '0', right: '0', position: 'absolute' }}></div>
        </div>

        {/* Pricing List (Right) */}
        <div className="service__data">
          <h2 className="section__title" style={{ textAlign: 'left', fontSize: '2.5rem', marginBottom: '2.5rem' }}>OUR SERVICES</h2>
          <ul className="service__prices" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <li className="service__plan" style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
              <h3 className="service__name" style={{ fontSize: '1rem', fontWeight: 600 }}>ADULT HAIRCUT</h3>
              <p className="service__price" style={{ fontWeight: 600 }}>NRS 150</p>
            </li>
            <li className="service__plan" style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
              <h3 className="service__name" style={{ fontSize: '1rem', fontWeight: 600 }}>CHILDREN HAIRCUT</h3>
              <p className="service__price" style={{ fontWeight: 600 }}>NRS 100</p>
            </li>
            <li className="service__plan" style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
              <h3 className="service__name" style={{ fontSize: '1rem', fontWeight: 600 }}>NECK SHAVE</h3>
              <p className="service__price" style={{ fontWeight: 600 }}>NRS 50</p>
            </li>
            <li className="service__plan" style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
              <h3 className="service__name" style={{ fontSize: '1rem', fontWeight: 600 }}>BEARD TRIM</h3>
              <p className="service__price" style={{ fontWeight: 600 }}>NRS 100</p>
            </li>
            <li className="service__plan" style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
              <h3 className="service__name" style={{ fontSize: '1rem', fontWeight: 600 }}>HAIRCUT + SHAVE</h3>
              <p className="service__price" style={{ fontWeight: 600 }}>NRS 200</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
