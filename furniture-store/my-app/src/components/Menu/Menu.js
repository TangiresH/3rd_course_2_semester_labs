import React, { useState } from 'react';
import './Menu.css';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  return (
    <nav className="menu">
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`menu-list ${isOpen ? 'open' : ''}`}>
        <li className="menu-item">
          <a href="#home" onClick={toggleSubmenu}>Меблі</a>
          <ul className={`submenu-list ${isSubmenuOpen ? 'open' : ''}`}>
            <li className="submenu-item"><a href="#furniture-store-wardrobe">Шафи</a></li>
            <li className="submenu-item"><a href="#furniture-store-sofa">Дивани</a></li>
            <li className="submenu-item"><a href="#furniture-store-chairs">Стільці</a></li>
            <li className="submenu-item"><a href="#table">Столи</a></li>
          </ul>
        </li>
        <li className="menu-item"><a href="#about">Акції</a></li>
        <li className="menu-item"><a href="#services">Про нас</a></li>
        <li className="menu-item"><a href="#contact">Контактна інформація</a></li>
      </ul>
    </nav>
  );
};

export default Menu;
