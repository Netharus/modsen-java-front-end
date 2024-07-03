import React, { useState } from 'react';
import axios from 'axios';
import './styles.css';
import logoImage from '../logo_image.png';

const Login = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrorMessage('');

        try {
            const response = await axios.post('/auth/login', {
                username: login,
                password: password
            });
            console.log('Authentication successful:', response.data);
            localStorage.setItem('accessToken', response.data.accessToken);
            localStorage.setItem('refreshToken', response.data.token);
            alert('Вход выполнен успешно!');
        } catch (error) {
            console.error('Error during authentication:', error);
            setErrorMessage('Неверный логин или пароль');
        }
    };

    return (
        <div className="container">
            <div className="left-panel">
                <img src={logoImage} alt="Logo Icon" className="logo-icon" />
                <h2>Вход</h2>
                <div className="nav-icon"><span>&#10145;</span></div>
            </div>
            <div className="right-panel">
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                        <input 
                            type="text" 
                            id="login" 
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                            required 
                        />
                        <label htmlFor="login">Логин</label>
                    </div>
                    <div className="form-group">
                        <input 
                            type="password" 
                            id="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                        />
                        <label htmlFor="password">Пароль</label>
                    </div>
                    <button type="submit" className="submit-btn">ВОЙТИ</button>
                </form>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>
        </div>
    );
};

export default Login;
