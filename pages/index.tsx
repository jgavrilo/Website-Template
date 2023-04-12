/** index.tsx
 * 
 *  This is the homepage of the website.
 *  It contains two sections with placeholder content.
 *
 */
import React from 'react';
import Layout from '../components/layout/Layout';
import Section from '../components/sections/Section';
import styles from '../styles/pages/Home.module.css';
import ImageCard from '@component/components/ImageCard';
import Introduction from '@component/components/sections/Introduction';
import AboutMe from '@component/components/sections/AboutMe';
import Skills from '@component/components/sections/Skills';
import Experience from '@component/components/sections/Experience';
import Education from '@component/components/sections/Education';
import Projects from '@component/components/sections/Projects';

const HomePage: React.FC = () => {

  const imageUrl = "https://picsum.photos/id/237/300/200";
  const title = "Example Image";
  const description = "This is an example image. And some text to show me it goes to the next line. This is an example image. And some text to show me it goes to the next line. This is an example image. And some text to show me it goes to the next line.";
  const link = "https://github.com/jgavrilo";
  
  return (
    <Layout>
      <Section id="intro">
        <Introduction />
      </Section>
      <Section id="aboutme">
        <AboutMe />
      </Section>
      <Section id="experience">
        <Experience />
      </Section>
      <Section id="education">
        <Education />
      </Section>
      <Section id="projects">
        <Projects />
      </Section>
    </Layout>
  );
};

export default HomePage;

/*
<Section id="skills">
  <Skills />
</Section>
<Section id="dd">
  <ImageCard imageUrl={imageUrl} title={title} description={description} link={link} />
</Section>
*/