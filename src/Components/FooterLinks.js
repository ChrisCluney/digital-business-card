import "../Styles/FooterLinks.css";
import TwitterIcon from "../TwitterIcon.png";
import FacebookIcon from "../FacebookIcon.png";
import InstagramIcon from "../InstagramIcon.png";
import GitHubIcon from "../GitHubIcon.png";
const FooterLinks = () => {
  return (
    <div className="footer--links">
      <img src={TwitterIcon} className="link--icons" alt="Twitter Icon" />
      <img src={FacebookIcon} className="link--icons" alt="Facebook Icon" />
      <img src={InstagramIcon} className="link--icons" alt="Instagram Icon" />
      <img src={GitHubIcon} className="link--icons" alt="GitHub Icon" />
    </div>
  );
};

export default FooterLinks;
