// pages/_app.js
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../styles/globals.css';

gsap.registerPlugin(ScrollTrigger);

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Optional global config
    ScrollTrigger.defaults({
      toggleActions: "play none none reset",
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
