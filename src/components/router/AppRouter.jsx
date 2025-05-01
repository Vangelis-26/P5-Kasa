import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Property from '../pages/Property';
import Error404 from '../pages/Error404';

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/property/:id" element={<Property />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
    );
}

export default AppRouter; 
