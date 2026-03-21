const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container grid">
        <div className="footer__data">
          <a href="#" className="footer__logo">BARBERSHOP</a>
          <p className="footer__description">Where your haircut style <br /> becomes tradition.</p>
          <address className="footer__email" style={{ fontStyle: 'normal' }}>
            <a href="mailto:info@barbershop.com">info@barbershop.com</a>
          </address>
        </div>

        <div className="footer__content">
          <div>
            <h3 className="footer_title">Menu</h3>
            <ul className="footer__links">
              <li><a href="#home" className="footer__link">Home</a></li>
              <li><a href="#about" className="footer__link">About</a></li>
              <li><a href="#work" className="footer__link">Work</a></li>
              <li><a href="#expert" className="footer__link">Experts</a></li>
              <li><a href="#contact" className="footer__link">Contact us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="footer_title">Write to us</h3>
            <ul className="footer__links">
              <li><a href="https://wa.me/9779845764598" className="footer__link">Whats App</a></li>
              <li><a href="https://messenger.com" className="footer__link">Messenger</a></li>
              <li><a href="https://telegram.org" className="footer__link">Telegram</a></li>
              <li><a href="https://gmail.com" className="footer__link">Gmail</a></li>
            </ul>
          </div>

          <div>
            <h3 className="footer_title">Social</h3>
            <ul className="footer__social">
              <li><a href="https://facebook.com" target="_blank" className="footer__social-link"><i className="ri-facebook-circle-fill"></i></a></li>
              <li><a href="https://twitter.com" target="_blank" className="footer__social-link"><i className="ri-twitter-fill"></i></a></li>
              <li><a href="https://instagram.com" target="_blank" className="footer__social-link"><i className="ri-instagram-fill"></i></a></li>
              <li><a href="https://linkedin.com" target="_blank" className="footer__social-link"><i className="ri-linkedin-fill"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      <small className="footer__copy">&#169; All Rights Reserved By Barbershop</small>
    </footer>
  );
};

export default Footer;
