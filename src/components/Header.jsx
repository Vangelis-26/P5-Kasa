import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo/logo-header.svg';
import './styles/components/_Header.scss';

export function Header() {

    return (
        <header>
            <img src={Logo} alt="Logo Kasa" />
            <nav className='header_nav'>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => (isActive ? 'active-link' : '')}
                        >
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => (isActive ? 'active-link' : '')}
                        >
                            A Propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
