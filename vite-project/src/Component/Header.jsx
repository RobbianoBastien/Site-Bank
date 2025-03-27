import './Header.scss'
import Logo from '../assets/image/argentBankLogo.png'
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
        <Link className="main-nav-item" to="/Sign-in">
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
      </div>
    </nav>
        </div>
    )
}

export default header

