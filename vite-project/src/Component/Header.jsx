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
        <a className="main-nav-item" href="./sign-in.html">
          <i className="fa fa-user-circle"></i>
          Sign In
        </a>
      </div>
    </nav>
        </div>
    )
}

export default header

