import Image from 'next/image'
import React from 'react'

const NewsBox = ({ headline }) => {
    return (
        <div className="col-md-6 col-lg-4 mt-5">
            <div className="card">
                <a
                    href={headline.url}
                    style={{ textDecoration: "none", color: "inherit" }}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {headline.urlToImage && (
                        <Image
                            src={headline.urlToImage}
                            className="card-img-top"
                            alt="Image"
                            width={500}
                            height={300}
                        />
                    )}
                    <div className="card-body">
                        <h5 className="card-title">{headline.title}</h5>
                        <p className="card-text">{headline.description}</p>
                    </div>
                </a>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        Source: {headline.source.name ? headline.source.name : "Unknown"}
                    </li>
                    <li className="list-group-item">
                        Author: {headline.author ? headline.author : "Unknown"}
                    </li>
                </ul>
                <div className="card-footer text-muted">
                    Published on: {headline.publishedAt}
                </div>
            </div>
        </div>
    )
}

export default NewsBox