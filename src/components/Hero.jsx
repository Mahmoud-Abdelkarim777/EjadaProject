import women from "../assets/image/women.png";
import icon1 from "../assets/image/Airbnb Logo.png";
import icon2 from "../assets/image/Hubspot Logo.png";
import icon3 from "../assets/image/Microsoft Logo.png";
import icon4 from "../assets/image/Google Logo.png";
function Hero() {
    return(
        <div className="container mt-5 my-2">
      <div className="row">
        <div className="col-md-6 order-md-2">
          <div className="ellipse1"></div>
          <div className="ellipse2"></div>
          <img
            src={women}
            className="img-fluid"
            alt="Responsive image"
          />
        </div>
        <div className="col-md-6 heder-cont">
          <div className="new d-flex align-items-center">
            <div className="text1">
              <p className="d-flex align-items-center justify-content-center">
                new
              </p>
            </div>
            <div className="text2">
              <p className="d-flex align-items-center">
                Stay connected to the upcoming & Recent jobs
              </p>
            </div>
          </div>
          <h1>
            Your Solution <br />
            Legal Consultacy
          </h1>
          <p>
            We are here to help you take care of your legality with the best
            service especially for you.
          </p>
          <button className="btn btn-primary mb-3 botton">Get Started</button>
          <div className="company">
            <p>Trusted by 10+ companies in indonesia</p>
            <div className="icon-grid">
              <img src={icon1} alt="photo" />
              <img src={icon2} alt="photo" />
              <img src={icon3} alt="photo" />
              <img src={icon4} alt="photo" />
            </div>
          </div>
        </div>
        <div className="name">
          <p>Tiara Andini</p>
          <p>-Lawyer</p>
        </div>
      </div>
    </div>
    )
}
export default Hero;