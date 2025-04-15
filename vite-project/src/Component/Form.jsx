import './Form.scss';

import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [messageErreur, setMessageErreur] = useState('');

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

      const data = await response.json();

      if (data.message || data.error) {
        setMessageErreur("Identifiants incorrect");
        return;
      }

      console.log(data);
      localStorage.setItem("token", data.token);
      window.location.href = "index.html";
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Email"
        required 
      />
      <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder="Mot de passe"
        required 
      />
      <button type="submit">Se connecter</button>
      {messageErreur && <p style={{ color: 'red' }}>{messageErreur}</p>}
    </form>
  );
};

export default LoginForm;
