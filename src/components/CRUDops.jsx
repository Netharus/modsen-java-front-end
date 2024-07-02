import { Button, Stack } from '@mui/material';
import React, { useState } from 'react';

const CRUDops = ({ itemData, setItemData }) => {
  const [newItem, setNewItem] = useState({
    id: '',
    name: '',
    addTime: '',
    cost: ''
  });

  const handleCreate = async () => {
    try {
      const url = 'http://localhost:8080/api/v1/users/tradeitems';
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
      setNewItem({ id: '', name: '', addTime: '', cost: '' });
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async () => {
    try {
      const url = 'http://localhost:8080/api/v1/users/tradeitems';
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
	  setNewItem({ id: '', name: '', addTime: '', cost: '' });
	} catch (error) {
	  console.error(error);
    }
  };

  const handleDelete = async () => {
	try {
	  const url = 'http://localhost:8080/api/v1/users/tradeitems/';
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
	  setNewItem({ id: '', name: '', addTime: '', cost: '' });
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
          placeholder='Add Time'
          value={newItem.addTime}
          onChange={(e) => setNewItem({ ...newItem, addTime: e.target.value })}
        />
        <input
          type='text'
          placeholder='Cost'
          value={newItem.cost}
          onChange={(e) => setNewItem({ ...newItem, cost: e.target.value })}
        />
      </div>
    </div>
  );
};

export default CRUDops;