import React from 'react';
import '../assets/styles/HeroSection.css';
// 1. Import video của bạn
import BannerVideo from '../assets/images/banner.mp4'; // <-- THAY BẰNG VIDEO CỦA BẠN

const HeroSection = () => {
  return (
    // 2. Bỏ style backgroundImage khỏi đây
    <section className="hero-section"> 
      
      {/* 3. Thêm thẻ video vào đây */}
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src={BannerVideo} type="video/mp4" />
        Trình duyệt của bạn không hỗ trợ video.
      </video>

      <div className="hero-overlay"></div> {/* Lớp phủ mờ vẫn giữ nguyên */}
      
      <div className="hero-content">
        <h1>VƯƠN TẦM, NHẬN GIÁ TRỊ</h1>

        <div className="hero-features">
          <span>5 CHỖ RỘNG RÃI</span>
          <span>4 CHẾ ĐỘ LÁI</span>
          <span>DYNAMIC SOUND YAMAHA PREMIUM</span>
          <span>AN TOÀN THÔNG MINH</span>
        </div>

        <div className="hero-buttons">
          <button className="btn btn-primary">ĐĂNG KÝ NHẬN THÔNG TIN</button>
          <button className="btn btn-secondary">TẢI BROCHURE</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;