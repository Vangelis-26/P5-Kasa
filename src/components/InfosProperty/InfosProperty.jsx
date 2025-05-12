import { usePropertiesData } from '../../data/properties/DataProperties';
import { useParams, useNavigate } from 'react-router-dom';
import { Slideshow } from '../Slideshow/Slideshow';
import { Rate } from '../Rate/Rate';
import { Collapse } from '../Collapse/Collapse';
import styles from './InfosProperty.module.scss';


export function InfosProperty() {
    const { id } = useParams();
    const { data, loading, error } = usePropertiesData('logement', id);
    const navigate = useNavigate();

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error && error.message === 'Logement non trouvé') {
        navigate('/error');
        return null;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const equipements = data.map((item) => {
        return item.equipments.map((equipement, index) => (
            <div key={index} className={styles.propertyInfoEquipements}>
                <p>{equipement}</p>
            </div>
        ));
    });

    const logement = data[0];
    const tags = logement.tags || [];

    return (
        <div className={styles.property}>
            <Slideshow images={logement.pictures} />
            <div className={styles.property_description}>
                <div>
                    <div className={styles.property_location}>
                        <h2 className={styles.property_title}>{logement.title}</h2>
                        <p className={styles.property_city}>{logement.location}</p>
                    </div>
                    <div className={styles.property_allTags}>
                        <span>
                            {tags.map((tag, index) => (
                                <div key={index} className={styles.property_tag}>
                                    {tag}
                                </div>
                            ))}
                        </span>
                    </div>
                </div>
                <div className={styles.property_identity}>
                    <Rate rating={logement.rating} className={styles.property_identity_rating} />
                    <div className={styles.property_identity_host}>
                        <div className={styles.property_identity_host_name}>
                            <p>{logement.host.name.split(' ')[0]}</p>
                            <p>{logement.host.name.split(' ')[1]}</p>
                        </div>
                        <img src={logement.host.picture} alt={logement.host.name} className={styles.property_identity_img} />
                    </div>
                </div>
            </div>
            {data.map((item) => (
                <div key={item.id} className={styles.property_collapse}>
                    <Collapse
                        title="Description"
                        content={item.description}
                    />
                    <Collapse
                        title="Équipements"
                        content={equipements}
                    />
                </div>
            ))}
        </div>);
}
