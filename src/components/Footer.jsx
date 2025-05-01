import React from 'react';
import Logo from '../assets/logo-footer.svg';
import './styles/components/_Footer.scss';


function Footer() {
    return (
        <footer>
            <img src={Logo} alt="Logo Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;
