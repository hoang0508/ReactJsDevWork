import React from "react";

const Accordion = ({ title, conntent }) => {
  return (
    <div className="accordian">
      <div className="accordion-title">{title}</div>
      <div className="accordion-content">{conntent}</div>
    </div>
  );
};

export default Accordion;
