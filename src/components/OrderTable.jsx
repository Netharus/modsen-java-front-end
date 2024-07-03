import { Button, Stack } from '@mui/material';
import React, { useState } from 'react';
  
  
  const OrderTable = ({ cellsData, cellsName }) => {
	const [itemData, setItemData] = useState([]);
	const [newItem, setNewItem] = useState({
		id: '',
	  });
	const handleCreateOrder = async () => {
		try {
		  const url = 'http://localhost:8080/api/pizza/order';
		  const response = await fetch(url, {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json',
			},
			body: JSON.stringify(newItem),
		  });
		  if (!response.ok) {
			throw new Error('Failed to create order');
		  }
		  const createdItem = await response.json();
		  setItemData([...newItem, createdItem]);
		  setNewItem({ id: ''});
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
			body: JSON.stringify(newItem),
		  });
		  if (!response.ok) {
			throw new Error('Failed to update order');
		  }
		  const updatedItem = await response.json();
			const updatedData = itemData.map((item) =>
				item.id === updatedItem.id ? updatedItem : item
			);
			setItemData(updatedData);
			setNewItem({ id: ''});
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
			body: JSON.stringify(newItem),
		  });
		  if (!response.ok) {
			throw new Error('Failed to delete order');
		  }
		  const updatedData = itemData.filter((item) => item.id !== newItem.id);
		  setItemData(updatedData);
		  setNewItem({ id: ''});
		} catch (error) {
		  console.error(error);
		}
	  };

	  return (
		<div>
		  <div className='mt-4 flex justify-around'>
			<Stack spacing={2} direction='row'>
			  <Button variant='outlined' onClick={handleCreateOrder}>
				Create
			  </Button>
			  <Button variant='outlined' onClick={handleUpdateOrder}>
				Update
			  </Button>
			  <Button variant='outlined' onClick={handleDeleteOrder}>
				Delete
			  </Button>
			</Stack>
		  </div>
		  <div>
			<input
			  type='text'
			  placeholder='ID'
			  value={newItem.id}
			  onChange={(e) => setNewItem({newItem, id: e.target.value })}
			/>
		  </div>
		  <div>
          <h2>Your Order:</h2>
		</div>
		</div>
	  );
	};
  
  export default OrderTable;

  