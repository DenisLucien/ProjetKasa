import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import left from "../../assets/arrowLeft.png";
import right from "../../assets/arrowRight.png";
import "./logement.scss";
import UnderPicture from "./underPicture";
import Error from "../Error";


function Logement() {
  let { id } = useParams();
  let [logement, setLogement] = useState(null);
  const [data, setData] = useState(null);
  let [indexCrsl, setIndexCrsl] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    if (!id) {
      navigate("/error");
    }

    fetch("/logements.json")
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
        setLogement(jsonData.find((element) => element.id === id));
      })

      .catch((error) => {
        console.error(
          "Erreur lors de la récupération du fichier JSON :",
          error
        );
      });
  }, []);

  if (logement) {
    const photos = logement.pictures;
    function leftClicked() {
      if (indexCrsl > 0) {
        setIndexCrsl(indexCrsl - 1);
      } else {
        setIndexCrsl(logement.pictures.length - 1);
      }
    }

    function rightClicked() {
      if (indexCrsl < logement.pictures.length - 1) {
        setIndexCrsl(indexCrsl + 1);
      } else {
        setIndexCrsl(0);
      }
    }

    return (
      <div className="logement">
        <div className="caroussel">
          <img
            className="left"
            src={left}
            alt="previous"
            onClick={leftClicked}
          ></img>
          <img
            className="carousselImg"
            src={photos[indexCrsl]}
            alt="after"
          ></img>
          <img className="right" src={right} onClick={rightClicked}></img>
          <p className="carousselNumber">
            {indexCrsl + 1}/{photos.length}
          </p>
        </div>
        <UnderPicture logement={logement} />
      </div>
    );
  } else {
    // navigate("/error");
    return <Error />;
  }
}

export default Logement;
