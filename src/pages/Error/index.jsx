import { Link } from 'react-router-dom'
import './error.scss'
function Error(){
return <div className='error'>
    <h2>404</h2>
    <p>Oups! La page que vous demandez n&apos;existe pas.</p>
    <Link to="/">Retourner sur la page d&apos;accueil</Link>
</div>
}
export default Error