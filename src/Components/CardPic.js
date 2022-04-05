import chrispic from "../chrispic.png";
import "../Styles/CardPic.css";

const CardPic = () => {
  return (
    <div>
      <img src={chrispic} className="card--pic" alt="portrait" />
    </div>
  );
};

export default CardPic;
