import React from 'react';
import Logo from '../../assets/logo/logo-footer.svg';
import styles from './Footer.module.scss';


export function Footer() {
    return (
        <footer>
            <img className={styles.footer_img} src={Logo} alt="Logo Kasa" />
            <p className={styles.footer_copyright}>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}
