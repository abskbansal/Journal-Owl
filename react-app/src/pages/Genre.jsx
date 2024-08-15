import React, { useState, useEffect } from 'react'
import Loading from '../components/Loading/Loading';
import NewsContainer from '../components/NewsContainer/NewsContainer';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import { getNewsGenre } from '../api/getNews';
import { useParams } from 'react-router-dom'

const Genre = () => {
    const { genre } = useParams();

    const [headlines, setHeadlines] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getNewsGenre(genre, setHeadlines, setLoading);
    }, [genre]);

    if (loading) {
        return (
            <Loading/>
        );
    }

    if (headlines.error) {
        return <ErrorMessage />;
    }

    return (
        <NewsContainer headlines={headlines.data} />
    )
}

export default Genre