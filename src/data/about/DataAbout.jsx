import { useState, useEffect } from 'react';
import qualityData from '../../data/about/about.json'

export function useQualityData() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = () => {
            try {
                setData(qualityData);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    return { data, loading, error };
}
