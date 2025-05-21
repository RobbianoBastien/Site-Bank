import './Form.scss';

import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [messageErreur, setMessageErreur] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

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
      if (response.ok) {
        const data = await response.json();
        sessionStorage.setItem("token", data.body.token);
        if (rememberMe) {
          localStorage.setItem("token", data.body.token);
        }
        navigate("/User");
      }

     } catch (error) {
        console.error("Erreur lors de la connexion :", error);
    }
  }
  

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
