'use client'

import { useState, useEffect } from "react";
import Loading from "@/components/loading";
import NewsBox from "@/components/news-box";

export default function Home() {
    const [headlines, setHeadlines] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        var url = 'https://newsapi.org/v2/top-headlines?' +
                  'country=in&' +
                  'apiKey=b0ed9161d09e4ab5b77b100b14bf1207';
        var req = new Request(url);
        fetch(req)
            .then((response) => response.json())
            .then((data) => {
                setHeadlines(data.articles.map((article) => {
                    if (article.urlToImage) {
                        return { ...article, publishedAt: article.publishedAt.slice(0, 10)}
                    } else {
                        return { ...article, publishedAt: article.publishedAt.slice(0, 10), urlToImage : "/news.jpg"}
                    }
                }));
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <Loading/>
        );
    }

    return (
        <div className="container">
            <div className="row">
                {headlines.length
                ? headlines.map((headline, index) => ( <NewsBox headline={headline} key={index}/> ))
                : <div className="col-12 mt-5 text-center">
                      <h2>No results found</h2>
                  </div>
                }
            </div>
        </div>
    );
}
