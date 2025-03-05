/* eslint-disable react/prop-types */
import "./CollapseUnderPicture.scss";
import arrowUp from "../../../../assets/arrowUp.png";
import { useState } from "react";

function CollapseUnderPicture({ data, id }) {
  const [openSections, setOpenSections] = useState({
    description: false,
    equipements: false,
  });
  function toggleSection(section) {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  }
  return (
    <div className="collapseUnderPicture">
      <CollapseElement
        title="Description"
        description={data[id].description}
        isOpen={openSections.description}
        toggleSection={() => toggleSection("description")}
      />
      <CollapseElement
        title="Equipements"
        description={data[id].equipments}
        isOpen={openSections.equipements}
        toggleSection={() => toggleSection("equipements")}
      />
    </div>
  );
}

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
          <div className="elementDescription">{isOpen && <div>{description}</div    >}</div>
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
          <div className="elementDescription">{isOpen && <p>{description}</p>}</div>
        </div>
      );

  }

}
export default CollapseUnderPicture;
