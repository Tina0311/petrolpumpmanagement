import React, { useState, useEffect } from 'react';
import '../App.css';

function PetrolPumpManagement() {
    const [pumps, setPumps] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        operatingHours: ''
    });

    useEffect(() => {
        fetchPumps();
    }, []);

    const fetchPumps = async () => {
        const response = await fetch('http://localhost:5000/api/pumps');
        const data = await response.json();
        setPumps(data);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/pumps', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        const data = await response.json();
        fetchPumps(); // Refresh the list of pumps
        console.log(data);
    };

    return (
        <div className="form-container">
            <h2>Manage Petrol Pumps</h2>
            <form onSubmit={handleSubmit}>
                <label>Pump Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Pump Name" required />
                <label>Location</label>
                <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location" required />
                <label>Operating Hours</label>
                <input type="text" name="operatingHours" value={formData.operatingHours} onChange={handleChange} placeholder="Operating Hours" />
                <button type="submit">Add Pump</button>
            </form>
            <ul>
                {pumps.map((pump) => (
                    <li key={pump.id}>
                        <span>{pump.name} - {pump.location}</span>
                        <button>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PetrolPumpManagement;
