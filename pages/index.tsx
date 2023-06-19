/** index.tsx
 * 
 *  This is the homepage of the website.
 *  It contains an introduction section.
 * 
 *  @import {React} from 'react' - This import statement is importing React into your file to be used for the component below.
 *  @import {Layout} from '../components/layout/Layout' - Importing the 'Layout' component from the layout directory in the components folder.
 *      The Layout component is assumed to contain the layout elements common across all pages (like Navigation, Footer, etc.).
 *  @import {Section} from '../components/Section' - Importing the 'Section' component which is assumed to represent a section on the webpage.
 *
 */
import React from 'react';
import Layout from '../components/layout/Layout';
import Section from '../components/Section';

// HomePage component defined as a Functional Component using TypeScript's syntax (React.FC).
const HomePage: React.FC = () => {
  
  // The return function renders the layout on the page.
  // Inside the Layout component, there is a Section component with an id of "intro" that will represent the introduction section.
  return (
    <Layout>
      <Section id="intro">

      </Section>
    </Layout>
  );
};

// The HomePage component is exported for use in other files.
export default HomePage;
