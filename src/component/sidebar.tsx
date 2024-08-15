// src/components/Sidebar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../component/style/sidebar.css';

const Sidebar: React.FC = () => (
  <aside>
    <Link to="/urlshortener">URL Shortener</Link>
    <Link to="/analytics">AnalyticsChart</Link>
    <Link to="/qrcode">QR Code</Link>
  </aside>
);

export default Sidebar;

