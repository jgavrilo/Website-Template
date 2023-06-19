/** Footer.tsx
 *
 *  This is the Footer component of the website.
 *  It's a simple footer that contains a fluid container with a copyright notice.
 *  
 *  @import {React} from 'react' - Importing React from the React library.
 *  @import styles from '../../styles/components/nav/Footer.module.css' - Importing the CSS styles for this component from a CSS Module.
 *  @import {COPYRIGHT} from '../Constants' - Importing the COPYRIGHT constant from the Constants module. This constant contains the copyright text to be displayed.
 *  
 *  @function Footer - The Footer component that renders the footer of the website.
 *      It returns a footer element containing a fluid container with a copyright notice.
 *  
 *  @export Footer - The Footer component is exported for use in other components.
 *
 */
import React from 'react';
import styles from '../../styles/components/nav/Footer.module.css';
import { COPYRIGHT } from '../Constants';

function Footer() {
  // The Footer component renders a footer element that contains a fluid container with a copyright notice.
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
