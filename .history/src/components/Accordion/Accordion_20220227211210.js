import React from "react";
import "./Accordion.scss";
const Accordion = ({ title, content }) => {
  return (
    <div className="accordion">
      <div className="accordion-title">{title}</div>
      <div className="accordion-content">{content}</div>
    </div>
  );
};

export default Accordion;
