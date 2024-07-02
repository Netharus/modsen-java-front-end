import React, { useEffect, useState } from 'react'

const UserProfile = () => {
	const [userData, setUserData] = useState({
		username: '',
		name: '',
	})

	useEffect(() => {
		const fetchData = async () => {
			const id = localStorage.getItem('id')
			const url = `http://localhost:8080/api/pizza/user/${id}`
			const bearer = 'Bearer ' + localStorage.getItem('token')

			const requestOptions = {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: bearer,
				},
			}

			try {
				const response = await fetch(url, requestOptions)
				if (!response.ok) {
					throw new Error('Failed to fetch user data')
				}
				const data = await response.json()
				setUserData({
					username: data.username,
					name: data.name,
				})
			} catch (error) {
				console.error(error)
			}
		}

		fetchData()
	}, [])

	const { username, name } = userData

	return (
		<div className='bg-white shadow-md rounded px-8 py-6'>
			<h2 className='text-2xl font-bold mb-4'>User Profile</h2>
			<div className='mb-4'>
				<strong>Username:</strong> {username}
			</div>
			<div className='mb-4'>
				<strong>Name:</strong> {name}
			</div>
		</div>
	)
}

export default UserProfile
