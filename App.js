import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import OwnerRegistration from './components/OwnerRegistration';
import PetrolPumpManagement from './components/PetrolPumpManagement';
import SalespersonManagement from './components/SalespersonManagement';
import TransactionsManagement from './components/TransactionsManagement';

function BackButton() {
    let navigate = useNavigate();
    return (
        <button className="back-button" onClick={() => navigate('/')}>
            Back to Home
        </button>
    );
}

function App() {
    return (
        <Router>
            <div className="App">
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/register-owner" element={<><BackButton /><OwnerRegistration /></>} />
                        <Route path="/manage-pumps" element={<><BackButton /><PetrolPumpManagement /></>} />
                        <Route path="/manage-salespersons" element={<><BackButton /><SalespersonManagement /></>} />
                        <Route path="/manage-transactions" element={<><BackButton /><TransactionsManagement /></>} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
