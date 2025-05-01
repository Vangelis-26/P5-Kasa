import React from 'react';
import Logo from '../assets/logo.svg';

function Footer() {
    return (
        <footer>
            <img src={Logo} alt="Logo Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;
