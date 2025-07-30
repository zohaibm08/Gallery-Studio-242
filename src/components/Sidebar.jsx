import React from 'react';
import './Sidebar.css';

export function Sidebar({ isOpen, onClose }) {
    return (
        <div className={`sidebar${isOpen ? ' open' : ''}`}>
            <button className="close-btn" onClick={onClose} aria-label="Close sidebar">×</button>
            <h2>Dashboard</h2>
        </div>
    );
}

