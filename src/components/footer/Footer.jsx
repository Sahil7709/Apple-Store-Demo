import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

function Footer() {
  return (
    <>
      <footer className={styles.Footer}>

        <div className={styles.leftSection}>

          <div className={styles.section}>

            <h3>About Us</h3>
            <ul>
              <li>Manage Account</li>
              <li>Apple Card</li>
              <li>Apple Pay</li>
              <li>Apple Cash</li>
            </ul>
          </div>
        </div>

        <div className={styles.centerSection}>

          <div className={styles.section}>
            <h3>Shop and Learn</h3>
            <ul>
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
          </div>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.section}>
            <h3>Follow Us</h3>
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
      </footer>
      <div className={styles.Copyright}>Copyright © 2024 Apple Inc. All rights reserved. &nbsp; &nbsp;Privacy Policy | Terms of Use  | Sales and Refunds | Legal Site Map</div>
    </>
  );
}

export default Footer;
