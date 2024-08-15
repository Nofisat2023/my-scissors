import React from 'react';
import '../component/style/dashboard.css'
import Navbar from '../component/nav/navbar';
import Sidebar from '../component/sidebar';
import Home from './home';
//import UrlShortener from '../component/UrlShortener'
import { Route, Routes } from 'react-router-dom';
import Analytics from '../pages/analytics';
//import QRCodeGenerator from '../pages/qrCode';

const Dashboard: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="dashboard">
        <Sidebar />
        <main>
          <Routes>
            {/* Define routes for different components */}
            <Route path='/Home' element={<Home />} />
            {/* <Route path="/urlshortener" element={<UrlShortener />} /> */}
            <Route path="/analytics" element={<Analytics />} />
            {/* <Route path="/qrcode" element={<QRCode />} /> */}
            {/* Default route to UrlShortener */}
            {/* <Route path="/" element={<UrlShortener />} /> */}
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
