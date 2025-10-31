import React from 'react';
import { useParams } from 'react-router-dom'; // Hook để lấy tham số từ URL

// Đây là trang sẽ hiển thị khi bạn click vào 1 chiếc xe
const CarDetailPage = () => {
  // 1. Lấy tên xe từ URL
  const { carName } = useParams();

  return (
    <div style={{ paddingTop: '100px', minHeight: '60vh', paddingLeft: '2rem' }}>
      <h1>Đây là trang chi tiết cho xe: {carName}</h1>
      <p>Bạn có thể thêm thông số kỹ thuật, hình ảnh, và mô tả chi tiết của xe {carName} tại đây.</p>
    </div>
  );
};

export default CarDetailPage;