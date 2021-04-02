import "./Subscribe.css";
import ImgBox5 from "../../../media/img-box5.jpg";
import "../../../fonts.css";

function Subscribe() {
  return (
    <div className="box5">
      <div className="container">
        <img className="img-box5" src={ImgBox5} alt="background" />
        <div className="subscribe-container-box5">
          <div className="text-container-box5">
            <p className="title-box5">Subscribe To Us</p>
            <p className="text-box5">
              Dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam.
            </p>
          </div>
          <form>
            <input
              type="email"
              className="email-sub"
              placeholder="Your email address..."
              required
            />
            <button type="submit" className="subscribe-button">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
