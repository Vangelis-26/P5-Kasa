import { useState, useEffect } from 'react';
import logementsData from './properties.json';

export function PropertiesData(dataType, id) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = () => {
            try {
                if (dataType === 'logements') {
                    setData(logementsData);
                } else if (dataType === 'logement' && id) {
                    const logement = logementsData.find(log => log.id === id);
                    if (logement) {
                        setData([logement]);
                    } else {
                        setError(new Error('Logement non trouvé'));
                    }
                } else {
                    setError(new Error(`Type de données "${dataType}" non pris en charge`));
                }
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchData();
    }, [dataType, id]);

    return { data, loading, error };
};
