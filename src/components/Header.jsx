import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 50);
    };

    // Check immediately in case layout shifted or scroll retained
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  return (
    <header className={`header ${isScrolled ? 'scroll-header' : ''}`} id="header">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo" onClick={() => setIsMenuOpen(false)}>BARBERSHOP</NavLink>

        <div className={`nav__menu ${isMenuOpen ? 'show-menu' : ''}`} id="nav-menu">
          <ul className="nav__list">
            <li><NavLink to="/" className={({isActive}) => `nav__link ${isActive ? 'active-link' : ''}`} onClick={() => setIsMenuOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/about" className={({isActive}) => `nav__link ${isActive ? 'active-link' : ''}`} onClick={() => setIsMenuOpen(false)}>About</NavLink></li>
            <li><NavLink to="/work" className={({isActive}) => `nav__link ${isActive ? 'active-link' : ''}`} onClick={() => setIsMenuOpen(false)}>Work</NavLink></li>
            <li><NavLink to="/services" className={({isActive}) => `nav__link ${isActive ? 'active-link' : ''}`} onClick={() => setIsMenuOpen(false)}>Services</NavLink></li>
            <li><NavLink to="/expert" className={({isActive}) => `nav__link ${isActive ? 'active-link' : ''}`} onClick={() => setIsMenuOpen(false)}>Experts</NavLink></li>
            <li><NavLink to="/contact" className={({isActive}) => `nav__link ${isActive ? 'active-link' : ''}`} onClick={() => setIsMenuOpen(false)}>Contact us</NavLink></li>
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
