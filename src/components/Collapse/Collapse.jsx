import { useState } from 'react';
import styles from './Collapse.module.scss';
import Vector from '../../assets/vector/vector.svg';


export function Collapse({ title, content }) {
    const [toggle, setToggle] = useState(false);

    return (
        <div className={styles.quality}>
            <div className={`${styles.quality_title} ${toggle ? styles.active_content : ''}`}>
                <h2>{title}</h2>
                <img
                    src={Vector} onClick={() => setToggle(!toggle)}
                    alt={toggle ? "Masquer le contenu" : "Afficher le contenu"}
                    className={toggle ? styles.open : styles.close} />
            </div>
            {toggle && <p className={styles.quality_content}>{content}</p>}
        </div>
    );
}
