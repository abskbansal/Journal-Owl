'use client'

import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <ul className="navbar-nav mb-2 mb-lg-0">
                    <li className="nav-item"><a className="nav-link active" href="/">Home</a></li>
                    <li className="nav-item"><a className="nav-link active" href="/about">About</a></li>
                    <li className="nav-item dropdown">
                        <a 
                            className="nav-link dropdown-toggle" 
                            role="button" 
                            onClick={toggleDropdown} 
                            onBlur={closeDropdown}
                            aria-expanded={isOpen}
                            aria-haspopup="true"
                        >
                            Genre
                        </a>
                        {isOpen && (
                            <ul className="dropdown-menu show">
                                <li><a className="dropdown-item" href="/genre/business">Business</a></li>
                                <li><a className="dropdown-item" href="/genre/sports">Sports</a></li>
                                <li><a className="dropdown-item" href="/genre/politics">Politics</a></li>
                                <li><a className="dropdown-item" href="/genre/technology">Technology</a></li>
                                <li><a className="dropdown-item" href="/genre/entertainment">Entertainment</a></li>
                                <li><a className="dropdown-item" href="/genre/health">Health</a></li>
                                <li><a className="dropdown-item" href="/genre/science">Science</a></li>
                                <li><a className="dropdown-item" href="/genre/world">World</a></li>
                                <li><a className="dropdown-item" href="/genre/finance">Finance</a></li>
                                <li><a className="dropdown-item" href="/genre/lifestyle">Lifestyle</a></li>
                                <li><a className="dropdown-item" href="/genre/education">Education</a></li>
                                <li><a className="dropdown-item" href="/genre/environment">Environment</a></li>
                                <li><a className="dropdown-item" href="/genre/travel">Travel</a></li>
                            </ul>
                        )}
                    </li>
                </ul>
                <div><span className="navbar-brand">Journal Owl</span></div>
                <form className="d-flex mb-0" id="searchForm" role="search" action="/search" method="get">
                    <input id="searchInput" className="form-control me-2" type="search" name="query" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-success search-btn" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
};

export default Navbar;
