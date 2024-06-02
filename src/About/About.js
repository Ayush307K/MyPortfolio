import Interests from "./Interests";
import profile from "../Assets/Astronot.gif";
import './About.css';
function About() {
  return (
    <div className="about">
      <div className="about-main">
        <div className="about-heading-img">
          <h4 className="about-heading">ABOUT</h4>
          <img src={profile} alt={"MyImage"} className="about-img"/>
        </div>
        <div className="about-text">
          <h1><span>👋</span> Hey there</h1>
          <br/>
          <p>I'm Ayush, a passionate software developer. I specialize in Web Development, crafting seamless user experiences and robust backend solutions. With a knack for problem-solving, I thrive on creating elegant code that makes an impact. I'm always exploring new tools and techniques to stay at the forefront of the ever-evolving tech landscape.
            <br />
            <br />
            📫 Open to collaborations and exciting projects, I'm eager to connect with fellow developers and tech enthusiasts. Let's build something amazing together!
            <br />
            <br />
            Happy coding! 🖥️ 
          </p>
        </div>  
      </div>
      <h4 className="interests-heading">INTERESTS</h4>
      <Interests />
    </div>
  );
}
export default About;