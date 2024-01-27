import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AccordionUsage() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          What services does CalmConnect provide ?
        </AccordionSummary>
        <AccordionDetails>
          CalmConnect offers online mental health services, including chat
          therapy with qualified professionals via chat, phone.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          How does CalmConnect ensure privacy ?
        </AccordionSummary>
        <AccordionDetails>
          CalmConnect prioritizes confidentiality, using secure virtual spaces
          and industry-standard measures for user privacy during sessions.
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Is CalmConnect suitable for personal growth ?
        </AccordionSummary>
        <AccordionDetails>
          Yes, CalmConnect caters to specific challenges or personal growth,
          providing tailored support through compassionate experts in diverse
          formats.
        </AccordionDetails>
        <AccordionActions></AccordionActions>
      </Accordion>
    </div>
  );
}
