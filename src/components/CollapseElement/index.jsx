import arrowUp from "../../assets/arrowUp.png";
import { useState } from "react";

export const toggleSection = (section, setOpenSections) => {
  setOpenSections((prevState) => ({
    ...prevState,
    [section]: !prevState[section],
  }));
};

function CollapseElement({ title, description, isOpen, toggleSection }) {
  if (title === "Equipements") {
    description = description.map((equipement) => (
      <p key={equipement} className="equipement">
        {equipement}
      </p>
    ));
    return (
        <div className="CollapseElement">
          <div className="elementTitle" onClick={toggleSection}>
            <h2>{title}</h2>
            <img src={arrowUp} alt="" className={isOpen ? "rotate" : ""} />
          </div>
          <div className={`elementDescription ${isOpen ? "open":"closed"}`}> {description}</div>
        </div>
      );
  }
  else{
    return (
        <div className="CollapseElement">
          <div className="elementTitle" onClick={toggleSection}>
            <h2>{title}</h2>
            <img src={arrowUp} alt="" className={isOpen ? "rotate" : ""} />
          </div>
          <div className={`elementDescription ${isOpen ? "open":"closed"}`}> <p>{description}</p></div>
        </div>
      );

  }

}

export default CollapseElement;