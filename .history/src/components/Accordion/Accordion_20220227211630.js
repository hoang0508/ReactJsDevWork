import React from "react";
import "./Accordion.scss";
import { FaAngleDown } from "react-icons/fa";
const Accordion = ({ title, content }) => {
  return (
    <div className="accordion">
      <div className="accordion-heading">
        <div className="accordion-title">{title}</div>
        <FaAngleDown className="accordion-icon" />
      </div>
      <div className="accordion-content">{content}</div>
    </div>
  );
};

export default Accordion;
