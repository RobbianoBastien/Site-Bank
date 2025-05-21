import './Header.scss'
import Logo from '../assets/image/argentBankLogo.png'
import Login from './Login'
import { Link } from 'react-router'


function header() {
    return (
        <div className='header'>
          <nav className="main-nav">
      <Link className="main-nav-logo" to="/" >
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
      </Link>
      <div>
       <Login />
      </div>
    </nav>
        </div>
    )
}

export default header

