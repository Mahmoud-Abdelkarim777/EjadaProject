import icon1 from "../assets/image/Social Icons.png";
import icon2 from "../assets/image/Social Icons (1).png";
import icon3 from "../assets/image/Social Icons (2).png";
import icon4 from "../assets/image/Social Icons (3).png";
function Foot() {
    return(
        <div className="foot">
        <div className="container main bg-danger">
          <div className="sub-main row">
            <div className="rights col-12 col-md-6">
              <p>&copy; 2021 Lawliet. All rights reserved</p>
            </div>
            <div className="icons bg- d-flex justify-content-end col-12 col-md-6">
              <img src={icon1} alt="foot" />
              <img src={icon2} alt="Foot" />
              <img src={icon3} alt="Foot" />
              <img src={icon4} alt="Foot" />
            </div>
          </div>
        </div>
      </div>
    )
}
export default Foot;