import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Home() {
    return (
        <div className="home-container">
            <div className="home-content">
                <h2>Welcome to the Petrol Pump Management System</h2>
                <p className="home-description">Manage owners, petrol pumps, salespersons, and transactions with ease.</p>
                <div className="home-links">
                    <Link to="/register-owner" className="home-link">Register Owner</Link>
                    <Link to="/manage-pumps" className="home-link">Manage Pumps</Link>
                    <Link to="/manage-salespersons" className="home-link">Manage Salespersons</Link>
                    <Link to="/manage-transactions" className="home-link">Manage Transactions</Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
