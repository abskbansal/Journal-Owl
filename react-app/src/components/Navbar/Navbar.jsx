import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
                    <li className="nav-item dropdown">
                        <span
                            className="nav-link dropdown-toggle" 
                            role="button" 
                            onClick={toggleDropdown} 
                            onBlur={closeDropdown}
                            aria-expanded={isOpen}
                            aria-haspopup="true"
                        >
                            Genre
                            <span className="dropdown-icon">▼</span>
                        </span>
                        {isOpen && (
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/genre/general">General</a></li>
                                <li><a className="dropdown-item" href="/genre/business">Business</a></li>
                                <li><a className="dropdown-item" href="/genre/health">Health</a></li>
                                <li><a className="dropdown-item" href="/genre/technology">Technology</a></li>
                                <li><a className="dropdown-item" href="/genre/entertainment">Entertainment</a></li>
                                <li><a className="dropdown-item" href="/genre/science">Science</a></li>
                                <li><a className="dropdown-item" href="/genre/sports">Sports</a></li>
                            </ul>
                        )}
                    </li>
                </ul>
                <div className="navbar-brand">Journal Owl</div>
                <form className="search-form" role="search" action="/search" method="get">
                    <input id="searchInput" className="search-input" type="search" name="query" placeholder="Search" aria-label="Search"/>
                    <button className="search-btn" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
};

export default Navbar;
