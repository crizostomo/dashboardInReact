import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { FiBell } from "react-icons/fi";
import { BsFillCaretDownFill } from "react-icons/bs";
import avatar from "../assets/avatarImage.jpg";

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="title">
        <h2>Dashboard</h2>
        <span>Detailed Information About Your Results</span>
      </div>
      <div className="container">
        <div className="search">
          <BiSearchAlt />
          <input type="text" placeholder="Search..." />
        </div>
        <div className="profile">
          <FiBell className="bell" />
          <div className="image">
            <img src={avatar} alt="" />
          </div>
          <div className="profile_name">
              <h4>Diogo Almeida</h4>
              <h6>Admin</h6>
          </div>
          <BsFillCaretDownFill />
        </div>
      </div>
    </div>
  );
}
