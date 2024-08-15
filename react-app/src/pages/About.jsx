import React from 'react'
import './About.css'

const About = () => {
    return (
        <div className="about-container">
            <div className="about-row">
                <div className="about-image-container">
                    <img src="owl-image.jpg" alt="Journal Owl" className="about-image" />
                </div>
                <div className="about-content">
                    <h2 className="about-title">Welcome to Journal Owl</h2>
                    <p className="about-text">At Journal Owl, we understand the value of being well-informed in today's fast-paced world. With so much happening across various sectors and regions, it can be challenging to keep up with the news that matters most to you. That's where we come in.</p>
                    <p className="about-text">Our mission is simple: to curate the most relevant and engaging headlines of the day and present them to you in a concise and accessible format. Whether you're interested in global politics, technology breakthroughs, cultural trends, or sports highlights, Journal Owl has you covered.</p>
                    <p className="about-text">With just a glance, you can see the top headlines of the day, carefully selected to give you a snapshot of what's happening around the globe. But we don't stop there. Our intuitive search feature allows you to dive deeper into specific genres, ensuring that you can explore topics that resonate with your interests.</p>
                    <p className="about-text">But what sets Journal Owl apart isn't just our commitment to delivering quality news—it's our dedication to empowering you, the reader. We believe that access to reliable information is fundamental to making informed decisions and understanding the world around us. That's why we prioritize accuracy, credibility, and diversity in the stories we share.</p>
                    <p className="about-text">Whether you're a seasoned news junkie or just beginning your journey of staying informed, Journal Owl welcomes you. Join us in our quest to illuminate the world, one headline at a time.</p>
                </div>
            </div>
        </div>
    )
}

export default About