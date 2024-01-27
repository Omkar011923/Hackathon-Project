import React  from "react";
import Button from "../../Components/Button/Button";
import homeBg from "../../assets/Images/homepagebackground.mp4";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="home-section">
        <div className="overlay">
          <video src={homeBg} autoPlay loop muted />
          <div className="home-heading">
          </div>
          <div className="content">
          <h1>Prioritizing your well-being accessible, convenient, effective support.</h1>
            <h4>
              Together We Thrive: Igniting Innovation, Transforming Mental
              Health.
            </h4>
            <Link to={"/about"}>
              <Button heading="Get Started" icon={<i class="fa-solid fa-arrow-right"></i>}/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
