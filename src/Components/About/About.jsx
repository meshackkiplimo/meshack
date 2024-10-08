import "./About.css";
// import theme_pattern from "../../assets/theme_pattern.svg";
// import profile_img from "../../assets/about_profile.svg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        {/* <img src={theme_pattern} /> */}
      </div>
      <div className="about-sections">
        <div className="about-left">
          {/* <img src={profile_img} className="img" /> */}
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>
              front end developer who has wide knowledge in UI/UX design with
              more and more experience
            </p>
            <p>backend developer ,Interacted wit Api Intergrations</p>
            <p>
              {" "}
              fullstack engineer , Iam able to intergrate both backend and
              frontend to communicate and function well
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }}></hr>
            </div>
            <div className="about-skill">
              <p>MERN Stack</p>
              <hr style={{ width: "50%" }}></hr>
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "50%" }}></hr>
            </div>
            <div className="about-skill">
              <p>MySql</p>
              <hr style={{ width: "50%" }}></hr>
            </div>
            <div className="about-skill">
              <p>Mongo Db</p>
              <hr style={{ width: "50%" }}></hr>
            </div>
            <div className="about-skill">
              <p>Python</p>
              <hr style={{ width: "50%" }}></hr>
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>

        <hr />
        <div className="about-achievement">
          <h1>3+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>4+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
