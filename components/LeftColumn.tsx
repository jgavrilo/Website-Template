import React, { useState, useEffect } from "react";
import styles from "../styles/components/LeftColumn.module.css";

interface LeftColumnProps {
  items: { id: string; text: string }[];
}

const LeftColumn: React.FC<LeftColumnProps> = ({ items }) => {
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [leftColumnOffset, setLeftColumnOffset] = useState("0vh");

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

  const scrollToSection = (id: string) => {
    const sectionElement = document.getElementById(id);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const leftColumnClasses = `${styles.leftColumn} ${styles.dynamic}`;

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
