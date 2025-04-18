import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const headingRef = useRef(null);
  const imageRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    gsap.from(headingRef.current, {
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
        toggleActions: "play none none reset",
      },
      scale: 0.5,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(videoRef.current, {
      scrollTrigger: {
        trigger: videoRef.current,
        start: "top 80%",
        toggleActions: "play none none reset",
      },
      x: -200,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    });

    gsap.from(imageRef.current, {
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 80%",
        toggleActions: "play none none reset",
      },
      x: 200,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="home">
      <div className="video" ref={videoRef}>
        <video src="/code.mp4" autoPlay loop muted playsInline />
      </div>

      <div className="heading" ref={headingRef}>
        <h1 >Frontend Developer</h1>
        <h2 className="typewriter">Komal Singh</h2>
      </div>

      <div className="image" ref={imageRef}>
        <Image src="/bc.png" width={300} height={500} alt="Profile" />
      </div>
    </section>
  );
};

export default Home;