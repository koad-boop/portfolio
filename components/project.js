import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "🎨 Gradient Generator",
    stack: "HTML, CSS, JavaScript",
    description:
      "A simple and interactive web app to generate beautiful linear gradients with color pickers. Users can copy the CSS code easily.",
    demo: "https://linear-gradient-indol.vercel.app/",
    github: "https://github.com/koad-boop/linearGradient",
  },
  {
    title: "📝 ToDo App",
    stack: "HTML, CSS, JavaScript, React",
    description:
      "A React-powered to-do list app to manage tasks with features like add, delete, complete, and responsive design.",
    demo: "https://todo-ruby-eight-50.vercel.app/",
    github: "https://github.com/koad-boop/todo",
  },
  {
    title: "🌐 Portfolio Website",
    stack: "HTML, CSS, JavaScript, Next.js, GSAP",
    description:
      "A personal portfolio website showcasing skills, projects, and animations using GSAP for scroll-based effects.",
    demo: "https://your-portfolio-link.com",
    github: "https://github.com/yourname/portfolio",
  },
];

const Project = () => {
  const containerRef = useRef(null);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    gsap.from(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none reset",
      },
      y: 80,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    });
  }, []);

  const openModal = (project) => {
    setActiveProject(project);
  };

  const closeModal = () => {
    setActiveProject(null);
  };

  return (
    <>
      <div className="project-container" ref={containerRef}>
        <h2 className="project-title">🚀 My Projects</h2>
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            onClick={() => openModal(project)}
          >
            <h3>{project.title}</h3>
            <p className="stack">{project.stack}</p>
            <IoIosArrowDown className="arrow-icon" />
          </div>
        ))}
      </div>

      {activeProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{activeProject.title}</h2>
            <p className="stack">{activeProject.stack}</p>
            <p className="modal-description">{activeProject.description}</p>
            <div className="modal-buttons">
              <a href={activeProject.demo} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt /> Live Demo
              </a>
              <a href={activeProject.github} target="_blank" rel="noopener noreferrer">
                <FaGithub /> GitHub
              </a>
            </div>
            <button className="modal-close" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Project;
