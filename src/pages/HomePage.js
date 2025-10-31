import React from 'react';
import { Link } from 'react-router-dom'; // 1. Import Link
import HeroSection from '../components/HeroSection';
import CarSlider from '../components/CarSlider';
// 2. Import file CSS (nếu bạn có App.css hoặc index.css)
import '../App.css'; // Hoặc file CSS toàn cục của bạn

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <CarSlider />
      
      {/* 3. Thêm nút bấm ở đây */}
      <div className="view-all-container">
        <Link to="/all-cars" className="view-all-button">
          Xem Tất Cả Dòng Xe
        </Link>
      </div>

      {/* <Features /> */}
      {/* <OtherComponents /> */}
    </>
  );
};

export default HomePage;