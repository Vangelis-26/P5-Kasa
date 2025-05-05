import { useState } from 'react';
import { QualityData } from "../../data/about/DataAbout";
import styles from './Collapse.module.scss';
import Up from '../../assets/vector/up.svg';
import Down from '../../assets/vector/down.svg';


export function Collapse() {
    const [toggle, setToggle] = useState(false);

    const { data, loading, error } = QualityData('about');
    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    return (
        data.map((quality) => (
            <div key={quality.id} className={styles.quality}>
                <div className={styles.quality_title} >
                    <h2 onClick={() => setToggle(!toggle)}>{quality.title} </h2>
                    <img src={toggle ? Up : Down} />
                </div>
                <p className={styles.quality_content}>{quality.content}</p>
            </div>
        ))
    );
}
