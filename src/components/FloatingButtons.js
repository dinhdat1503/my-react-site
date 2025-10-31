import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/FloatingButtons.css';

// 1. Import 3 icon bạn đã lưu
import zaloIcon from '../assets/images/zalo-icon.png';
import messengerIcon from '../assets/images/messenger-icon.png';
import driveIcon from '../assets/images/steering-wheel-icon.png';

const FloatingButtons = () => {
  return (
    <div className="floating-buttons-container">
      {/* 2. Nút Zalo (link ngoài) */}
      <a 
        href="https://zalo.me/0968725797" // <-- ĐÃ CẬP NHẬT LINK NÀY
        target="_blank" 
        rel="noopener noreferrer"
        className="floating-btn zalo-btn"
      >
        <img src={zaloIcon} alt="Zalo" />
      </a>
      
      {/* 3. Nút Messenger (link ngoài) */}
      <a 
        href="https://m.me/YOUR_FACEBOOK_PAGE_ID" // <-- BẠN VẪN CẦN THAY ID PAGE
        target="_blank" 
        rel="noopener noreferrer"
        className="floating-btn messenger-btn"
      >
        <img src={messengerIcon} alt="Messenger" />
      </a>

      {/* 4. Nút Lái thử (link nội bộ) */}
      <Link 
        to="/dang-ky-lai-thu" 
        className="floating-btn drive-btn"
      >
        <img src={driveIcon} alt="Đăng ký lái thử" />
      </Link>
    </div>
  );
};

export default FloatingButtons;