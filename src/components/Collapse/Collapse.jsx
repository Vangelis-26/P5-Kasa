import { useState } from 'react';
import styles from './Collapse.module.scss';
import Vector from '../../assets/vector/vector_collapse.svg';


export function Collapse({ title, content }) {
    const [toggle, setToggle] = useState(false);

    return (
        <div className={styles.quality}>
            <div className={`${styles.quality_title} ${toggle ? styles.active_content : ''}`} onClick={() => setToggle(!toggle)}>
                <h3>{title}</h3>
                <img
                    src={Vector}
                    alt={toggle ? "Masquer le contenu" : "Afficher le contenu"}
                    className={toggle ? styles.open : styles.close} />
            </div>
            {toggle && <div className={styles.quality_content}>{content}</div>}
        </div>
    );
}
