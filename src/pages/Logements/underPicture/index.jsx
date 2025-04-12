/* eslint-disable react/prop-types */
import "./underPicture.scss";
import CollapseUnderPicture from "./CollapseUnderPicture";

function UnderPicture(objetlogement) {
  // if (logement) {
  //   return <div>Chargement...</div>;
  // }
  const logement = objetlogement.logement;
  const rating = logement.rating;
  const tags = logement.tags;
  if (logement) {
    return (
      <div className="allUnderPicture">
        <div className="underPicture">
          <div className="firstLine">
            <div className="locationRef">
              <h1>{logement.title}</h1>
              <p>{logement.location}</p>
            </div>
            <div className="tags">
              {tags.map((tag) => (
                <p key={tag} className="tag">
                  {tag}
                </p>
              ))}
            </div>
          </div>
          <div className="secondLine">
            <div className="host">
              <p className="hostname">{logement.host.name}</p>
              <img
                className="hostpicture"
                src={logement.host.picture}
                alt="host"
              ></img>
            </div>

            <div className="rating">
              {[...Array(5)].map((_, index) => (
                <i
                  key={index}
                  className={
                    index < rating
                      ? "fa-solid fa-star saumon"
                      : "fa-solid fa-star grise"
                  }
                ></i>
              ))}
            </div>
          </div>
        </div>
        <CollapseUnderPicture logement={logement} />
      </div>
    );
  } else {
    return <div>Chargement...</div>;
  }
}
export default UnderPicture;
