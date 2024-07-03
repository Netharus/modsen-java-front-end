import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import CreateOrder from './pages/CreateOrder'

const App = () => {
	return (
		<Router>
			<Routes>
				<Route exact path='/' element={<Auth />} />
				<Route path='/createOrder' element={<CreateOrder />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/dashboard' element={<Dashboard />} />
			</Routes>
		</Router>
	)
}

export default App
