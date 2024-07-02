import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import SearchParties from './pages/SearchParties'

const App = () => {
	return (
		<Router>
			<Routes>
				<Route exact path='/' element={<Auth />} />
				<Route path='/search' element={<SearchParties />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/dashboard' element={<Dashboard />} />
			</Routes>
		</Router>
	)
}

export default App
