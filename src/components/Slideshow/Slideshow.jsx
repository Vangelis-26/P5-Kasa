import { useState } from 'react';
import styles from './Slideshow.module.scss';
import Left from '../../assets/vector/vectorLeftSlide.svg';
import Right from '../../assets/vector/vectorRightSlide.svg';

export function Slideshow({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className={styles.slideshow}>
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className={styles.slideshow_img} />
            <button onClick={prevImage} className={styles.slideshow_btnLeft}><img src={Left} alt='Précédent' /></button>
            <button onClick={nextImage} className={styles.slideshow_btnRight}><img src={Right} alt='Suivant' /></button>
            <p className={styles.slideshow_pages}>{currentIndex + 1}/{images.length}</p>
        </div>
    );
}
