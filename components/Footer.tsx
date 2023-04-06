/** Footer.tsx
 * 
 *  This is the Footer component for the website.
 *  It contains three columns for Links, Social and Contact information.
 *  At the bottom, it has a fluid container with a copyright notice.
 *
 */
import React from 'react';
import styles from '../styles/components/Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.colMd4}>
            <h4>Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className={styles.colMd4}>
            <h4>Social</h4>
            <ul>
              <li><a href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a href="#"><i className="fa fa-instagram"></i></a></li>
            </ul>
          </div>
          <div className={styles.colMd4}>
            <h4>Contact Us</h4>
            <p>123 Main St, Anytown USA</p>
            <p>Phone: 555-555-5555</p>
            <p>Email: info@example.com</p>
          </div>
        </div>
      </div>
      <div className={styles.containerFluid}>
        <div className={styles.row}>
          <div className={styles.colMd12}>
            <p>&copy; 2023 YourSiteName. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
