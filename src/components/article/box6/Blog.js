import "./Blog.css";
import BlogImg1 from "../../../media/blog-img1.jpg";
import BlogImg2 from "../../../media/blog-img2.jpg";
import BlogImg3 from "../../../media/blog-img3.jpg";

function Blog() {
  return (
    <div className="box6" id="blog">
      <div className="container">
        <div className="text-container-box6">
          <p className="title-box6">Blog</p>
          <p className="text-box6">
            Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit.
          </p>
        </div>
        <div className="blog-con-img">
          <div className="con-cards">
            <img className="blog-img" src={BlogImg1} alt="blog" />
            <div className="text-img">
              <p className="date-blog">20 NOV</p>
              <p className="phrase-blog">
                Green Smoothies: Too Much of a Good Thing?
              </p>
              <p className="when-blog">By Auskteez - 2 hours ago</p>
            </div>
          </div>
          <div className="con-cards">
            <img className="blog-img" src={BlogImg2} alt="blog" />
            <div className="text-img">
              <p className="date-blog">
                14
                <br />
                NOV
              </p>
              <p className="phrase-blog">
                Growing Food and a “Thirst” for Innovation
              </p>
              <p className="when-blog">By Auskteez - 3 hours ago</p>
            </div>
          </div>
          <div className="con-cards">
            <img className="blog-img" src={BlogImg3} alt="blog" />
            <div className="text-img">
              <p className="date-blog">10 NOV</p>
              <p className="phrase-blog">
                Pesticides & Food: What You Need to Know
              </p>
              <p className="when-blog">By Auskteez - 6 hours ago</p>
            </div>
          </div>
        </div>
        <button className="blog-button-view-more">VIEW MORE</button>
      </div>
    </div>
  );
}

export default Blog;
