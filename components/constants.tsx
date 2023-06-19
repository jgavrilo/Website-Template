import { FaInstagram, FaGithub, FaSpotify, FaLinkedin } from 'react-icons/fa';
import { BiCoffeeTogo } from 'react-icons/bi';

export const SECTIONS = [
    { id: 'Section 1', text: 'Section 1' },
    { id: 'Section 2', text: 'Section 2' },
    { id: 'Section 3', text: 'Section 3' },
    { id: 'Section 4', text: 'Section 4' },
    { id: 'Section 5', text: 'Section 5' },
];

export const SOCIAL_MEDIA = [
    { id: "buymecoffee", icon: <BiCoffeeTogo />, link: "https://www.buymeacoffee.com/" },
    { id: "instagram", icon: <FaInstagram />, link: "https://www.instagram.com/" },
    { id: "spotify", icon: <FaSpotify />, link: "https://open.spotify.com/" },
    { id: "linkedin", icon: <FaLinkedin />, link: "https://www.linkedin.com/" },
    { id: "github", icon: <FaGithub />, link: "https://github.com/" },
];

export const COPYRIGHT = "Website Name All Rights Reserved.";
