import "../Styles/CardInfo.css";
import email from "../email.png";
import linkedin from "../linkedin.png";
const CardInfo = () => {
  return (
    <div className="card--info">
      <h1>Chris Cluney</h1>
      <h3>Frontend Developer</h3>
      <h4>chriscluney.website</h4>
      <div className="link--buttons">
        <img src={email} alt="email button" id="email--button" />
        <img src={linkedin} alt="linkedin button" id="linkedin--button" />
      </div>
      <div className="about-int">
        <h2>About</h2>
        <p>
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
        <h2>Interest</h2>
        <p>
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>
    </div>
  );
};

export default CardInfo;
