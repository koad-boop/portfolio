
import Navbar from "../components/Navbar";
import HomeSection from "../components/home"; 
import About from "../components/About";
import Skill from "@/components/skill";
import Project from "@/components/project";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const IndexPage = () => {
  return (
    <>
      <Navbar />
      
      <HomeSection />
      
      <section id="About">
      <About />
      </section>
      <section id="Skills">
      <Skill />
      </section>
      <section id="Projects">
        <Project />
      </section>
    </>
  );
};

export default IndexPage; // 
