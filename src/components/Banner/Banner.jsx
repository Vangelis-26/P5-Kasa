import React from 'react';
import BannerImageHome from '../../assets/banner/banner.jpg';
import BannerImageAbout from '../../assets/banner/banner_about.jpg';
import styles from './Banner.module.scss';

export function Banner() {

    const [homepage, setHomepage] = React.useState(false);

    React.useEffect(() => {
        const path = window.location.pathname;
        if (path === '/') {
            setHomepage(true);
        } else {
            setHomepage(false);
        }
    }, []);

    return (
        <div className={styles.banner}>
            <img className={styles.banner_img} src={homepage ? BannerImageHome : BannerImageAbout} alt="Image Bannière" />
            {homepage && (<div className={styles.banner_text}>Chez vous, partout et ailleurs</div>)}
        </div>
    );
}
