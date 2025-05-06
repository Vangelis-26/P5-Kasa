import { Link } from "react-router-dom";
import styles from './Error.module.scss';

export function Error() {
    return (
        <div className={styles.error}>
            <div className={styles.error_404}>404</div>
            <div className={styles.error_message}>Oups! La page que vous demandez n'existe pas.</div>
            <Link to="/" className={styles.error_homeLink}>
                Retourner sur la page d’accueil
            </Link>
        </div>
    );
}
