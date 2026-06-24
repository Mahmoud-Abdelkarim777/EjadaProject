import icon1 from "../assets/image/Bag.png";
import icon2 from "../assets/image/Rocket.png";
import icon3 from "../assets/image/User Arrows.png";
function Why() {
    return(
        <div className="why" id="TERMS">
      <div className="container d-flex" id="boxes">
        <div className="text mt-5">
          <h1>
            Why do we help <br />
            with legalization?
          </h1>
          <p className="mt-4">
            We are here for UMKM in Indonesia to carry out the legalization
            process, which is sometimes complicated.
          </p>
        </div>
        <div className="boxes d-flex flex-wrap">
          <div className="box1">
            <div className="circle">
              <i className="fa-solid fa-circle"></i>
              <i className="fa-solid fa-circle"></i>
              <i className="fa-solid fa-circle"></i>
            </div>
            <h4 className="mt-3">Enviromental Law</h4>
            <p>
              Environmental legal issues might occur since the planned business
              activities are designed
            </p>
          </div>
          <div className="box2">
            <div className="bag">
              <img src={icon1} alt="Why" />
            </div>
            <h4 className="mt-2">Corporate and Commercial</h4>
            <p className="mt-3">
              We provide a complete range of services for the continuity of your
              business activities.
            </p>
          </div>
          <div className="box3">
            <div className="rocket">
              <img src={icon2} alt="Why" />
            </div>
            <h4 className="mt-3">Information and Technology</h4>
            <p>
              IT not followed by the existing regulation which might cause legal
              uncertainty and business uncertainty.
            </p>
          </div>
          <div className="box4">
            <div className="user">
              <img src={icon3} alt="Why" />
            </div>
            <h4 className="mt-3">Other Services</h4>
            <p>
              In dealing with disruptive economic and legal challenge, our firm
              also provide various legal services.
            </p>
          </div>
        </div>
      </div>
    </div>
    )
}
export default Why;