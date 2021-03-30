import "./Home.css";
import backgroundBox1 from "../../../media/background-box1.jpg";

function Home() {
  return (
    <div className="box1" id="home">
      <div className="container">
        <img
          className="background-box1"
          src={backgroundBox1}
          alt="background"
        />
        <div className="text-container">
          <p className="title-box1">Fresh Life</p>
          <p className="text-box1">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco.
          </p>
          <button className="get-button">GET FREE NOW</button>
        </div>
        <div className="scroll-container">
          <div className="border-scroll">
            <div className="icon-scroll" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
