import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const reveal = (selector, options = {}) => {
        gsap.from(selector, { scrollTrigger: selector, opacity: 0, duration: 1, y: 100, delay: 0.3, ease: 'power2.out', ...options });
      };

      reveal('.contact__data .section__title', {});
      reveal('.contact__description', { delay: 0.6 });
      reveal('.contact__data .button', { delay: 0.9, y: 0, scale: 0 });
      reveal('.contact__map', { delay: 0.9 });
      reveal('.contact__card', { delay: 1.2, stagger: 0.2 });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="contact section" id="contact" ref={containerRef}>
      <div className="contact__container container grid">
        <div className="contact__data">
          <h2 className="section__title">CONTACT US <br /> FOR A HAIRCUT</h2>
          <p className="contact__description">
            Contact us for a barber service, find us at our nearest location, or write to us through our social media links and book now.
          </p>
          <a href="https://www.whatsapp.com/" target="_blank" className="button">Book Via WhatsApp</a>
        </div>

        <div className="contact__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.3331622925502!2d84.6091046!3d27.6141965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994c30059da4e51%3A0x640739a032499698!2sKhurkhure!5e0!3m2!1sen!2snp!4v1774082062734!5m2!1sen!2snp"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="contact__content">
          <article className="contact__card">
            <div className="contact__icon"><i className="ri-map-pin-2-fill"></i></div>
            <div className="contact__info">
              <h3 className="contact__title">Location</h3>
              <address className="contact__address" style={{ fontStyle: 'normal' }}>
                Khurkhure-8,Chitwan,<br /> Nepal
              </address>
            </div>
          </article>

          <article className="contact__card">
            <div className="contact__icon"><i className="ri-map-pin-time-line"></i></div>
            <div className="contact__info">
              <h3 className="contact__title">OPERATIONAL</h3>
              <p className="contact__address" itemScope itemType="http://schema.org/LocalBusiness">
                <span itemProp="openingHours" content="Mo-Sa 09:00-20:00" style={{ display: 'block' }}>Monday - Saturday: 9:00 AM - 8:00 PM</span>
                <span itemProp="openingHours" content="Su 10:00-18:00" style={{ display: 'block' }}>Sunday: 10:00 AM - 6:00 PM</span>
              </p>
            </div>
          </article>

          <article className="contact__card">
            <div className="contact__icon"><i className="ri-phone-fill"></i></div>
            <div className="contact__info">
              <h3 className="contact__title">CALL US AND BOOK</h3>
              <address className="contact__address" style={{ fontStyle: 'normal' }}>
                <a href="tel:+9779845764598" style={{ display: 'block' }}>+977 9845764598</a>
                <a href="tel:+9779845761905" style={{ display: 'block' }}>+977 9845769905</a>
              </address>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
