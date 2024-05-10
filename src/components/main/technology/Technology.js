import imageLaunch from "./technology-assets/image-launch-vehicle-landscape.jpg";
import "./technology.css";

const Technology = () => {
  return (
    <div className="technology">
      <div className="launch-vehicle-container">
        <h2>
          <span>03</span> Space launch 101
        </h2>
        <div className="content-bx">
          <div className="content">
            <div className="content__indicator">
              <span>1</span>
              <span>2</span>
              <span>3</span>
            </div>
            <div className="content__details">
              <h3>
                <span>The terminology...</span>LAUNCH VEHICLE
              </h3>

              <p>
              A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!.
              </p>
            </div>
          </div>
          <div className="img-bx">
            <img src={imageLaunch} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
