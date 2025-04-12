import { useEffect, useState } from "react";
import "./gallery.scss";
function Gallery() {
  const [data, setData] = useState(null);
  useEffect(() => {
    // Utilisez fetch pour récupérer le fichier JSON
    fetch("/logements.json")
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
      })

      .catch((error) => {
        console.error(
          "Erreur lors de la récupération du fichier JSON :",
          error
        );
      });
  }, []);

  return (
    <div>
      {data ? (
        <div className="CardGallery">
          {data.map((item, index) => (
            <a href={`/logement/${item.id}`} key={index} className="Card">
              <h3>{item.title}</h3>
              <img src={item.cover} alt=""></img>
            </a>
          ))}
        </div>
      ) : (
        <p className="loading">Chargement...</p>
      )}
    </div>
  );
}

export default Gallery;
