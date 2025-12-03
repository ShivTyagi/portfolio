import "./ContactSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@/components/UI/Button";
import {
  faPhone,
  faEnvelope,
  faPaperPlane,
  faUser,
  faCommentDots
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faDribbble,
  faFacebook,
  faTwitter,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";

export default function ContactSection() {
  return (
    <section className="contact-wrapper">

      {/* Title */}
      <div className="contact-title">
        <h1>
          GET <span className="highlight">IN TOUCH</span>
        </h1>
        <p className="subtitle-line">
          <span className="line" /> I'M ALWAYS OPEN TO DISCUSSING PRODUCT DESIGN WORK OR PARTNERSHIPS. <span className="line" />
        </p>
      </div>

      <div className="contact-content">
        
        {/* Left Info Panel */}
        <div className="contact-left">
          <div className="info-block">
            <p>Phone</p>
            <p><FontAwesomeIcon icon={faPhone} /> +91 9876543210</p>
          </div>

          <div className="info-block">
            <p>Email</p>
            <p><FontAwesomeIcon icon={faEnvelope} /> you@email.com</p>
          </div>

          <div className="info-block">
            <p>Instagram</p>
            <p><FontAwesomeIcon icon={faInstagram} /> yourhandle</p>
          </div>

          <div className="info-block">
            <p>Dribbble</p>
            <p><FontAwesomeIcon icon={faDribbble} /> your.dribbble</p>
          </div>

          <div className="info-block">
            <h4>Social Profiles</h4>
            <div className="social-row">
              <FontAwesomeIcon icon={faFacebook} className="social-icon" />
              <FontAwesomeIcon icon={faTwitter} className="social-icon" />
              <FontAwesomeIcon icon={faYoutube} className="social-icon" />
              <FontAwesomeIcon icon={faDribbble} className="social-icon" />
            </div>
          </div>
        </div>

        {/* Right Form Panel */}
        <div className="contact-right">
          <p className="contact-description">
            If you have any suggestion, project or even you want to say Hello… please fill out the form below and I will reply you shortly.
          </p>

          <div className="contact-form">
            <div className="form-row">
              <div className="input-box">
                <FontAwesomeIcon icon={faUser} className="input-icon" />
                <input type="text" placeholder="Your Name" />
              </div>

              <div className="input-box">
                <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                <input type="email" placeholder="Your Email" />
              </div>
            </div>

            <div className="input-box textarea-box">
              <FontAwesomeIcon icon={faCommentDots} className="input-icon" />
              <textarea placeholder="Your Message"></textarea>
            </div>

             <Button variant="primary"> <FontAwesomeIcon icon={faPaperPlane} />  SEND MESSAGE</Button>
          </div>
        </div>

      </div>
    </section>
  );
}
