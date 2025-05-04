import React from 'react';
import { Link } from 'react-router-dom';
import useFetchData from './data/fetchdata';
import './styles/components/_Card.scss';

function Card() {
    const { data, loading, error } = useFetchData('logements'); // Utilisez le hook pour récupérer les données

    if (loading) {
        return <div>Loading...</div>; // Affichez un message de chargement
    }

    if (error) {
        return <div>Error: {error.message}</div>; // Affichez un message d'erreur
    }

    return (
        data.map((logement) => (
            <Link to={`/logement/${logement.id}`} key={logement.id} className="card">
                <div className="image-wrapper">
                    <img src={logement.cover} alt={logement.title} className="card-image" />
                    <h2 className="card-title">{logement.title}</h2>
                </div>
            </Link>
        ))
    );
}
export default Card;
