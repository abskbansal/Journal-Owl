import React from 'react';
import './Card.css';

const Card = ({ headline }) => {
    return (
        <div className="news-box">
            <a
                href={headline.url}
                className="news-link"
                target="_blank"
                rel="noopener noreferrer"
            >
                {headline.urlToImage && (
                    <img
                        src={headline.urlToImage}
                        className="news-image"
                        alt="news-image"
                    />
                )}
                <div className="news-content">
                    <h5 className="news-title">{headline.title}</h5>
                    <p className="news-description">{headline.description}</p>
                </div>
            </a>
            <ul className="news-details">
                <li>Source: {headline.source ? headline.source : "Unknown"}</li>
                <li>Author: {headline.author ? headline.author : "Unknown"}</li>
            </ul>
            <div className="news-footer">
                Published on: {new Date(headline.publishedAt).toLocaleDateString()}
            </div>
        </div>
    );
}

export default Card;
