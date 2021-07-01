import React from 'react';
import '../assets/styles/components/Header.scss'
import logo from '../assets/Images/FroggerLogo.png';

const Header = () => (
    <header className="header">
        <img className="header_img" src={logo} alt="Frogger Logo"/>
    </header>
);

export default Header;