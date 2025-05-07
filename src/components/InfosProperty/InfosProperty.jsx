import { PropertiesData } from '../../data/properties/DataProperties';
import { useParams } from 'react-router-dom';
import { Collapse } from '../Collapse/Collapse';
import { Rate } from '../Rate/Rate';
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
    const tags = logement.tags || [];
    console.log(logement.rating);
    return (
        <div className={styles.property}>
            <div className={styles.property_location}>
                <div>
                    <h2 className={styles.property_title}>{logement.title}</h2>
                    <p className={styles.property_city}>{logement.location}</p>
                </div>
                <div className={styles.property_identity}>
                    <div className={styles.property_identity_host}>
                        <p>{logement.host.name.split(' ')[0]}</p>
                        <p>{logement.host.name.split(' ')[1]}</p>
                    </div>
                    <img src={logement.host.picture} alt={logement.host.name} className={styles.property_identity_img} />
                </div>
            </div>
            <div className={styles.property_allTags}>
                <span>
                    {tags.map((tag, index) => (
                        <div key={index} className={styles.property_tag}>
                            {tag}
                        </div>
                    ))}
                </span>
                <Rate rating={logement.rating} className={styles.property_rating} />
            </div>
            {data.map((item) => (
                <div key={item.id} className={styles.property_collapse}>
                    <Collapse
                        title="Description"
                        content={item.description}
                    />
                    <Collapse
                        title="Équipements"
                        content={equipements()}
                    />
                </div>
            ))}
        </div>);
}
