/** Layout.tsx
 * 
 *  This is the Layout component for the website.
 *  It wraps the main content of the page with a header (Navbar) and footer (Footer).
 *  It also includes LeftColumn and RightColumn components for the sidebars.
 * 
 *  @import {React} from 'react' - Importing React into your file to be used for the component below.
 *  @import {Navbar} from '../nav/Navbar' - Importing the 'Navbar' component from the nav directory. The Navbar is part of the page layout.
 *  @import {Footer} from '../nav/Footer' - Importing the 'Footer' component from the nav directory. The Footer is part of the page layout.
 *  @import styles from '../../styles/components/layout/Layout.module.css' - Importing the CSS styles for this component from a CSS Module.
 *  @import {LeftColumn} from './LeftColumn' - Importing the 'LeftColumn' component which represents the left sidebar in the layout.
 *  @import {RightColumn} from './RightColumn' - Importing the 'RightColumn' component which represents the right sidebar in the layout.
 *  @import {SOCIAL_MEDIA, SECTIONS} from '../Constants' - Importing constants from the 'Constants' module. 
 *      The 'SOCIAL_MEDIA' constant is an array of social media links, and the 'SECTIONS' constant is an array of section identifiers.
 * 
 *  @interface {LayoutProps} - A TypeScript interface defining the shape of the props that the 'Layout' component expects. 
 *      The 'children' prop is a 'ReactNode', which can be any allowable JSX.
 *
 */
import React from 'react';
import Navbar from '../nav/Navbar';
import Footer from '../nav/Footer';
import styles from '../../styles/components/layout/Layout.module.css';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';
import { SOCIAL_MEDIA, SECTIONS } from '../Constants';

// Define the type for the Layout component's props
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // The Layout component renders a page wrapper that includes a Navbar, a main content area (where 'children' is rendered), 
  // a LeftColumn, a RightColumn, and a Footer. The LeftColumn and RightColumn components receive 'items' and 'socialIcons' as props.
  return (
    <div className={styles.pageWrapper}>
      <Navbar items={SECTIONS}/>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <LeftColumn items={SECTIONS} />
        </div>
        <main className={styles.mainContent}>{children}</main>
        <div className={styles.rightColumn}>
          <RightColumn socialIcons={SOCIAL_MEDIA} />;
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
