import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import GalleryStudioLogo from '../assets/GalleryStudioLogo.avif';

function Navbar({ onMenuClick }) {
    return (
        <nav className="navbar">
            <div className="navbar-flex">
                <Link to="/" className="navbar-logo">
                    <img src={GalleryStudioLogo} alt="Gallery Studio Logo" />
                </Link>
                <h1 className="navbar-title">Gallery Studio</h1>
                <button className="menu-btn" onClick={onMenuClick} aria-label="Open sidebar">
                    &#9776;
                </button>
            </div>
        </nav>
    );
}

export default Navbar;