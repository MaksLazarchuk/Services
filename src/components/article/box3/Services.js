import "./Services.css";
import tomatoBackground from "../../../media/tomato-background.png";
import "../../../fonts.css";

function Services() {
  return (
    <div className="box3" id="services">
      <div className="container">
        <div className="service-button">
          <a href="#shop" className="box-button-services">
            <p className="text-button">Online Shopping</p>
            <span className="icon-shop icon" />
          </a>
          <a href="#hand" className="box-button-services">
            <p className="text-button">Quality Product</p>
            <span className="icon-hand icon" />
          </a>
          <a href="#planet" className="box-button-services">
            <p className="text-button">Domestic & International Delivery</p>
            <span className="icon-planet icon" />
          </a>
          <a href="#carrot" className="box-button-services">
            <p className="text-button">Well Organized</p>
            <span className="icon-carrot icon" />
          </a>
        </div>
        <div className="text-background">
          <img className="tomato-background" src={tomatoBackground} alt="img" />
          <p className="name-box">Our Services</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
