// components/Skills.js
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skillRef = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.from(skillRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none reset",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  const skills = ["HTML", "CSS", "JavaScript","TypeScript", "React", "Next.js", "GSAP"];

  return (
    <div className="skills-container" ref={containerRef}>
      <h2 className="skills-title">My Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li
            key={skill}
            className="skill-item"
            ref={(el) => (skillRef.current[index] = el)}
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
