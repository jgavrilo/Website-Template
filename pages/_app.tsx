/** _app.tsx
 * 
 *  This is the main application file in Next.js. It's a top-level component common across all pages.
 *  Useful for keeping application state and layout that persist between page changes.
 *  For example, here we import the global styles that should apply to all pages.
 *  
 *  @import {AppProps} from 'next/app' - importing the 'AppProps' type from 'next/app' which helps with typing.
 *  @import '@component/styles/globals.css' - importing global styles from the 'globals.css' file in the components/styles directory.
 *
 */
import '@component/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

