import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css'; // Using '.module.css' for CSS Modules

const Navbar: React.FC = () => (
  <div className={styles.containerNavbar}>
    <span className={styles.navbarTitle}>SCISSOR</span>
    <nav className={styles.nav}>
      <Link className={styles.link} to="/signup">Sign-Up</Link>
      <Link className={styles.link} to="/login">Login</Link>
    </nav>
  </div>
);

export default Navbar;


