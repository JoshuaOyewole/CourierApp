import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./_navbar.scss";

const navbar = () => {
  return (
    <div className="navbar container">
      {/* LOGO */}
      <div className="left">
        <img src={logo} alt="logo" className="logo" />
      </div>

      {/* NAVLINKS */}
      <ul className="nav-bar">
        <li className="nav-item">
          <NavLink to="/" className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }>
            About us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/services" className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }>
            Services
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/news-update" className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }>
            News / Update
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/partners" className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }>
            Partners
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/career" className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            } >
            Career
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }>
            Contact Us
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default navbar;
