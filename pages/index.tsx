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

const HomePage: React.FC = () => {

  const imageUrl = "https://picsum.photos/id/237/300/200";
  const title = "Example Image";
  const description = "This is an example image. And some text to show me it goes to the next line. This is an example image. And some text to show me it goes to the next line. This is an example image. And some text to show me it goes to the next line.";
  const link = "https://github.com/jgavrilo";
  return (
    <Layout>
      <div id="section1" className={styles.section1}>
        <ImageCard imageUrl={imageUrl} title={title} description={description} link={link}/>
      </div>
      <div id="section2" className={styles.section2}>
        Content goes here
      </div>
    </Layout>
  );
};

export default HomePage;
