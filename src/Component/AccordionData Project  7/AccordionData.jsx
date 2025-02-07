import React, { useState } from "react";
import "./style.css";

const AccordionData = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
    
  };

  return (
    <section className="accordion-card">
      <div className="header" onClick={handleToggle}>
        <div>{title}</div>
        <p className="icon">{isActive ? "-" : "+"}</p>
      </div>
      <div className="content">
        {isActive && <p className="card-info">{content}</p>}
      </div>
    </section>
  );
};

export default AccordionData;