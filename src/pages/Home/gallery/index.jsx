import { useEffect, useState } from "react";
import './gallery.scss'
function Gallery(){
    const [data, setData] = useState(null);
  useEffect(() => {
    // Utilisez fetch pour récupérer le fichier JSON
    fetch("/logements.json")
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
        console.log("le JSON ici:");
        console.log(jsonData);
      })

      .catch((error) => {
        console.error(
          "Erreur lors de la récupération du fichier JSON :",
          error
        );
      });
  }, []);
    return<div>
        {data ? (
        <div className="CardGallery">
          {data.map((item, index) => (
            <a href= {`/logement/${index}`} key={index} className="Card">
              <h3>{item.title}</h3>
              <img src={item.cover} alt=""></img>
            </a>
          ))}
        </div>
      ) : (
        <p>Chargement...</p>
      )}
    </div>
    
}

export default Gallery