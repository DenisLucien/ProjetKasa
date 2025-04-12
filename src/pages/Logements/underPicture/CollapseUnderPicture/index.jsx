/* eslint-disable react/prop-types */
import "./CollapseUnderPicture.scss";
import arrowUp from "../../../../assets/arrowUp.png";
import { useState } from "react";
import CollapseElement from "../../../../components/CollapseEle/index.jsx";
import { toggleSection } from "../../../../components/CollapseEle/index.jsx";
function CollapseUnderPicture(objetlogement) {
  const logement = objetlogement.logement;
  const [openSections, setOpenSections] = useState({
    description: false,
    equipements: false,
  });
  return (
    <div className="collapseUnderPicture">
      <CollapseElement
        title="Description"
        description={logement.description}
        isOpen={openSections.description}
        toggleSection={() => toggleSection("description", setOpenSections)}
      />
      <CollapseElement
        title="Equipements"
        description={logement.equipments}
        isOpen={openSections.equipements}
        toggleSection={() => toggleSection("equipements", setOpenSections)}
      />
    </div>
  );
}

export default CollapseUnderPicture;
