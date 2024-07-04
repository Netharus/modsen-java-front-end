import React from 'react'
import Header from '../components/Header'
import ProductTable from '../components/ProductTable'
import CRUDops from '../components/CRUDops'


const Dashboard = () => {

	return (
		<div>
			<Header />
			<ProductTable
				cellsName={['Id', 'Name', 'Price', 'Description', 'Image', 'Category']}
				cellsData={[]}
			/>
			<CRUDops></CRUDops>
		</div>
	)
}

export default Dashboard
