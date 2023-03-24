import { Link } from "react-router-dom";
import "./_slideshow.scss";

const Slideshow = () => {
  return (
    <div className="slideshow container">
      <div className="content">
        <h3 className="services">What we do</h3>
        <h1 className="heading">We solve your <span className="break">Logistics</span>  <span className="break primary-color">Challenges</span> </h1>
        <div className="cta">
          <Link to="/career" className="btn outline-btn">
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
