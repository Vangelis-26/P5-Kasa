import { Card } from '../Card/Card';
import styles from './Gallery.module.scss';

export function Gallery() {
    return (
        <div className={styles.gallery}>
            <Card />
        </div>
    );
}
