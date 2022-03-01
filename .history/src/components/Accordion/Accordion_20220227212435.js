import React, { useState } from "react";
import "./Accordion.scss";
import { FaAngleDown } from "react-icons/fa";
const Accordion = ({ title, content }) => {
  const [active, setActive] = useState(false);
  return (
    <div className={`accordion ${active ? "accordion-active" : ""}`}>
      <div className="accordion-heading" onClick={() => setActive(!active)}>
        <div className="accordion-title">{title}</div>
        <FaAngleDown className="accordion-icon" />
      </div>
      <div className="accordion-content">{content}</div>
    </div>
  );
};

export default Accordion;
