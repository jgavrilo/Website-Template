import { FaFacebook, FaInstagram, FaGithub, FaSpotify, FaLinkedin } from 'react-icons/fa';

export const SECTIONS = [
    { id: 'intro', text: 'Home' },
    { id: 'aboutme', text: 'About Me' },
    { id: 'experience', text: 'Experience' },
    { id: 'education', text: 'Education' },
    { id: 'projects', text: 'Projects' },
];

export const SOCIAL_MEDIA = [
    { id: "facebook", icon: <FaFacebook />, link: "https://www.facebook.com" },
    { id: "instagram", icon: <FaInstagram />, link: "https://www.instagram.com" },
    { id: "github", icon: <FaGithub />, link: "https://www.github.com" },
    { id: "spotify", icon: <FaSpotify />, link: "https://www.github.com" },
    { id: "linkedin", icon: <FaLinkedin />, link: "https://www.github.com" },
];

export const COPYRIGHT = "2023 YourSiteName. All Rights Reserved.";
