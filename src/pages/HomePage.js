import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import CarSlider from '../components/CarSlider';
// Import các component khác nếu bạn có (Features, SpecsTable...)
// import Features from '../components/Features'; 

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <CarSlider />
      
      {/* Nút Xem Tất Cả */}
      <div className="view-all-container">
        <Link to="/all-cars" className="view-all-button">
          Xem Tất Cả Dòng Xe
        </Link>
      </div>

      {/* <Features /> */}
      {/* <SpecsTable /> */}
      {/* <Pricing /> */}
      {/* <ContactForm /> */}
    </>
  );
};

export default HomePage;