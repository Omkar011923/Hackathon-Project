import React from "react";
import CallIcon from "@mui/icons-material/Call";
import "./CallAssist.css";
import ChatIcon from "@mui/icons-material/Chat";
import MuiAccordion from "../../Components/MuiAccordion/MuiAccordion";

const CallAssist = () => {
  return (
    <>
      <div className="contact-page">
        <h1>Contact Our Team</h1>
        <h6>Let us know how we can help</h6>
      </div>
      <div className="pt-5 pl-5 pr-5 w-full h-full flex justify-center items-center contact-content gap-2">
        <div className="contact-card flex items-center">
          <CallIcon sx={{ fontSize: "40px", color: "#455eb5" }} />
          <h1>Get call 24x7 support from Professionals.</h1>
          <h6>Call Us</h6>
        </div>

        <div className="contact-card flex items-center">
          <ChatIcon sx={{ fontSize: "40px", color: "#455eb5" }} />
          <h1>Get Chat Support</h1>
          <h6>Chat with Us</h6>
        </div>
      </div>

      <div className="faqs">
        <div className="faqs-heading">
          <h1>Frequently Asked Questions (FAQ's)</h1>
        </div>
        <MuiAccordion />
      </div>
    </>
  );
};

export default CallAssist;
