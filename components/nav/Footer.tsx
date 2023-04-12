/** Footer.tsx
 * 
 *  This is the Footer component for the website.
 *  It contains three columns for Links, Social and Contact information.
 *  At the bottom, it has a fluid container with a copyright notice.
 *
 */
import React from 'react';
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import styles from '../../styles/components/nav/Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
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
