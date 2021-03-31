import "./Gallery.css";
import Gallery1 from "../../../media/gallery1.jpg";
import Gallery2 from "../../../media/gallery2.jpg";
import Gallery3 from "../../../media/gallery3.jpg";
import Gallery4 from "../../../media/gallery4.jpg";
import Gallery5 from "../../../media/gallery5.jpg";

function Gallery() {
  return (
    <div className="box4" id="gallery">
      <div className="container">
        <div className="text-container-box4">
          <p className="title-box4">Gallery</p>
          <p className="text-box4">
            Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
        <div className="gallery-box">
          <img className="gallery-img" src={Gallery1} alt="gallery" />
          <img className="gallery-img" src={Gallery2} alt="gallery" />
          <img className="gallery-img" src={Gallery3} alt="gallery" />
          <img className="gallery-img" src={Gallery4} alt="gallery" />
          <img className="gallery-img" src={Gallery5} alt="gallery" />
        </div>
        <button className="button-view-more">VIEW MORE</button>
      </div>
    </div>
  );
}

export default Gallery;
