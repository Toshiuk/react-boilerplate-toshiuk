import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
