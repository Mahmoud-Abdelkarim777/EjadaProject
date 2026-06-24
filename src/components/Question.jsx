import icon1 from "../assets/image/Call.png";
import icon2 from "../assets/image/man.png";
function Question() {
    return(
        <div className="question" id="ABOUT">
      <div className="container main-cont">
        <div className="row align-items-center content">
          <div className="complex row col-md-8">
            <h2>Complex Questions?</h2>
            <p className="p">
              Request for a personalized budget for your legal problem. We will
              send you a coupe options in 24 hours. You can have free consult ,
              if a our first customer
            </p>
            <div className="call px-2 d-flex rounded-lg text-light">
              <img src={icon1} className="m-2" alt="Question" />
              <p className="m-2 p2">call now</p>
            </div>
          </div>
          <div className="image col d-flex justify-content-end">
            <img src={icon2} alt="Question" />
          </div>
        </div>
      </div>
    </div>
    )
}
export default Question;