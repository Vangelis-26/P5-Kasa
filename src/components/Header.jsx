import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo-header.svg';
import './styles/components/_Header.scss';

function Header() {
    return (
        <header>
            <img src={Logo} alt="Logo Kasa" />
            <nav>
                <ul>
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/about">A Propos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
