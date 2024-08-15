import React from 'react'
import './NewsContainer.css'
import Card from '../Card/Card'

const NewsContainer = ({ headlines }) => {
    return (
        <div className="news-container">
            <div className="news-row">
                {headlines.length ? (
                    headlines.map((headline, index) => (
                        <Card headline={headline} key={index} />
                    ))
                ) : (
                    <div className="no-results">
                        <h2>No results found</h2>
                    </div>
                )}
            </div>
        </div>
    )
}

export default NewsContainer