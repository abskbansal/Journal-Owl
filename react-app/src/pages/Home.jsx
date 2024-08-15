import React, { useState, useEffect } from 'react'
import Loading from '../components/Loading/Loading';
import { getNews } from '../api/getNews';
import NewsContainer from '../components/NewsContainer/NewsContainer';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';

const Home = () => {
    const [headlines, setHeadlines] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getNews(setHeadlines, setLoading);
    }, []);

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

export default Home