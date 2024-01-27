import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
    };
  return (
    <>
      <div className="nav-logo bg-transparent">
        <h1 className="text-3xl">
          <span className="text-blue-600">
            {" "}
            <span className="font-extrabold text-4xl">C</span>alm
          </span>
          Connect
        </h1>
        <div className="hamburger" id="hamburger" onClick={toggleSidebar}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to={"/about"}>Overview</Link>
          </li>
          <li>
            <Link to={"/about"}>About us</Link>
          </li>
          <li>
            <Link to={"/about"}>Chat with Professional</Link>
          </li>
          <li>
            <Link to={"/Meditation"}>Meditation Support</Link>
          </li>
          <li>
            <Link to={"/CallSupport"}>Get call assitance</Link>
          </li>
          <li>
            <Link to={"/about"}>Notification</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
