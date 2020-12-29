import React from "react";
import {FaAtlassian} from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <FaAtlassian style={{ color: "#d35400" }} />
        <h4>Localzi</h4>
      </div>
      <ul className="navlist">
        <li className="links">
          <a href="#">Home</a>
        </li>
        <li className="links">
          <a href="#">Guide</a>
        </li>
        <li className="links">
          <a href="#">Login</a>
        </li>
        <li className="links">
          <a href="#">SignUp</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
