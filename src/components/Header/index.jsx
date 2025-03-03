    import './Header.scss'
    import Kasa from '../../assets/Kasa.svg';
    import { Link } from 'react-router-dom'
    function Header (){
        return <header className='header'>
            <img src={Kasa} alt=""/>
            <nav>
            <Link to="/Home">Accueil</Link>
            <Link to="/About">A propos</Link>
            </nav>
            
            </header>
    }

    export default Header