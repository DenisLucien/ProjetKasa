/* eslint-disable react/prop-types */
import "./underPicture.scss";
import CollapseUnderPicture from "./CollapseUnderPicture";

function UnderPicture({ data, id }) {
  if (!data || !data[id]) {
    return <div>Chargement...</div>;
  }
  const rating = data[id].rating;
  const tags = data[id].tags;

  if (data) {
    return (
      <div className="underPicture">
        <div className="firstLine">
          <div className="locationRef">
            <h1>{data[id].title}</h1>
            <p>{data[id].location}</p>
          </div>

          <div className="host">
            <p className="hostname">{data[id].host.name}</p>
            <img
              className="hostpicture"
              src={data[id].host.picture}
              alt="host"
            ></img>
          </div>
        </div>
        <div className="secondLine">
          <div className="tags">
            {tags.map((tag) => (
              <p key={tag} className="tag">
                {tag}
              </p>
            ))}
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
        <CollapseUnderPicture data={data} id={id} />
      </div>
    );
  } else {
    return <div>Chargement...</div>;
  }
}
export default UnderPicture;
