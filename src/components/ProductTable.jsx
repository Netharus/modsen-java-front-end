import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Button,
	Stack
  } from '@mui/material';
  import React, { useEffect, useState } from 'react';
  
  
  const ProductTable = ({ cellsData, cellsName }) => {
	const [itemData, setItemData] = useState([]);
	const [order, setOrder] = useState([]);
  
	useEffect(() => {
		const fetchData = async () => {
		  const url = 'http://localhost:8080/api/pizza/product';
		  try {
			const response = await fetch(url);
			if (!response.ok) {
			  throw new Error('Failed to fetch items data');
			}
			const data = await response.json();
			setItemData(data);
		  } catch (error) {
			console.error(error);
		  }
		};
		fetchData();
	  }, []);
	

	  const handleCreateOrder = async () => {
		try {
		  const url = 'http://localhost:8080/api/pizza/order';
		  const response = await fetch(url, {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json',
			},
			body: JSON.stringify(order),
		  });
		  if (!response.ok) {
			throw new Error('Failed to create order');
		  }
		  const createdItem = await response.json();
		  setItemData([...order, createdItem]);
		  setOrder({ id: ''});
		} catch (error) {
			console.error(error);
		}
	  };
	  
	  const handleUpdateOrder = async () => {
		try {
		  const url = 'http://localhost:8080/api/pizza/order';
		  const response = await fetch(url, {
			method: 'PUT',
			headers: {
			  'Content-Type': 'application/json',
			},
			body: JSON.stringify(order),
		  });
		  if (!response.ok) {
			throw new Error('Failed to update order');
		  }
		  const updatedItem = await response.json();
			const updatedData = itemData.map((item) =>
				item.id === updatedItem.id ? updatedItem : item
			);
			setItemData(updatedData);
			setOrder({ id: ''});
			} catch (error) {
			console.error(error);
			}
	  };
	  
	  const handleDeleteOrder = async () => {
		try {
		  const url = 'http://localhost:8080/api/pizza/order/';
		  const response = await fetch(url, {
			method: 'DELETE',
			headers: {
			  'Content-Type': 'application/json',
			},
			body: JSON.stringify(order),
		  });
		  if (!response.ok) {
			throw new Error('Failed to delete order');
		  }
		  const updatedData = itemData.filter((item) => item.id !== order.id);
		  setItemData(updatedData);
		  setOrder({ id: ''});
		} catch (error) {
		  console.error(error);
		}
	  };


	  return (
		<div>
		  <TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
			  <TableHead>
				<TableRow>
				  {cellsName.map((name, index) => (
					<TableCell key={name} align="center">
					  {name}
					</TableCell>
				  ))}
				</TableRow>
			  </TableHead>
			  <TableBody>
				{itemData.map((item) => (
				  <TableRow key={item.id}>
					<TableCell align="center">{item.id}</TableCell>
					<TableCell align="center">{item.name}</TableCell>
					<TableCell align="center">{item.price}</TableCell>
					<TableCell align="center">{item.description}</TableCell>
					<TableCell align="center">{item.imageId}</TableCell>
					<TableCell align="center">{item.categoryName}</TableCell>
				  </TableRow>
				))}
			  </TableBody>
			</Table>
		  </TableContainer>
		 
    </div>
	  );
	};
	
	export default ProductTable;