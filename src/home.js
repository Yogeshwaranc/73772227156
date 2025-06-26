import React from 'react';
import './home.css';

export default function Home() {
    return (
        <div className="home-container">
            {/* Navbar */}
            <nav className="navbar">
                <div className="navbar-brand">
                    <span className="logo-circle">A</span>
                    <span className="brand-name">Affordmed</span>
                </div>
                <ul className="navbar-links">
                    <li><a href="#services">Services</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#contact">Contact</a></li>
                    {/* <li><button className="login-btn" onClick={handleLoginClick}>Login</button></li> */}
                </ul>
            </nav>

            {/* Hero */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Redefining Accessible Healthcare</h1>
                    <p>Where compassion meets modern medicine.</p>
                </div>
                <div className="hero-image">
                    <img src="/health.png" alt="Healthcare" />
                </div>
            </section>

            <div className="diagonal-separator" />

            {/* Services */}
            <section id="services" className="services-section">
                <h2>Our Focus Areas</h2>
                <div className="services-grid">
                    <div className="service-tile glow-card">
                        <h3>Preventive Checkups</h3>
                        <p>Stay ahead of issues with early diagnosis programs.</p>
                    </div>
                    <div className="service-tile glow-card">
                        <h3>Teleconsultation</h3>
                        <p>Talk to specialists from the comfort of your home.</p>
                    </div>
                    <div className="service-tile glow-card">
                        <h3>Health Records</h3>
                        <p>All your medical history in one secure place.</p>
                    </div>
                </div>
            </section>

            {/* About Us */}
            <section id="about" className="about-section">
                <h2>About Us</h2>
                <p>
                    At Affordmed Medicals, we believe healthcare should be both compassionate and affordable.
                    Our team of professionals is dedicated to delivering timely and reliable services that
                    empower individuals and families to take control of their well-being.
                </p>
                <p>
                    We combine modern medical tools with personal care, building a healthier, stronger community every day.
                </p>
            </section>

            {/* Contact */}
            <section id="contact" className="contact-section">
                <h2>Contact Us</h2>
                <div className="contact-details">
                    <p><strong>Email:</strong> contact@affordmed.com</p>
                    <p><strong>Phone:</strong> +91 86207 56644</p>
                    <p><strong>Location:</strong> Green Valley Plaza, Sector 21, New Delhi, India</p>
                </div>
            </section>

            {/* Footer */}
            <footer className="site-footer">
                <p>Let's build a healthier tomorrow.</p>
                <p>&copy; 2025 Affordmed Medicals</p>
            </footer>
        </div>
    );
}
