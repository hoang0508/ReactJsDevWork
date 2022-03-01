import React from "react";

const Accordion = ({ title, content }) => {
  return (
    <div className="accordian">
      <div className="accordion-title">{title}</div>
      <div className="accordion-content">{content}</div>
    </div>
  );
};

export default Accordion;
