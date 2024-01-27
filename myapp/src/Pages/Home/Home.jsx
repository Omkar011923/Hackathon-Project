import React, { useState } from "react";
import Button from "../../Components/Button/Button";
import homeBg from "../../assets/Images/homepagebackground.mp4";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      <div className="home-section">
        <div className="overlay">
          <div className="nav-logo">
            <h1>CalmConnect</h1>
            <div className="hamburger" id="hamburger" onClick={toggleSidebar}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
          <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
            <ul>
              <li>
                <Link to={"/overview"}>Overview</Link>
              </li>
              <li>
                <Link to={"/chat"}>Chat with Professional</Link>
              </li>
              <li>
                <Link to={"/about"}>Meditation Support</Link>
              </li>
              <li>
                <Link to={"/about"}>Get call assitance</Link>
              </li>
              <li>
                <Link to={"/about"}>Notification</Link>
              </li>
            </ul>
          </div>

          <video src={homeBg} autoPlay loop muted />
          <div className="content">
            <h4>
              Together We Thrive: Igniting Innovation, Transforming Mental
              Health.
            </h4>
            <Link to={"/about"}>
              <Button />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
