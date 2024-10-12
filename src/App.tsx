import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import Insights from './pages/Insights';
import Integrations from './pages/Integrations';
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/integrations" element={<Integrations />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
