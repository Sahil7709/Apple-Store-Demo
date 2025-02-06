import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { SiApple } from "react-icons/si";


function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className={styles.Container}>
        <nav className={styles.Navbar}>
          {/* Brand Name or Logo */}
          <div className={styles.brand}>
            <Link to="/"><SiApple /></Link>
          </div>
 
          {/* Hamburger Menu */}
          <div className={styles.hamburger} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div> 

          {/* Links for desktop */}
          <ul className={`${styles.links} ${isMobileMenuOpen ? styles.mobileMenu : ''}`}>
            <li><Link to="/store">Store</Link></li>
            <li><Link to="/mac">Mac</Link></li>
            <li><Link to="/ipad">iPad</Link></li>
            <li><Link to="/iphone">iPhone</Link></li>
            <li><Link to="/watch">Watch</Link></li>
            <li><Link to="/vision">Vision</Link></li>
            <li><Link to="/airpods">AirPods</Link></li>
            <li><Link to="/tv">TV & Home</Link></li>
            <li><Link to="/entertainment">Entertainment</Link></li>
            <li><Link to="/accessories">Accessories</Link></li>
            <li><Link to="/support">Support</Link></li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
