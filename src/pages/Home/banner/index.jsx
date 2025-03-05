import banner from "../../../assets/banner.png";
import "./banner.scss";
function Banner() {
  if (banner) {
    return (
      <div className="banner">
        <img src={banner} alt="Banner" />
        <p>Chez vous, partout et ailleurs</p>
      </div>
    );
  } else {
    return <p style={{ color: "black", fontSize: "16px" }}>Chargement...</p>;
  }
}

export default Banner;
