import React, { useState } from "react";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaMusic,
  FaPlus,
  FaHeart,
  FaCalendar,
  FaAddressBook,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

import logoImage from "../Images/Vdj-Logo.png"; // Import your logo image

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Vdj Production ",
      icon: <FaTh />,
    },
    {
      path: "/vdj-artists",
      name: "Vdj Arstists",
      icon: <FaUserAlt />,
    },
    {
      path: "/release",
      name: "New Release",
      icon: <FaPlus />,
    },
    {
      path: "/music",
      name: "Music",
      icon: <FaMusic />,
    },
    {
      path: "/social",
      name: "Social",
      icon: <FaHeart />,
    },
    {
        path: "/events",
        name: "Events",
        icon: <FaCalendar />,
      },
    {
      path: "/contact",
      name: "Contact Us",
      icon: <FaAddressBook />,
    },
  ];

  return (
    <div className="container">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <div style={{ marginLeft: isOpen ? "0px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
          <div className="logo">
            <img src={logoImage} alt="Logo" />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeClassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
