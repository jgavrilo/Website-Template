/** LeftColumn.tsx
 * 
 *  This is the LeftColumn component for a website.
 *  It displays a list of section links that are fixed to the left side of the page.
 *  The position of the LeftColumn is updated on scroll.
 * 
 *  @import {React, useState, useEffect} from "react" - Importing React, useState and useEffect from React library.
 *  @import styles from "../../styles/components/layout/LeftColumn.module.css" - Importing the CSS styles for this component from a CSS Module.
 * 
 *  @interface {LeftColumnProps} - A TypeScript interface defining the shape of the props that the 'LeftColumn' component expects. 
 *      The 'items' prop is an array of objects, with each object having 'id' and 'text' properties.
 * 
 */
import React, { useState, useEffect } from "react";
import styles from "../../styles/components/layout/LeftColumn.module.css";

// Define the prop types for the LeftColumn component
interface LeftColumnProps {
  items: { id: string; text: string }[];
}

const LeftColumn: React.FC<LeftColumnProps> = ({ items }) => {
  // The state 'lastScrollPosition' is used to track the last recorded scroll position.
  // The state 'leftColumnOffset' is used to dynamically adjust the offset of the LeftColumn during scrolling.
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [leftColumnOffset, setLeftColumnOffset] = useState("0vh");

  // 'useEffect' to handle scroll events and update the left column position accordingly.
  // A scroll event listener is added when the component mounts, and removed when the component unmounts.
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;
      if (currentScrollPosition < lastScrollPosition) {
        setLeftColumnOffset("0vh");
      } else {
        setLeftColumnOffset("-10vh");
      }
      setLastScrollPosition(currentScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollPosition]);

  // Function to scroll to the desired section when a link is clicked.
  // The 'scrollIntoView' method is used to smoothly scroll to the selected section.
  const scrollToSection = (id: string) => {
    const sectionElement = document.getElementById(id);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const leftColumnClasses = `${styles.leftColumn} ${styles.dynamic}`;

  // The LeftColumn component renders an aside element that contains a list of items.
  // Each item is a span element that, when clicked, triggers the 'scrollToSection' function.
  // The offset of the aside element is dynamically updated based on the scroll position.
  return (
    <aside
      className={leftColumnClasses}
      style={{ transform: `translateY(${leftColumnOffset})` }}
    >
      {items.map((item) => (
        <span
          key={item.id}
          className={styles.item}
          onClick={() => scrollToSection(item.id)}
        >
          {item.text}
        </span>
      ))}
    </aside>
  );
};

export default LeftColumn;
