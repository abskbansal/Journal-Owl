import React, { useState, useEffect } from 'react'
import Loading from '../components/Loading/Loading';
import NewsContainer from '../components/NewsContainer/NewsContainer';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import { getNewsSearch } from '../api/getNews';
import { useSearchParams } from 'react-router-dom'

const Search = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query');

    const [headlines, setHeadlines] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getNewsSearch(query, setHeadlines, setLoading);
    }, [query]);

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

export default Search