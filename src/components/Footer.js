import React from 'react';
import { Link } from 'react-router-dom';
// 1. Import file CSS mới
import '../assets/styles/Footer.css';

// 2. Import icon (nếu bạn dùng react-icons, nếu không hãy dùng ảnh)
// Chạy "npm install react-icons" để cài đặt
import { FaFacebookF, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="container">
        {/* Phần 1: Các cột thông tin */}
        <div className="row footer-main">
          
          {/* Cột 1: Thông tin công ty */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="footer-heading">MITSUBISHI HANOI AUTO</h5>
            <p><strong>Địa chỉ:</strong> Tổ 15, Phường Xuân Phương, Thành phố Hà Nội</p>
            <p><strong>Kinh doanh:</strong> 0931.2121.93</p>
            <p><strong>Dịch vụ:</strong> 0912.1221.93</p>
            <p><strong>Email:</strong> cskh@hanoiauto.com.vn</p>
            <p><strong>Giấy CNĐKKD:</strong> 0101771055 - Đăng ký lần đầu ngày 08/09/2005</p>
          </div>

          {/* Cột 2: Dòng xe (Bạn có thể thêm link từ CarSlider.js) */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="footer-heading">DÒNG XE</h5>
            <ul className="footer-links">
              <li><Link to="/car/XFORCE">XFORCE</Link></li>
              <li><Link to="/car/PAJERO-SPORT">PAJERO SPORT</Link></li>
              <li><Link to="/car/ATTRAGE">ATTRAGE</Link></li>
              <li><Link to="/car/TRITON">TRITON</Link></li>
              <li><Link to="/car/OUTLANDER">OUTLANDER</Link></li>
            </ul>
          </div>

          {/* Cột 3: Liên kết nhanh */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="footer-heading">LIÊN KẾT NHANH</h5>
            <ul className="footer-links">
              <li><Link to="/bang-gia">Bảng Giá</Link></li>
              <li><Link to="/dang-ky-lai-thu">Đăng Ký Lái Thử</Link></li>
              <li><Link to="/khuyen-mai">Khuyến Mãi</Link></li>
              <li><Link to="/tin-tuc">Tin Tức</Link></li>
              <li><Link to="/ve-chung-toi">Về Chúng Tôi</Link></li>
            </ul>
          </div>

          {/* Cột 4: Mạng xã hội */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="footer-heading">KẾT NỐI VỚI CHÚNG TÔI</h5>
            <div className="social-icons">
              <a href="https://www.facebook.com/YOUR_PAGE" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://www.youtube.com/YOUR_CHANNEL" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Phần 2: Bản quyền */}
        <div className="row">
          <div className="col-12 text-center footer-copyright">
            <p>© Bản quyền thuộc về Công ty Cổ phần Ô tô Hà Nội (Hanoi Auto).</p>
            <p>Chịu trách nhiệm nội dung: Ngô Đình Đạt.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;