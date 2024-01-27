import React from "react";
import Button from "../../Components/Button/Button";
import "./About.css";
import StarIcon from "@mui/icons-material/Star";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LaptopMacOutlinedIcon from "@mui/icons-material/LaptopMacOutlined";

export default function About() {
  return (
    <>
      <section id="about-page">
        <div className="about-container">
          <div className="about-us">
            <h1>
              Transform Your Well-being with CalmConnect's Virtual Therapy.
            </h1>
            <h3>
              Get Connected with the Best Online Psychologist and Counsellor.
            </h3>
            <h3>
              {" "}
              Most Trusted and Safe Online Counselling and Therapy Platform in
              India.
            </h3>
            <Button />
          </div>
        </div>

        <div className="about-content">
          <h1>About CalmConnect</h1>
          <h4>
            write something more ChatGPT Welcome to CalmConnect, where healing
            and self-discovery converge in the digital realm. In a fast-paced
            world, we understand the significance of mental well-being, and our
            online chat therapy consultation platform is here to be your compass
            towards tranquility. Embark on a journey of self-reflection with our
            team of highly qualified Online Psychologists, Psychiatrists, Mental
            Health Therapists, Counsellors, and Psychotherapists. Through the
            convenience of chat, phone, or video calls, we break down barriers
            to accessing the support you deserve. CalmConnect is not just a
            counseling service; it's a sanctuary for your mind and soul. Our
            virtual space is designed to be your confidential haven, allowing
            you to express, explore, and evolve. Reclaim Your Inner Harmony by
            engaging in meaningful conversations with our compassionate experts
            who are dedicated to understanding and guiding you through life's
            complexities. Whether you are navigating specific challenges or
            seeking personal growth, CalmConnect tailors its approach to meet
            your unique needs. We believe that everyone deserves mental health
            support, and we strive to make it accessible, convenient, and
            effective. Talk to the Best Online Psychologist in India through
            CalmConnect today and take the empowering step towards a more
            balanced and fulfilling life. Your well-being is our priority, and
            your journey to inner peace begins here.
          </h4>
        </div>

        <div className="why-choose-us">
          <div className="choose-us card">
            <StarIcon
              sx={{
                paddingBottom: "10px",
                fontSize: "80px",
                color: "rgb(78,94,208)",
              }}
            />
            <h2>Quality Serivce</h2>
            <h4>
              We Believe in the Quality Mental Health Services. No Compromise.
            </h4>
          </div>
          <div className="choose-us card">
            <LaptopMacOutlinedIcon
              sx={{
                paddingBottom: "10px",
                fontSize: "80px",
                color: "rgb(78,94,208)",
              }}
            />
            <h2>Best Online Therapy</h2>
            <h4>
              We Believe in the Quality Mental Health Services. No Compromise.
            </h4>
          </div>
          <div className="choose-us card">
            <LockOutlinedIcon
              sx={{
                paddingBottom: "10px",
                fontSize: "80px",
                color: "rgb(78,94,208)",
              }}
            />
            <h2>Secure</h2>
            <h4>
              We Ensure the Confidentiality & Security in all the domains of the
              Client Information.
            </h4>
          </div>
        </div>
      </section>
    </>
  );
}
