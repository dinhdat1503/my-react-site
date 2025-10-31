import React, { useState, useEffect } from 'react';
import '../assets/styles/CarSlider.css';
import { Link } from 'react-router-dom';

// 1. IMPORT ẢNH CỦA BẠN
// Bạn cần tải 6 ảnh xe về và đặt vào thư mục 'src/assets/images/'
// Ví dụ:
import imgXforce from '../assets/images/RV-Xam-2.png'; // Bạn đã có ảnh này
import imgXpander from '../assets/images/xpander.png';
import imgTriton from '../assets/images/triton.png';
import imgPajero from '../assets/images/pajero.png';
import imgOutlander from '../assets/images/xpander.png';
import imgAttrage from '../assets/images/attrage.png';


// 2. CẬP NHẬT carData VỚI 6 XE
const carData = [
  {
    name: 'XPANDER',
    price: 'Giá từ 555.000.000 VNĐ', // Cập nhật giá nếu cần
    image: imgXpander,
  },
  {
    name: 'XFORCE',
    price: 'Giá từ 599.000.000 VNĐ',
    image: imgXforce, // Ảnh của bạn
  },
  {
    name: 'TRITON',
    price: 'Giá từ 650.000.000 VNĐ',
    image: imgTriton,
  },
  {
    name: 'PAJERO', // Có thể là PAJERO SPORT
    price: 'Giá từ 1.130.000.000 VNĐ',
    image: imgPajero,
  },
  {
    name: 'OUTLANDER',
    price: 'Giá từ 825.000.000 VNĐ',
    image: imgOutlander,
  },
  {
    name: 'ATTRAGE',
    price: 'Giá từ 380.000.000 VNĐ',
    image: imgAttrage,
  },
];

const CarSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // State để quản lý chiều rộng slide (responsive)
  const [slideWidthPercent, setSlideWidthPercent] = useState(
    window.innerWidth < 768 ? 100 : 33.33
  );

  // Effect để "lắng nghe" thay đổi kích thước màn hình
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlideWidthPercent(100); // Màn hình nhỏ -> 1 xe
      } else {
        setSlideWidthPercent(33.33); // Màn hình lớn -> 3 xe
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // [] đảm bảo effect này chỉ chạy 1 lần

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % carData.length);
  };
  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + carData.length) % carData.length);
  };

  // Logic transform dùng state động
  const initialOffsetPercent = (100 - slideWidthPercent) / 2;
  const transformValue = `translateX(calc(${initialOffsetPercent}% - (${activeIndex} * ${slideWidthPercent}%)))`;

  return (
    <div className="car-slider-container">
      <div className="car-slider-wrapper">
        <button onClick={handlePrev} className="slider-arrow left-arrow">‹</button>
        
        <div className="car-slider" style={{ transform: transformValue }}>
          {carData.map((car, index) => {
            return (
              <Link 
                to={`/car/${car.name}`} 
                key={car.name} 
                className="car-slide-link"
                // Thêm style động cho chiều rộng
                style={{ flexBasis: `${slideWidthPercent}%`, width: `${slideWidthPercent}%` }}
              >
                <div className='car-slide'>
                  <img src={car.image} alt={car.name} />
                  <h3>{car.name}</h3>
                  <p>{car.price}</p>
                </div>
              </Link>
            );
          })}
        </div>
        <button onClick={handleNext} className="slider-arrow right-arrow">›</button>
      </div>

      <div className="car-actions">
        <div className="action-item"><span>BẢNG GIÁ</span></div>
        <div className="action-item"><span>ĐĂNG KÝ LÁI THỬ</span></div>
        <div className="action-item"><span>KHUYẾN MÃI</span></div>
      </div>
    </div>
  );
};

export default CarSlider;