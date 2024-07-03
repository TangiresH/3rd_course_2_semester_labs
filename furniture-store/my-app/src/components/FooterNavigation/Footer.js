import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__section">
          <h3>Контактна інформація</h3>
          <p>Телефон: +1234567890</p>
          <p>Email: store.furniture@example.com</p>
          <p>Адреса: вул. Назва, місто, країна</p>
        </div>
        <div className="footer__section">
          <h3>Соціальні мережі</h3>
          <ul className="social-links">
            <li><a href="https://www.facebook.com/profile.php?id=100010531517072" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.instagram.com/dima.mudryk/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="footer__copyright">
        <p>&copy; 2024 Ваша компанія. Усі права захищені.</p>
      </div>
    </footer>
  );
};

export default Footer;
