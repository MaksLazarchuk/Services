import "./Contact.css";
import backgroundBox7 from "../../../media/background-box7.jpg";
import "../../../fonts.css";

function Contact() {
  return (
    <div className="box7" id="contact">
      <img className="background-box7" src={backgroundBox7} alt="background" />
      <div className="container">
        <div className="text-container-box7">
          <p className="title-box7">Contact</p>
          <p className="text-box7">
            For new projects, ideas, business or anything you'd like to discuss,
            contact with me!
          </p>
        </div>
        <div className="content-contact">
          <form className="communication">
            <input
              type="name"
              name="name"
              className="name-contact"
              placeholder="Your name..."
              maxLength="60"
              required
            />
            <input
              type="email"
              name="email"
              className="email-contact"
              placeholder="Your email..."
              required
            />
            <input
              type="phone"
              name="phone"
              className="phone-contact"
              placeholder="Your phone number..."
              minLength="10"
              maxLength="10"
              required
            />
            <textarea
              name="message"
              type="submit"
              className="message-contact"
              required
              placeholder="Your message..."
              maxLength="530"
            />
            <button type="submit" className="contac-form-btn" />
          </form>
          <div className="con-dictates">
            <div className="dictates">
              <p className="than-contact">ADDRESS</p>
              <p className="dictates-contact">
                123 City name, Street, City, Country
              </p>
            </div>
            <div className="dictates">
              <p className="than-contact">EMAIL</p>
              <p className="dictates-contact">cahee@domain.com</p>
            </div>
            <div className="dictates">
              <p className="than-contact">PHONE</p>
              <p className="dictates-contact">+012 345 6789</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
