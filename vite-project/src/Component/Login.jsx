import './Login.scss';
import { useNavigate, } from 'react-router';
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../Redux/userSlice"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';


const Login = () => {
    const navigate = useNavigate();

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

    const disconnect = () => {
        dispatch(logOut());
        navigate('/Sign-in');
    };


    
    console.log(token);
    return (
        <>
            {token && userSet ? (
                <a className="main-nav-item">
                    <div className="texte-color">
                    {userSet.userName}
                    </div>
                    <div className="icon-color-profile">
                    <FontAwesomeIcon icon={faUser} className='fa-regular fa-user fa-lg' />
                    </div>
                    <div className="icon-color-gear">
                    <FontAwesomeIcon icon={faGear} className='fa-regular fa-user fa-xl'/>
                    </div>
                    <button className="icon-color-power" onClick={disconnect}>
                    <FontAwesomeIcon icon={faPowerOff} className='fa-regular fa-user fa-xl'/>
                    </button>
                    

                </a>
            ) : (
                <a className="main-nav-item" onClick={handleClick}>
                    <div className="icon-color-profile">
                    <FontAwesomeIcon icon={faUser} className='fa-regular fa-user fa-lg' />
                    </div>
                     <div className="texte-color">
                    {token ? 'Profil' : 'Sign In'}
                    </div>
                </a>
            )}
        </>
    );
};

export default Login;

