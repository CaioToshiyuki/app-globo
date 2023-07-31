import Card from './Card';
import MainNews from './MainNews';
import HeaderLinks from '../header/HeaderLinks';
import button from './Button.css';
import LoginCSS from './Login.css';

import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    if (username === 'user' && password === 'password') {
      alert('Login bem-sucedido!');
    } else {
      alert('Nome de usuário ou senha incorretos.');
    }
  };

  return (
    <div className="login-container">
      <h2>Conta Globo</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">E-mail:</label>
          <input type="text" id="username" value={username} onChange={handleUsernameChange} placeholder='caio@gmail.com'/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} placeholder='***********'/>
        </div>
        <button className= "ButtonLogin" type="submit"><span>Entrar</span></button>
      </form>
    </div>
  );
};

export default Login;
