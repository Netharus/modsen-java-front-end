import React, { useState } from 'react';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [tableData, setTableData] = useState([]);

  const handleSearch = async () => {
    const url = '/api/pizza/product';
    const searchOption = {
      name: searchText,
    };

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(searchOption),
    };

    try {
		const response = await fetch(url, requestOptions);
		if (!response.ok) {
		  throw new Error(`Search request failed with status ${response.status}`);
		}
		const data = await response.json();
		setTableData(data);
	  } catch (error) {
		console.error(error);
		console.log(error); // Log the error response
	  }
  };

  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div>
      <div className='flex justify-center items-center mt-5'>
        <input
          type='text'
          value={searchText}
          onChange={handleChange}
          className='px-4 py-2 border border-gray-400 rounded-md mr-2 focus:outline-none focus:border-green-500'
        />
        <button
          onClick={handleSearch}
          className='px-4 py-2 bg-green-500 text-white rounded-md focus:outline-none hover:bg-green-600'
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;