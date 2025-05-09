
import StarFull from '../../assets/rates/StarFull.svg';
import StarEmpty from '../../assets/rates/starEmpty.svg';
import styles from './Rate.module.scss';

export function Rate({ rating, className }) {

    const totalStars = 5;
    const stars = []

    for (let i = 1; i <= totalStars; i++) {
        if (i <= rating) {
            stars.push(<img key={i} src={StarFull} alt="star" className={styles.star} />);
        } else {
            stars.push(<img key={i} src={StarEmpty} alt="star" className={styles.star} />);
        }
    }
    return (
        <div className={className} >
            {stars}
        </div>
    );
}
