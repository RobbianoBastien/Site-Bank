import { Link } from 'react-router'
import './NotFound.scss'

function NotFound() {
    return(
        <div className='notfound'>
        <h1 className='notfound__title'>404</h1>
        <h2 className='notfound__txt'>Oups! La page que vous demandez n'existe pas.</h2>
        <Link className='notfound__link' to="/">Retourner sur la page d'accueil</Link>
        </div>
    ) 
}

export default NotFound