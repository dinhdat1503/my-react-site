// 1. Import thêm useState và useEffect
import React, { useState, useEffect } from 'react';
import logo from '../assets/images/mitsulogo.png'; // Đường dẫn logo mới
import '../assets/styles/Header.css';

const Header = () => {
  // 2. Thêm state để theo dõi trạng thái cuộn
  const [isScrolled, setIsScrolled] = useState(false);

  // 3. Thêm useEffect để lắng nghe sự kiện cuộn
  useEffect(() => {
    const handleScroll = () => {
      // Nếu cuộn xuống hơn 50px, đặt state là true
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Thêm sự kiện
    window.addEventListener('scroll', handleScroll);

    // Gỡ bỏ sự kiện khi component bị unmount (quan trọng)
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // [] đảm bảo effect này chỉ chạy 1 lần lúc mount

  return (
    // 4. Thêm class 'scrolled' một cách có điều kiện
    <header className={isScrolled ? 'header-container scrolled' : 'header-container'}>
      <div className="header-logo">
        <img src={logo} alt="Hanoi Auto" />
      </div>
      <nav className="header-nav">
        <a href="/">SẢN PHẨM</a>
        <a href="/">MUA XE</a>
        <a href="/">DỊCH VỤ</a>
        <a href="/">TIN TỨC</a>
        <a href="/">VỀ CHÚNG TÔI</a>
      </nav>
      <div className="header-contact">
        <span>Kinh doanh: 0931.2121.93</span>
        <span>Dịch vụ: 0912.1221.93</span>
      </div>
    </header>
  );
};

export default Header;