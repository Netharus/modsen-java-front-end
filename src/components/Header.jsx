import React from 'react'

const Header = () => {
	const handleLogout = () => {
		localStorage.removeItem('auth')
		window.location.href = '/'
	}

	return (
		<header className='bg-gray-800 py-4'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<nav className='flex justify-around'>
					<a className='text-white hover:text-gray-300' href='/dashboard'>
						Main page
					</a>
					<a className='text-white hover:text-gray-300' href='/createOrder'>
						Create order
					</a>
					<a className='text-white hover:text-gray-300' href='/profile'>
						Profile
					</a>
					{localStorage.getItem('auth') === 'true' && (
						<a href='logout'
							className='text-white hover:text-gray-300'
							onClick={handleLogout}
						>
							Logout
						</a>
					)}
				</nav>
			</div>
		</header>
	)
}

export default Header
