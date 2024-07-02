import TextField from '@mui/material/TextField'
import React, { useState } from 'react'

const Auth = () => {
	const [isLoginWindow, setIsLoginWindow] = useState(true)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [phoneNumber, setPhoneNumber] = useState('')
	const [birthDate, setBirthDate] = useState('')
	const [gender, setGender] = useState('')
	const [fullName, setFullName] = useState('')
	const [username, setUsername] = useState('')

	const handleSwitchWindow = () => {
		setIsLoginWindow(!isLoginWindow)
	}

	const handleSubmit = async () => {
		if (isLoginWindow) {
			const url = 'http://localhost:8080/api/pizza/auth/login'

			const loginData = {
				username: username,
				password: password,
			}

			const requestOptions = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(loginData),
			}

			try {
				const response = await fetch(url, requestOptions)
				if (!response.ok) {
					throw new Error('Login request failed.')
				}
				const data = await response.json()
				localStorage.setItem('accessToken', data.accessToken)
				localStorage.setItem('username', data.username)
				window.location.href = '/profile'
			} catch (error) {
				console.error(error)
			}
		} else {
			const url = 'http://localhost:8080/api/pizza/auth/sign-up'

			const registerData = {
				email: email,
				password: password,
				phoneNumber: phoneNumber,
				birthDate: birthDate,
				gender: gender,
				fullName: fullName,
				username: username,
			}

			const requestOptions = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(registerData),
			}

			try {
				const response = await fetch(url, requestOptions)
				if (!response.ok) {
					throw new Error('Registration request failed.')
				}
				const data = await response.json()
				window.location.href = '/'
			} catch (error) {
				console.error(error)
			}
		}
	}

	return (
		<div className='flex justify-center items-center h-screen bg-gray-100'>
			<form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
				<div className='mb-4'>
					<TextField
						label='Email'
						variant='outlined'
						fullWidth
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
				</div>
				<div className='mb-4'>
					<TextField
						label='Password'
						variant='outlined'
						type='password'
						fullWidth
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
				</div>
				{!isLoginWindow && (
					<>
						<div className='mb-4'>
							<TextField
								label='Phone Number'
								variant='outlined'
								fullWidth
								value={phoneNumber}
								onChange={e => setPhoneNumber(e.target.value)}
							/>
						</div>
						<div className='mb-4'>
							<TextField
								label='Birth Date'
								variant='outlined'
								type='date'
								fullWidth
								value={birthDate}
								onChange={e => setBirthDate(e.target.value)}
							/>
						</div>
						<div className='mb-4'>
							<TextField
								label='Gender'
								variant='outlined'
								fullWidth
								value={gender}
								onChange={e => setGender(e.target.value)}
							/>
						</div>
						<div className='mb-4'>
							<TextField
								label='Name'
								variant='outlined'
								fullWidth
								value={fullName}
								onChange={e => setFullName(e.target.value)}
							/>
						</div>
						<div className='mb-4'>
							<TextField
								label='Username'
								variant='outlined'
								fullWidth
								value={username}
								onChange={e => setUsername(e.target.value)}
							/>
						</div>
					</>
				)}
				<div className='flex justify-center'>
					<button
						className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
						type='button'
						onClick={handleSubmit}
					>
						{isLoginWindow ? 'Sign In' : 'Register'}
					</button>
				</div>
				<div className='flex justify-center mt-4'>
					<button
						className='text-blue-500 hover:text-blue-700 font-bold focus:outline-none'
						type='button'
						onClick={handleSwitchWindow}
					>
						{isLoginWindow ? 'Create an account' : 'Already have an account?'}
					</button>
				</div>
			</form>
		</div>
	)
}

export default Auth