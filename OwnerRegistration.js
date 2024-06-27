import React, { useState } from 'react';
import '../App.css';

function OwnerRegistration() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        password: '',
        businessName: '',
        businessAddress: '',
        taxId: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/owners/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        const data = await response.json();
        console.log(data);
    };

    return (
        <div className="form-container">
            <h2>Register Owner</h2>
            <form onSubmit={handleSubmit}>
                <label>Full Name</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" required />
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
                <label>Phone</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required />
                <label>Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
                <label>Business Name</label>
                <input type="text" name="businessName" value={formData.businessName} onChange={handleChange} placeholder="Business Name" />
                <label>Business Address</label>
                <input type="text" name="businessAddress" value={formData.businessAddress} onChange={handleChange} placeholder="Business Address" />
                <label>Tax ID</label>
                <input type="text" name="taxId" value={formData.taxId} onChange={handleChange} placeholder="Tax ID" />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default OwnerRegistration;
