const API_TOKEN = 'cc8edfe0141bbdbc06552ca095842a79'

export const fetchData = (url, setHeadlines, setLoading) => {
    var req = new Request(url);
    fetch(req)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            
            setHeadlines(
                {
                    data: data.data.map((article) => {
                        if (article.image) {
                            return { ...article, publishedAt: article.published_at.slice(0, 10), urlToImage: article.image }
                        } else {
                            return { ...article, publishedAt: article.published_at.slice(0, 10), urlToImage: "/news.jpg" }
                        }
                    }),
                    error: null
                }
            );
            setLoading(false);
        })
        .catch((error) => {
            setHeadlines(
                {
                    data: null,
                    error: error
                }
            )
            setLoading(false);
        });
}

export const getNews = (setHeadlines, setLoading) => {
    var url = `http://api.mediastack.com/v1/news?access_key=${API_TOKEN}&countries=in&languages=en&limit=30`;
    fetchData(url, setHeadlines, setLoading);
}

export const getNewsGenre = (genre, setHeadlines, setLoading) => {
    var url = `http://api.mediastack.com/v1/news?access_key=${API_TOKEN}&categories=${genre}&languages=en&limit=30`;
    fetchData(url, setHeadlines, setLoading);
}

export const getNewsSearch = (query, setHeadlines, setLoading) => {
    var url = `http://api.mediastack.com/v1/news?access_key=${API_TOKEN}&keywords=${query}&languages=en&limit=30`;
    fetchData(url, setHeadlines, setLoading);
}