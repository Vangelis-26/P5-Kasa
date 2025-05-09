import { useLocation } from 'react-router-dom'; // Importez useLocation
import BannerImageHome from '../../assets/banner/banner.jpg';
import BannerImageAbout from '../../assets/banner/banner_about.jpg';
import styles from './Banner.module.scss';

export function Banner() {

    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <div className={styles.banner}>
            <img className={styles.banner_img} src={isHomePage ? BannerImageHome : BannerImageAbout} alt="Image Bannière" />
            {isHomePage && (<h1 className={styles.banner_text}>Chez vous, partout et ailleurs</h1>)}
        </div>
    );
}
