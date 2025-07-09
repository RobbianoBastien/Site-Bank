import './Login.scss';
import { useNavigate, useLocation} from 'react-router';
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../Redux/userSlice"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const token = useSelector((state) => state.userAuth.token);
    const dispatch = useDispatch();
    const userSet = useSelector((state) => state.userAuth.user);

    const handleClick = () => {
        if (token !== undefined) {
            navigate('/User');
            
        } else {
            navigate('/Sign-in');   
            
        }
    };

    const handleLogout = (e) => {
        dispatch(logOut());
        navigate('/Sign-in');
    };

    const isUserPage = location.pathname === '/User';
    
    console.log(token);
    return (
        <>
            {token && userSet ? (
                <a className="main-nav-item" onClick={handleLogout} href="#">
                    <div className="texte-color">
                    {userSet.userName}
                    </div>
                    <div className="icon-color-profile">
                    <FontAwesomeIcon icon={faUser} className='fa-regular fa-user fa-lg' />
                    </div>
                    <div className="icon-color-gear">
                    <FontAwesomeIcon icon={faGear} className='fa-regular fa-user fa-xl'/>
                    </div>
                    <div className="icon-color-power">
                    <FontAwesomeIcon icon={faPowerOff} className='fa-regular fa-user fa-xl'/>
                    </div>
                </a>
            ) : (
                <a className="main-nav-item" onClick={handleClick} href="#">
                    <i className="fa fa-user-circle"></i>
                    {token ? 'Profil' : 'Sign In'}
                </a>
            )}
        </>
    );
};

export default Login;

