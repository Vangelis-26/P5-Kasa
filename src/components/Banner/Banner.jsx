import React from 'react';
import BannerImage from '../../assets/banner/banner.jpg';
import styles from './Banner.module.scss';

export function Banner() {
    return (
        <div className={styles.banner}>
            <img className={styles.banner_img} src={BannerImage} alt="Image Bannière" />
            <div className={styles.banner_text}>Chez vous, partout et ailleurs</div>
        </div>
    );
}
