import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
  } from '@mui/material';
  import React, { useEffect, useState } from 'react';
  
  
  const DataTable = ({ cellsData, cellsName }) => {
	const [searchText, setSearchText] = useState('');
	const [itemData, setItemData] = useState([]);
  
	useEffect(() => {
	  const fetchData = async () => {
		const url = 'http://localhost:8080/api/pizza/product';
		const searchOption = {
		  name: searchText,
		};
  
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
	},);
  
	return (
	  <div>
		<TableContainer component={Paper}>
		  <Table sx={{ minWidth: 650 }} aria-label='simple table'>
			<TableHead>
			  <TableRow>
				{cellsName.map((name, index) => (
				  <TableCell key={name} align='center'>
					{name}
				  </TableCell>
				))}
			  </TableRow>
			</TableHead>
			<TableBody>
			  {itemData.map((item) => (
				<TableRow key={item.id}>
				  <TableCell align='center'>{item.id}</TableCell>
				  <TableCell align='center'>{item.name}</TableCell>
				  <TableCell align='center'>{item.price}</TableCell>
				  <TableCell align='center'>{item.description}</TableCell>
				  <TableCell align='center'>{item.imageId}</TableCell>
				  <TableCell align='center'>{item.categoryName}</TableCell>
				</TableRow>
			  ))}
			</TableBody>
		  </Table>
		</TableContainer>
	  </div>
	);
  };
  
  export default DataTable;

  