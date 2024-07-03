import { Button, Stack } from '@mui/material';
import React, { useState } from 'react';

const CRUDops = ({ itemData, setItemData }) => {
  const [newItem, setNewItem] = useState({
    id: '',
    name: '',
    description: '',
    price: '',
    categoryName: '',
    imageId: 0
  });

  const handleCreate = async () => {
    try {
      const url = 'http://localhost:8080/api/pizza/product';
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItem),
      });
      if (!response.ok) {
        throw new Error('Failed to create item');
      }
      const createdItem = await response.json();
      setItemData([...newItem, createdItem]);
      setNewItem({ id: '', name: '', description: '', price: '', categoryName: '', imageId: 0});
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async () => {
    try {
      const id = localStorage.getItem('id')
      const url = `http://localhost:8080/api/pizza/product/${id}`;
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItem),
      });
      if (!response.ok) {
        throw new Error('Failed to update item');
      }
      const updatedItem = await response.json();
      const updatedData = itemData.map((item) =>
		item.id === updatedItem.id ? updatedItem : item
	  );
	  setItemData(updatedData);
	  setNewItem({ id: '', name: '', description: '', price: '', categoryName: '', imageId: 0});
	} catch (error) {
	  console.error(error);
    }
  };

  const handleDelete = async () => {
	try {
    const id = localStorage.getItem('id')
	  const url = `http://localhost:8080/api/pizza/product/${id}`;
	  const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItem),
      });
	  if (!response.ok) {
		throw new Error('Failed to delete item');
	  }
	  const updatedData = itemData.filter((item) => item.id !== newItem.id);
	  setItemData(updatedData);
	  setNewItem({ id: '', name: '', description: '', price: '', categoryName: '', imageId: 0});
	} catch (error) {
	  console.error(error);
	}
  };

  return (
    <div>
      <div className='mt-4 flex justify-around'>
        <Stack spacing={2} direction='row'>
          <Button variant='outlined' onClick={handleCreate}>
            Create
          </Button>
          <Button variant='outlined' onClick={handleUpdate}>
            Update
          </Button>
          <Button variant='outlined' onClick={handleDelete}>
            Delete
          </Button>
        </Stack>
      </div>
      <div>
        <input
          type='text'
          placeholder='ID'
          value={newItem.id}
          onChange={(e) => setNewItem({ ...newItem, id: e.target.value })}
        />
        <input
          type='text'
          placeholder='Name'
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        />
        <input
          type='text'
          placeholder='Description'
          value={newItem.description}
          onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
        />
        <input
          type='text'
          placeholder='Price'
          value={newItem.price}
          onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
        />
        <input
          type='text'
          placeholder='Category name'
          value={newItem.categoryName}
          onChange={(e) => setNewItem({ ...newItem, categoryName: e.target.value })}
        />
        <input
          type='text'
          placeholder='Image'
          value={newItem.imageId}
          onChange={(e) => setNewItem({ ...newItem, imageId: e.target.value })}
        />
      </div>
    </div>
  );
};

export default CRUDops;