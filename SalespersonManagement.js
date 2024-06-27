import React, { useState, useEffect } from 'react';
import '../App.css';

function SalespersonManagement() {
    const [salespersons, setSalespersons] = useState([]);
    const [formData, setFormData] = useState({
        petrolPumpId: '',
        name: '',
        email: '',
        phone: ''
    });

    useEffect(() => {
        fetchSalespersons();
    }, []);

    const fetchSalespersons = async () => {
        const response = await fetch('http://localhost:5000/api/salespersons');
        const data = await response.json();
        setSalespersons(data);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/salespersons', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        const data = await response.json();
        fetchSalespersons(); // Refresh the list of salespersons
        console.log(data);
    };

    return (
        <div className="form-container">
            <h2>Manage Salespersons</h2>
            <form onSubmit={handleSubmit}>
                <label>Petrol Pump ID</label>
                <input type="text" name="petrolPumpId" value={formData.petrolPumpId} onChange={handleChange} placeholder="Petrol Pump ID" required />
                <label>Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
                <label>Phone</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
                <button type="submit">Add Salesperson</button>
            </form>
            <ul>
                {salespersons.map((salesperson) => (
                    <li key={salesperson.id}>
                        <span>{salesperson.name} - {salesperson.email}</span>
                        <button>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SalespersonManagement;
