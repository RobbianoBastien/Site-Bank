import './Form.scss';

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector} from "react-redux";
import { succesLogin, loginFailed } from "../Redux/userSlice";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [messageErreur, setMessageErreur] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();
  const isConnected = useSelector((state) => state.userAuth.isConnected);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
    

    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      console.log("Statut de la réponse:", response.status);
      if (response.ok) {
        const data = await response.json();
        const token = data.body.token;
        dispatch(succesLogin(data.body.token));
        navigate("/User");
        if (rememberMe) {
          localStorage.setItem('authToken', token);
        } else {
          sessionStorage.setItem('authToken', token);
          localStorage.removeItem('authToken');
        }
      }
      else {
        const errorData = await response.json();
        dispatch(loginFailed(errorData.message));
        setMessageErreur("Échec de la connexion, veuillez vérifier vos identifiants.");
      }

     } catch (error) {
    console.error("Erreur complète:", error); // Debug
    dispatch(loginFailed());
    setMessageErreur("Échec de la connexion, veuillez vérifier vos identifiants.");
  }
  }

   useEffect(() => {
    if (isConnected) {
      navigate("/User");
    }
  }, [isConnected, navigate]);
  

  return (
    <form onSubmit={handleSubmit}>
      <i class="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <div class="input-wrapper">
      <label for="username">Username</label>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      </div>
      <div class="input-wrapper">
      <label for="password">Password</label>
      <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      </div>
      <div class="input-remember">
          <input type="checkbox" 
          id="remember-me" 
          checked={rememberMe}           
          onChange={(event) => setRememberMe(event.target.checked)} 
          />
          <label for="remember-me">Remember me</label>
      </div>
      <button class="sign-in-button"  type="submit">Sign In</button>
      {messageErreur && <p style={{ color: 'red' }}>{messageErreur}</p>}
    </form>
  );
};

export default LoginForm;
