import CardPic from "../Components/CardPic";
import CardInfo from "./CardInfo";
import FooterLinks from "./FooterLinks";
import "../Styles/BgCard.css";
const BgCard = () => {
  return (
    <div className="bg--back">
      <CardPic />
      <CardInfo />
      <FooterLinks />
    </div>
  );
};

export default BgCard;
