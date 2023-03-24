import { Link } from "react-router-dom";
import "./_card.scss";

const Card = ({title,icon,info,link}) => {
  return (
    <div className="card">
      <div className="card-icon">{icon}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-info">
        {info}
      </p>
      <Link to={link} className="card-cta">
        Read More
      </Link>
    </div>
  );
};

export default Card;
