import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Component chung
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingButtons from './components/FloatingButtons'; // 1. IMPORT COMPONENT MỚI

// Các trang
import HomePage from './pages/HomePage';
import CarDetailPage from './pages/CarDetailPage';
import AllCarsPage from './pages/AllCarsPage'; 
import TestDrivePage from './pages/TestDrivePage'; // 2. IMPORT TRANG MỚI

function App() {
  return (
    <>
      <Header />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/car/:carName" element={<CarDetailPage />} />
        <Route path="/all-cars" element={<AllCarsPage />} />
        <Route path="/dang-ky-lai-thu" element={<TestDrivePage />} /> {/* 3. THÊM ROUTE MỚI */}
      </Routes>
      
      <Footer />
      <FloatingButtons /> {/* 4. THÊM COMPONENT MỚI VÀO ĐÂY */}
    </>
  );
}

export default App;