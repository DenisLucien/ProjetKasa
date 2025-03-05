import banner from "../../../assets/banner2.jpg";
import "./banner.scss";

import "./banner.scss";
function Banner() {
  if (banner) {
    return (
      <div className="banner">
        <img src={banner} alt="Banner" />
      </div>
    );
  } else {
    return <p style={{ color: "black", fontSize: "16px" }}>Chargement...</p>;
  }
}

export default Banner;
