import { useEffect, useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 50);

      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scroll-header' : ''}`} id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">BARBORSHOP</a>

        <div className={`nav__menu ${isMenuOpen ? 'show-menu' : ''}`} id="nav-menu">
          <ul className="nav__list">
            <li><a href="#home" className={`nav__link ${activeSection === 'home' ? 'active-link' : ''}`} onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#about" className={`nav__link ${activeSection === 'about' ? 'active-link' : ''}`} onClick={() => setIsMenuOpen(false)}>About</a></li>
            <li><a href="#work" className={`nav__link ${activeSection === 'work' ? 'active-link' : ''}`} onClick={() => setIsMenuOpen(false)}>Work</a></li>
            <li><a href="#expert" className={`nav__link ${activeSection === 'expert' ? 'active-link' : ''}`} onClick={() => setIsMenuOpen(false)}>Experts</a></li>
            <li><a href="#contact" className={`nav__link ${activeSection === 'contact' ? 'active-link' : ''}`} onClick={() => setIsMenuOpen(false)}>Contact us</a></li>
          </ul>

          <button className="nav__close" id="nav-close" onClick={() => setIsMenuOpen(false)}>
            <i className="ri-close-large-line"></i>
          </button>
        </div>

        <button className="nav__toggle" id="nav-toggle" onClick={() => setIsMenuOpen(true)}>
          <i className="ri-apps-2-fill"></i>
        </button>
      </nav>
    </header>
  );
};

export default Header;
