import React from 'react';

import './header.css';
import logo from './Logo.png';

const Header = () => (
    <header className="header">
      <img className="header__logo-img" src={logo} alt="Logo"/>
    </header>
)

export default Header;
