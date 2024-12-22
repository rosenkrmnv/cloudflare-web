// pages/_app.js

import '../styles/globals.css'; // Ensures TailwindCSS styles are loaded

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

