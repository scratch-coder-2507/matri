import React from 'react';
import './Home.css';
import Header from '../../components/Header/Header';

const Home = () => {
    return (
        <div className="container mx-auto px-4">
            <Header/>

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