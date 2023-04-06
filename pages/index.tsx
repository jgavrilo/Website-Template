/** index.tsx
 * 
 *  This is the homepage of the website.
 *  It contains two sections with placeholder content.
 *
 */
import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/pages/Home.module.css';
import ImageCard from '@component/components/ImageCard';
import Introduction from '@component/components/Introduction';
import AboutMe from '@component/components/AboutMe';
import Skills from '@component/components/Skills';
import Experience from '@component/components/Experience';
import Education from '@component/components/Education';
import Projects from '@component/components/Projects';
const HomePage: React.FC = () => {

  const imageUrl = "https://picsum.photos/id/237/300/200";
  const title = "Example Image";
  const description = "This is an example image. And some text to show me it goes to the next line. This is an example image. And some text to show me it goes to the next line. This is an example image. And some text to show me it goes to the next line.";
  const link = "https://github.com/jgavrilo";
  return (
    <Layout>
      <div id="intro" className={styles.section1}>
        <Introduction/>
      </div>
      <AboutMe/>
      <div id="skills" className={styles.section1}>
        <Skills/>
      </div>
      <Experience/>
      <div id="education" className={styles.section1}>
        <Education/>
      </div>
      <Projects/>
      <div id="dd" className={styles.section1}>
        <ImageCard imageUrl={imageUrl} title={title} description={description} link={link}/>
      </div>
    </Layout>
  );
};

export default HomePage;
