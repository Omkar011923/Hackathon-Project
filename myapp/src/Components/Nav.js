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
          <Link to={"/"}>
            <span>
              {" "}
              <span className="font-bold text-4xl text-blue-600">C</span>alm
            </span>
            Connect
          </Link>
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
            <Link to={"/"} onClick={toggleSidebar}>Home</Link>
          </li>
          <li>
            <Link to={"/Overview"} onClick={toggleSidebar}>Overview</Link>
          </li>
          <li>
            <Link to={"/Meditation"} onClick={toggleSidebar}>Meditation Support</Link>
          </li>
          <li>
            <Link to={"/Chat"} onClick={toggleSidebar}>Chat with Professional</Link>
          </li>
          <li>
            <Link to={"/CallSupport"} onClick={toggleSidebar}>Get call assitance</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
