import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.from(aboutRef.current, {
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 80%",
        toggleActions: "play none none reset",
      },
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="about" ref={aboutRef}>
      <p>
        I am a frontend developer with experience in building responsive and animated web applications.
      </p>
    </div>
  );
};

export default About;
