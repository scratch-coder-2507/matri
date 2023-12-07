import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="container mx-auto px-4">
            <header className="text-center py-5">
                <h1 className="header-title">Welcome to Milan Matrimonial</h1>
                <p className="header-subtitle">Find your perfect match with us.</p>
            </header>

            <main className="main-content">
                <p>Explore profiles, connect, and start your journey.</p>
                {/* Add more content here as needed */}
            </main>

            <footer className="footer-text">
                <p>© 2023 Milan Matrimonial. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;