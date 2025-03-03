import banner from "../../../assets/banner.png";
import './banner.scss'
function Banner(){
 return   <div className="banner">
 <img src={banner} alt="Banner" />
 <p>Chez vous, partout et ailleurs</p>
</div>
}

export default Banner