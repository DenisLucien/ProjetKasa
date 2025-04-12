import { useState } from "react";
import "./collapse.scss";
import arrowUp from "../../../assets/arrowUp.png";
import CollapseElement from "../../../components/CollapseEle/index";
import { toggleSection } from "../../../components/CollapseEle/index";

function Collapse() {
  const [openSections, setOpenSections] = useState({
    fiabilite: false,
    respect: false,
    service: false,
    securite: false,
  });

  return (
    <div className="dropMenu">
      <CollapseElement
        title="Fiabilité"
        description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        isOpen={openSections.fiabilite}
        toggleSection={() => toggleSection("fiabilite", setOpenSections)}
      />
      <CollapseElement
        title="Respect"
        description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        isOpen={openSections.respect}
        toggleSection={() => toggleSection("respect", setOpenSections)}
      />
      <CollapseElement
        title="Service"
        description="La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."
        isOpen={openSections.service}
        toggleSection={() => toggleSection("service", setOpenSections)}
      />
      <CollapseElement
        title="Sécurité"
        description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        isOpen={openSections.securite}
        toggleSection={() => toggleSection("securite", setOpenSections)}
      />
    </div>
  );
}
export default Collapse;
