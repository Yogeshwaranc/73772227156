import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // import useNavigate
import './login.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // initialize navigate

    const handleSubmit = (e) => {
        e.preventDefault();

        // Add authentication logic here if needed

        console.log('Logging in:', { email, password });

        // Navigate to home page after login
        navigate('/home');
    };

    return (
        <div className="login-wrapper">
            <div className="login-card glow-card">
                <div className="login-header">
                    <span className="logo-circle">A</span>
                    <h2>Login to Affordmed</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                        />
                    </div>
                    <button type="submit" className="login-btn submit-btn">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}