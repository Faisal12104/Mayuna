import React from 'react';
import './ComingSoon.css';

const ComingSoon = () => {
  return (
    <div className="coming-soon">
      <div className="coming-soon-content">
        <h1>Segera Hadir</h1>
        <p>Halaman ini sedang dalam pengembangan. Mohon tunggu kabar selanjutnya!</p>
        <div className="loading-spinner"></div>
      </div>
    </div>
  );
};

export default ComingSoon;