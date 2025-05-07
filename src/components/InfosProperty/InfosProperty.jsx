import { PropertiesData } from '../../data/properties/DataProperties';
import { useParams } from 'react-router-dom';
import { Collapse } from '../Collapse/Collapse';
import styles from './InfosProperty.module.scss';


export function PropertyInfos() {
    const { id } = useParams();
    const { data, loading, error } = PropertiesData('logement', id);

    const equipements = () => {
        return data.map((item) => {
            return item.equipments.map((equipement, index) => (
                <div key={index} className={styles.propertyInfoEquipements}>
                    <p>{equipement}</p>
                </div>
            ));
        });
    }

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const logement = data[0];

    return (
        <div className={styles.propertyInfo}>
            <div>
                <h2 className={styles.propertyInfoTitle}>{logement.title}</h2>
                <p>{logement.location}</p>
            </div>
            <div>
                <p className={styles.propertyInfoHost}>{logement.host.name}</p>
                <img src={logement.host.picture} alt={logement.host.name} className={styles.propertyInfoHostImage} />
            </div>
            <div className={styles.propertyInfoTags}>
                {logement.tags.map((tag, index) => (
                    <span key={index} className={styles.propertyInfoTag}>{tag}</span>
                ))}
            </div>
            {/* <Rate /> */}
            {data.map((item) => (
                <div key={item.id}>
                    <Collapse
                        title="Description"
                        content={item.description}
                    />
                    <Collapse
                        title="Description"
                        content={equipements()}
                    />
                </div>
            ))}
        </div>
    );
}
