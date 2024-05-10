import douglas from "./crew-assets/image-douglas-hurley.png";
import "./crew.css";
const Crew = () => {
  return (
    <div className="crew">
      <div className="commander-container">
        <div className="content-bx">
          <h2>
            <span>02 </span>meet your crew
          </h2>

          <div className="left">
            <h3>
              <span>Commander</span>Douglas Hurley
            </h3>

            <p>
              Douglas Gerald Hurley is an American engineer, former Marine Corps
              pilot and former NASA astronaut. He launched into space for the
              third time as commander of Crew Dragon Demo-2.
            </p>

            
          </div>
          <div className="indicator">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
        </div>
        <div className="right">
          <img src={douglas} />
        </div>
      </div>
    </div>
  );
};

export default Crew;
