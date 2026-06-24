import icon1 from "../assets/image/Logo.png";
function Footer() {
    return(
        <div className="footer" id="CONTACT">
      <div className="container main">
        <div className="row sub-main">
          <div className="logo col-12 col-md-6 d-flex align-items-center">
            <img src={icon1} alt="Footer" />
            <p>Lawliet</p>
          </div>
          <div className="text col-12 col-md-6 row">
            <div className="product col-4 col-md-4">
              <h5>product</h5>
              <p>Overview</p>
              <p>Features</p>
              <p>Tutorials</p>
              <p>Pricing</p>
              <p>Releases</p>
            </div>
            <div className="company col-4 col-md-4">
              <h5>company</h5>
              <p>About</p>
              <p>Press</p>
              <p>Careers</p>
              <p>Contact</p>
              <p>Partners</p>
            </div>
            <div className="support col-4 col-md-4">
              <h5>support</h5>
              <p>Help Center</p>
              <p>Terms of service</p>
              <p>Legal</p>
              <p>Privacy Policy</p>
              <p>Status</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}
export default Footer;