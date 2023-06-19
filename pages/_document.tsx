/** _document.tsx
 * 
 *  This is a custom document file in Next.js. It's used to augment the application's <html> and <body> tags.
 *  Useful for setting attributes or tags common across all pages.
 *  Here, the language of the document is set to English.
 *  
 *  @import {Html, Head, Main, NextScript} from 'next/document' - importing the necessary components from 'next/document'.
 *
 */
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
