// Importing necessary icons from the 'react-icons' package.
// Reference: https://react-icons.github.io/react-icons/
import { FaInstagram, FaGithub, FaSpotify, FaLinkedin } from 'react-icons/fa';
import { BiCoffeeTogo } from 'react-icons/bi';

// TODO: Update Sections
// An array of section objects for navigation menu. Each object has an 'id' and 'text' property.
// This structure makes it easy to add, remove or change navigation sections for future websites.
export const SECTIONS = [
    { id: 'Section 1', text: 'Section 1' },
    { id: 'Section 2', text: 'Section 2' },
    { id: 'Section 3', text: 'Section 3' },
    { id: 'Section 4', text: 'Section 4' },
    { id: 'Section 5', text: 'Section 5' },
];

// TODO: Update Socials
// An array of social media objects. Each object has an 'id', 'icon' and 'link' property.
// The 'icon' property contains a JSX element representing the social media icon.
// The 'link' property contains a URL string to the respective social media site.
// This structure makes it easy to add, remove or change social media links for future websites.
export const SOCIAL_MEDIA = [
    { id: "buymecoffee", icon: <BiCoffeeTogo />, link: "https://www.buymeacoffee.com/" },
    { id: "instagram", icon: <FaInstagram />, link: "https://www.instagram.com/" },
    { id: "spotify", icon: <FaSpotify />, link: "https://open.spotify.com/" },
    { id: "linkedin", icon: <FaLinkedin />, link: "https://www.linkedin.com/" },
    { id: "github", icon: <FaGithub />, link: "https://github.com/" },
];

// TODO: Update Website Name
// Website name string, used presumably in the title tag or header section of the site.
// This can be changed to reflect the name of any future website.
export const WEBSITE_NAME = "Website Name";

// TODO: Update Copywrite String
// Copyright string, used presumably in the footer section of the site.
// This can be changed to reflect the name and copyright status of any future website.
export const COPYRIGHT = "Website Name All Rights Reserved.";
