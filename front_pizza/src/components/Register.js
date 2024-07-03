import React, { useState } from 'react';
import axios from 'axios';
import './styles.css';
import logoImage from '../logo_image.png';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
        fullName: '',
        gender: '',
        birthDate: '',
        phoneNumber: ''
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');

        if (formData.password !== formData.confirmPassword) {
            setMessage('Пароли не совпадают');
            return;
        }

        try {
            const response = await axios.post('/auth/sign-up', formData);
            console.log('Registration successful:', response.data);
            localStorage.setItem('accessToken', response.data.accessToken);
            localStorage.setItem('refreshToken', response.data.token);
            alert('Регистрация выполнена успешно!');
        } catch (error) {
            console.error('Error during registration:', error);
            setMessage('Ошибка при регистрации');
        }
    };

    return (
        <div className="container">
            <div className="left-panel">
                <img src={logoImage} alt="logo Icon" className="logo-icon" />
                <h2>Регистрация</h2>
                <div className="nav-icon"><span>&#10145;</span></div>
            </div>
            <div className="right-panel">
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                        <input 
                            type="text" 
                            id="username" 
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required 
                        />
                        <label htmlFor="username">Логин</label>
                    </div>

                    <div className="form-group">
                        <input 
                            type="password" 
                            id="password" 
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required 
                        />
                        <label htmlFor="password">Пароль</label>
                    </div>

                    <div className="form-group">
                        <input 
                            type="password" 
                            id="confirmPassword" 
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required 
                        />
                        <label htmlFor="confirmPassword">Подтвердите пароль</label>
                    </div>

                    <div className="form-group">
                        <input 
                            type="email" 
                            id="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required 
                        />
                        <label htmlFor="email">E-mail</label>
                    </div>

                    <div className="form-group">
                        <input 
                            type="text" 
                            id="fullName" 
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required 
                        />
                        <label htmlFor="fullName">Полное имя</label>
                    </div>

                    <div className="form-group">
                        <input 
                            type="text" 
                            id="gender" 
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            required 
                        />
                        <label htmlFor="gender">Пол</label>
                    </div>

                    <div className="form-group">
                        <input 
                            type="date" 
                            id="birthDate" 
                            name="birthDate"
                            value={formData.birthDate}
                            onChange={handleChange}
                            required 
                        />
                        <label htmlFor="birthDate">Дата рождения</label>
                    </div>

                    <div className="form-group">
                        <input 
                            type="text" 
                            id="phoneNumber" 
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required 
                        />
                        <label htmlFor="phoneNumber">Номер телефона</label>
                    </div>

                    <button type="submit" className="submit-btn">ОТПРАВИТЬ</button>
                </form>
                {message && <p className="error-message">{message}</p>}
            </div>
        </div>
    );
};

export default Register;
