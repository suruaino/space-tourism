import moon from "./destination-assets/image-moon.png";
import "./destination.css";
const Destination = () => {
  return (
    <div className="destination">
      <div className="moon-container">
        <h2><span>01</span> Pick your destination</h2>
        <div className="content-bx">
          <div className="left">
            <img src={moon} />
          </div>
          <div className="right">
            <ul className="tab-bx">
              <li>Moon</li>
              <li>Mars</li>
              <li>Europa</li>
              <li>Titan</li>
            </ul>
            <h3>Moon</h3>
            <p>
              See our planet as you’ve never seen it before. A perfect relaxing
              trip away to help regain perspective and come back refreshed.
              While you’re there, take in some history by visiting the Luna 2
              and Apollo 11 landing sites.
            </p>
            <div className="more-details">
              <div className="left">
                <span className="avg-distance">avg. distance</span>
                <span className="avg-distance__value">384,400km</span>
              </div>

              <div className="right">
                <span className="travel-time">est. travel time</span>
                <span className="avg-distance__value">3 days</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
