import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import resume from "../../assets/kiplimo.pdf"; // Import the PDF file

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} className="img" alt="Profile" />
      <h1>
        I am<span> Meshack Kimaiyo</span>, a Software Engineer.
      </h1>
      <p>
        I am a Fullstack Engineer from Nairobi, Kenya with 2 years of experience
        in tech.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <a href={resume} className="hero-resume" download>
          My Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
