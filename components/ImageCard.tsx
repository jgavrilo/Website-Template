import React, { useState } from "react";
import style from "../styles/components/ImageCard.module.css";
import { FaGithub } from "react-icons/fa";

interface ImageCardProps {
  imageUrl: string;
  title: string;
  description: string;
  link: string;
}

const ImageCard: React.FC<ImageCardProps> = ({
  imageUrl,
  title,
  description,
  link
}) => {
    const [showDescription, setShowDescription] = useState(false);
    const [imageZIndex, setImageZIndex] = useState(3);
  
    const handleClick = () => {
      setShowDescription(!showDescription);
      setImageZIndex(showDescription ? 3 : 1);
    };

  return (
    <div className={style.imageCard}>
      <div
        className={`${style.imageWrapper} ${
          showDescription ? style.shiftLeft : ""
        }`}
        style={{ zIndex: imageZIndex }}
        onClick={handleClick}
      >
        <img src={imageUrl} alt={title} className={style.image} />
        {!showDescription && <h2 className={style.title}>{title}</h2>}
      </div>
      <div className={`${style.descriptionCard} ${showDescription ? style.showDescription : ""}`}>
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className={style.githubLink}>
            <FaGithub className={style.githubIcon} />
        </a>
      </div>
    </div>
  );
};

export default ImageCard;
