import { Banner } from '../components/Banner/Banner';
import { Collapse } from '../components/Collapse/Collapse';
import { QualityData } from '../data/about/DataAbout'; // Assurez-vous que le chemin est correct
import styles from './About.module.scss';

export function About() {
    const { data, loading, error } = QualityData(); // Bien que tu passes 'about', ton hook lit directement depuis about.json

    if (loading) {
        return
    }

    if (error) {
        return <div>Erreur: {error.message}</div>;
    }

    return (
        <>
            <Banner />
            <div className={styles.about_quality}>
                {data && data.map((item) => (
                    <Collapse key={item.id} title={item.title} content={item.content} />
                ))}
            </div>
        </>
    );
}
