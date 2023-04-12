/** Footer.tsx
 * 
 *  This is the Footer component for the website.
 *  It contains a fluid container with a copyright notice.
 *
 */
import React from 'react';
import styles from '../../styles/components/nav/Footer.module.css';
import { COPYRIGHT } from '../constants';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.containerFluid}>
        <div className={styles.row}>
          <div className={styles.colMd12}>
            <p>&copy; {COPYRIGHT}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
