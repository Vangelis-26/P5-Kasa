import { Banner } from '../components/Banner/Banner';
import { Collapse } from '../components/Collapse/Collapse';
import styles from './About.module.scss';

export function About() {
    return (
        <>
            <Banner />
            <div className={styles.about_quality}>
                <Collapse />
            </div>
        </>
    );
}
