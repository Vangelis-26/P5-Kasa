import { Link } from 'react-router-dom';
import { usePropertiesData } from '../../data/properties/DataProperties';
import styles from './Card.module.scss';

export function Card() {
    const { data, loading, error } = usePropertiesData('logements');
    if (loading) {
        return
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        data.map((logement) => (
            <Link to={`/logement/${logement.id}`} key={logement.id} className={styles.card}>
                <div className={styles.image_wrapper}>
                    <img src={logement.cover} alt={logement.title} className={styles.card_image} />
                    <h2 className={styles.card_title}>{logement.title}</h2>
                </div>
            </Link>
        ))
    );
}
