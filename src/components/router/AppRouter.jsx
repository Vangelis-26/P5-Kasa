import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Property from '../pages/Property';
import Error404 from '../pages/Error404';
import Header from '../components/Header';
import Footer from '../components/Footer';

function AppRouter() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/property/:id" element={<Property />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default AppRouter;
