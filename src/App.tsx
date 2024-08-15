import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import SignUp from './pages/signUp';
import LogIn from './pages/logIn';
import './App.css';
import Home from './pages/home';
//import UrlShortener from './component/UrlShortener';
//import Navbar from './component/nav/navbar';
//import Sidebar from './component/sidebar';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Define routes for the entire application */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        {/* Redirect unknown routes to Dashboard */}
        <Route path="*" element={<Dashboard />} />
      </Routes>
      <Home />
    </Router>
  );
};

export default App;