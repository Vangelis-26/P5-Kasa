import React from 'react';
import Logo from '../assets/logo/logo-footer.svg';
import './styles/components/_Footer.scss';


function Footer() {
    return (
        <footer>
            <img className='footer_img' src={Logo} alt="Logo Kasa" />
            <p className='footer_copyright'>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;
