import './Login.scss';
import { useNavigate, useLocation} from 'react-router';
import React from 'react';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const token = window.localStorage.token || window.sessionStorage.token;

    const handleClick = () => {
        if (token !== undefined) {
            navigate('/User');
            
        } else {
            navigate('/Sign-in');   
            
        }
    };

    const handleLogout = (e) => {
        window.localStorage.removeItem('token');
        window.sessionStorage.removeItem('token');
        navigate('/Sign-in');
    };

    const isUserPage = location.pathname === '/User';
    
    console.log(token);
    return (
        <>
            {token && isUserPage ? (
                <a className="main-nav-item" onClick={handleLogout} href="#">
                    <i className="fa fa-user-circle"></i>
                    Sign Out
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

