import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// 1. THAY ĐỔI: Import HashRouter thay vì BrowserRouter
import { HashRouter } from 'react-router-dom'; 
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 2. THAY ĐỔI: Sử dụng <HashRouter> */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);