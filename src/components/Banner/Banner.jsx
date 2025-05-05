import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Importez useLocation
import BannerImageHome from '../../assets/banner/banner.jpg';
import BannerImageAbout from '../../assets/banner/banner_about.jpg';
import styles from './Banner.module.scss';

export function Banner() {
    const location = useLocation();
    const [homepage, setHomepage] = useState(location.pathname === '/');

    useEffect(() => {
        setHomepage(location.pathname === '/');
    }, [location.pathname]);
    return (
        <div className={styles.banner}>
            <img className={styles.banner_img} src={homepage ? BannerImageHome : BannerImageAbout} alt="Image Bannière" />
            {homepage && (<div className={styles.banner_text}>Chez vous, partout et ailleurs</div>)}
        </div>
    );
}
