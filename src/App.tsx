import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import Insights from './pages/Insights';
import Integrations from './pages/Integrations';
import Features from './pages/Features';  
import Pricing from './pages/Pricing';  
import SuggestSomething from './pages/SuggestSomething';
import ReportIssue from './pages/ReportIssue';
import ContactUs from './pages/ContactUs';
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
          <Route path="/features" element={<Features />} />   
          <Route path="/pricing" element={<Pricing />} />  
          <Route path="/suggest-something" element={<SuggestSomething />} />
          <Route path="/report-issue" element={<ReportIssue />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
