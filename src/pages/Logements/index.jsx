import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import left from "../../assets/arrowLeft.png";
import right from "../../assets/arrowRight.png";
import "./logement.scss";
import UnderPicture from "./underPicture";
import Error from "../Error";

function Logement() {
  const { id } = useParams();
  // const { id } = parseInt(baseId);
  console.log("id:", id);
  
  const [data, setData] = useState(null);
  let [indexCrsl, setIndexCrsl] = useState(0);
  // const navigate = useNavigate();
  useEffect(() => {
    console.log("useEffect");
    fetch("/logements.json")
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
        // console.log("le JSON ici:");
        // console.log(jsonData);
      })

      .catch((error) => {
        console.error(
          "Erreur lors de la récupération du fichier JSON :",
          error
        );
      });
  }, []);

  

  if (data) {
    if (id >= data.length || id < 0) {
      console.log("trop loin");
      return <Error />;
    }
    else{
      const photos = data[id].pictures;
    function leftClicked() {
      if (indexCrsl > 0) {
        setIndexCrsl(indexCrsl - 1);
      } else {
        setIndexCrsl(data[id].pictures.length - 1);
      }
    }

    function rightClicked() {
      if (indexCrsl < data[id].pictures.length - 1) {
        setIndexCrsl(indexCrsl + 1);
      } else {
        setIndexCrsl(0);
      }
    }

    return (
      <div>
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
        <UnderPicture data={data} id={id} />
      </div>
    );
    }
    
  } else {
    return <div>Chargement...</div>;
  }
}

export default Logement;
