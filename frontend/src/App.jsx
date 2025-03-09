import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './pages/HeroSection/HeroSection';
import HireSection from './pages/HiringSection/HiringSection';
import ServiceSection from './pages/ServiceSection/ServiceSection';
import FeaturePage from './pages/Feature/FeaturePage';
import Testimonial from './pages/Testimonial/Testimonial';
import Header from './pages/Header/Header';
import Home from './pages/HeroSection/HeroSection'; // Create this component if needed
import Services from './pages/ServiceSection/ServiceSection'; // Create this component if needed
import ScrollToTop from './components/ScrollToTop'; // Recommended helper component
import Footer from './pages/Footer/Footer';
const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      
      <Routes>
        {/* Main landing page route */}
        <Route path="/" element={
          <>
            <HeroSection />
            <HireSection />
            <ServiceSection />
            <FeaturePage />
            <Testimonial />
            <Footer />
          </>
        } />

        {/* Example separate services page */}
        <Route path="/services" element={<Services />} />
        
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;