import React from 'react'
import Header from '../components/Header'
import DataTable from '../components/DataTable'

const Dashboard = () => {
	return (
		<div>
			<Header />
			<DataTable
				cellsName={['Id', 'Name', 'Cost', 'Add time', 'Image']}
				cellsData={[]}
			/>
		</div>
	)
}

export default Dashboard
