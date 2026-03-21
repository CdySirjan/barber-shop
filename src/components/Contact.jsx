import { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name cannot be empty';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email cannot be empty';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number cannot be empty';
    } else if (!/^98\d{8}$/.test(formData.phone)) {
      newErrors.phone = 'Phone must be exactly 10 digits and start with 98';
    }
    
    if (!formData.message.trim()) newErrors.message = 'Message cannot be empty';
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert('Message sent successfully!');
      setShowForm(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setErrors({});
    }
  };

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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
            <button className="button" onClick={() => setShowForm(!showForm)} style={{ cursor: 'pointer', width: '220px', justifyContent: 'center' }}>
              {showForm ? 'Close Form' : 'Send us a Message'}
            </button>
            <a href="https://wa.me/9779845764598" target="_blank" rel="noreferrer" className="button" style={{ backgroundColor: '#25D366', color: '#fff', width: '220px', justifyContent: 'center' }}>
              <i className="ri-whatsapp-fill" style={{ marginRight: '0.5rem', fontSize: '1.25rem' }}></i> Book Via WhatsApp
            </a>
          </div>

          {showForm && (
            <form className="contact__form" style={{ marginTop: '2rem', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1rem', background: 'var(--beige-color-light)', padding: '2rem', borderRadius: '1.5rem', width: '100%', animation: 'fadeIn 0.4s ease-out' }} onSubmit={handleSubmit} noValidate>
              <div className="contact__form-div">
                <label className="contact__form-tag" style={{ display: 'block', fontSize: '14px', marginBottom: '0.5rem', color: 'var(--title-color)', fontWeight: 'var(--font-medium)' }}>Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Insert your name" className="contact__form-input" style={{ width: '100%', padding: '1rem', borderRadius: '0.5rem', border: `1px solid ${errors.name ? 'red' : 'var(--border-color)'}`, background: 'var(--body-color)', color: 'var(--text-color)', outline: 'none' }} />
                {errors.name && <span style={{ color: 'red', fontSize: '12px', marginTop: '0.25rem', display: 'block' }}>{errors.name}</span>}
              </div>
              <div className="contact__form-div">
                <label className="contact__form-tag" style={{ display: 'block', fontSize: '14px', marginBottom: '0.5rem', color: 'var(--title-color)', fontWeight: 'var(--font-medium)' }}>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Insert your email" className="contact__form-input" style={{ width: '100%', padding: '1rem', borderRadius: '0.5rem', border: `1px solid ${errors.email ? 'red' : 'var(--border-color)'}`, background: 'var(--body-color)', color: 'var(--text-color)', outline: 'none' }} />
                {errors.email && <span style={{ color: 'red', fontSize: '12px', marginTop: '0.25rem', display: 'block' }}>{errors.email}</span>}
              </div>
              <div className="contact__form-div">
                <label className="contact__form-tag" style={{ display: 'block', fontSize: '14px', marginBottom: '0.5rem', color: 'var(--title-color)', fontWeight: 'var(--font-medium)' }}>Phone Number</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Insert your phone number" className="contact__form-input" style={{ width: '100%', padding: '1rem', borderRadius: '0.5rem', border: `1px solid ${errors.phone ? 'red' : 'var(--border-color)'}`, background: 'var(--body-color)', color: 'var(--text-color)', outline: 'none' }} />
                {errors.phone && <span style={{ color: 'red', fontSize: '12px', marginTop: '0.25rem', display: 'block' }}>{errors.phone}</span>}
              </div>
              <div className="contact__form-div contact__form-area">
                <label className="contact__form-tag" style={{ display: 'block', fontSize: '14px', marginBottom: '0.5rem', color: 'var(--title-color)', fontWeight: 'var(--font-medium)' }}>Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} cols="30" rows="5" placeholder="Write your message" className="contact__form-input" style={{ width: '100%', padding: '1rem', borderRadius: '0.5rem', border: `1px solid ${errors.message ? 'red' : 'var(--border-color)'}`, background: 'var(--body-color)', color: 'var(--text-color)', outline: 'none', resize: 'none' }}></textarea>
                {errors.message && <span style={{ color: 'red', fontSize: '12px', marginTop: '0.25rem', display: 'block' }}>{errors.message}</span>}
              </div>
              <button type="submit" className="button" style={{ alignSelf: 'flex-start', cursor: 'pointer', marginTop: '1rem', width: '100%', justifyContent: 'center' }}>
                Send Message
              </button>
            </form>
          )}
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
