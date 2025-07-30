import React from 'react';
import './Navbar.css';

function Navbar({ onMenuClick }) {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <h1 className="navbar-title">Gallery Studio</h1>
                <button className="menu-btn" onClick={onMenuClick} aria-label="Open sidebar">
                    &#9776;
                </button>
            </div>
        </nav>
    );
}

export default Navbar;