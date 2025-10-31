import React from 'react';
// Bạn có thể import carData từ một file chung sau này
// import { carData } from '../carData'; 

// Trang hiển thị tất cả các xe
const AllCarsPage = () => {
  return (
    <div style={{ paddingTop: '100px', minHeight: '60vh', padding: '2rem' }}>
      <h1>Tất Cả Các Dòng Xe</h1>
      <p>Đây là nơi bạn sẽ liệt kê tất cả các xe Mitsubishi.</p>
      
      {/* Bạn có thể lặp (map) qua danh sách xe và hiển thị chúng ở đây 
        với grid layout hoặc list
      */}
    </div>
  );
};

export default AllCarsPage;