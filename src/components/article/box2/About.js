import "./About.css";
import ImgBox2 from "../../../media/img-box2.png";
import "../../../fonts.css";

function About() {
  return (
    <div className="box2">
      <div className="container" id="about">
        <img className="img-box2" src={ImgBox2} alt="img" />
        <div className="text-container-box2">
          <p className="title-box2">About Us</p>
          <p className="text-box2">
            Abore Cahee magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum.
          </p>
          <p className="text-box2 text-box2-bottom">
            Nim id est laborum. Sed ut perspiciatis unde omnis iste natus error
            sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
