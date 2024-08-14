import "./Footer.css";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <span>MESHACK KIMAIYO</span>
          <p>Iam a software Engineer who is based in Nairobi Kenya</p>
        </div>
        <div className="footer-top-rigth">
          <img src={user_icon} />
          <div className="footer-email-input">
            <input type="text" placeholder="Enter your email" />
          </div>

          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          @ 2024 meshack kimaiyo.all rigths reserverd
        </p>
        <div className="footer-bottom-rigth">
          <p>Term of Services</p>
          <p>Privacy policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
