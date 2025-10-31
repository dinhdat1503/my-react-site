import React, { useState } from 'react';
// 1. Import file CSS mới chúng ta sắp tạo
import '../assets/styles/TestDrivePage.css';

// Dữ liệu mẫu các dòng xe, bạn có thể import từ file khác
const carModels = [
  'XFORCE',
  'PAJERO SPORT',
  'ATTRAGE',
  'TRITON',
  'OUTLANDER',
];

const TestDrivePage = () => {
  // 2. Dùng state để lưu thông tin form
  const [formData, setFormData] = useState({
    carModel: carModels[0], // Giá trị mặc định
    name: '',
    phone: '',
    email: '',
    date: '',
  });

  // 3. Hàm cập nhật state khi người dùng gõ
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  // 4. Hàm xử lý khi bấm nút Gửi
  const handleSubmit = (e) => {
    e.preventDefault(); // Ngăn trang tải lại
    console.log('Thông tin đăng ký lái thử:', formData);
    // Tại đây, bạn sẽ gửi `formData` đến API hoặc máy chủ
    alert('Đăng ký lái thử thành công!');
    // Xóa form (tùy chọn)
    setFormData({
      carModel: carModels[0],
      name: '',
      phone: '',
      email: '',
      date: '',
    });
  };

  return (
    <div className="test-drive-page">
      <div className="container">
        {/* Tiêu đề trang */}
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h1 className="page-title">Đăng Ký Lái Thử</h1>
            <p className="page-subtitle">Vui lòng điền thông tin bên dưới, chúng tôi sẽ liên hệ với bạn ngay.</p>
          </div>
        </div>

        {/* Form đăng ký */}
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="test-drive-form-container">
              
              <form onSubmit={handleSubmit}>
                {/* Chọn Dòng Xe */}
                <div className="mb-3">
                  <label htmlFor="carModel" className="form-label">Chọn dòng xe *</label>
                  <select
                    className="form-select"
                    id="carModel"
                    name="carModel"
                    value={formData.carModel}
                    onChange={handleChange}
                    required
                  >
                    {carModels.map(model => (
                      <option key={model} value={model}>{model}</option>
                    ))}
                  </select>
                </div>
                
                {/* Họ và Tên */}
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Họ và Tên *</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                {/* Số Điện Thoại */}
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Số Điện Thoại *</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                {/* Email */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                
                {/* Ngày Lái Thử */}
                <div className="mb-3">
                  <label htmlFor="date" className="form-label">Ngày dự kiến lái thử</label>
                  <input
                    type="date"
                    className="form-control"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>
                
                {/* Nút Gửi */}
                <div className="text-center mt-4">
                  <button type="submit" className="btn btn-submit-drive">Gửi Đăng Ký</button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestDrivePage;