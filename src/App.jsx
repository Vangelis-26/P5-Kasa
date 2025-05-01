import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/router/AppRouter';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <AppRouter />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
