import { Banner } from '../../components/Banner/Banner';
import { Collapse } from '../../components/Collapse/Collapse';
import { useQualityData } from '../../data/about/DataAbout';
import styles from './About.module.scss';

export function About() {
    const { data, loading, error } = useQualityData();

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
