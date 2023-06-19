/** RightColumn.tsx
 *
 *  This is the RightColumn component for a website.
 *  It displays a list of social icons in the right column of the page layout.
 *  The social icons are clickable and open the corresponding social media page in a new browser tab.
 *  
 *  @import {React} from 'react' - Importing React from React library.
 *  @import styles from '../../styles/components/layout/RightColumn.module.css' - Importing the CSS styles for this component from a CSS Module.
 *  
 *  @interface {RightColumnProps} - A TypeScript interface defining the shape of the props that the 'RightColumn' component expects.
 *      The 'socialIcons' prop is an array of objects, with each object having 'id', 'icon' and 'link' properties.
 *
 */
import React from 'react';
import styles from '../../styles/components/layout/RightColumn.module.css';

// Define the prop types for the RightColumn component
interface RightColumnProps {
  socialIcons: { id: string; icon: React.ReactNode; link: string }[];
}

const RightColumn: React.FC<RightColumnProps> = ({ socialIcons }) => {
  // Function to open a new tab with the desired link when a social icon is clicked.
  const openLink = (link: string) => {
    window.open(link, '_blank');
  };

  // The RightColumn component renders an aside element that contains a list of social icons.
  // Each icon is a span element that, when clicked, triggers the 'openLink' function.
  return (
    <aside className={styles.rightColumn}>
      {socialIcons.map((icon) => (
        <span
          key={icon.id}
          className={styles.item}
          onClick={() => openLink(icon.link)}
        >
          {icon.icon}
        </span>
      ))}
    </aside>
  );
};

export default RightColumn;
