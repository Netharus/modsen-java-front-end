// import React, { useState, useEffect } from 'react';
// import { Button, Stack, TextField } from '@mui/material';

// const UpdateUser = () => {
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [city, setCity] = useState('');
//   const [userData, setUserData] = useState({});

//   const handleUpdate = async () => {
//     const url = `http://localhost:8080/api/v1/users/`;
//     const bearer = 'Bearer ' + localStorage.getItem('token');

//     const requestOptions = {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: bearer,
//       },
//       body: JSON.stringify({
//         phoneNumber: phoneNumber,
//         city: city,
//       }),
//     };

//     try {
//       const response = await fetch(url, requestOptions);
//       if (!response.ok) {
//         throw new Error('Failed to update user data');
//       }
//       // Handle successful update if needed
//       console.log('User data updated successfully');
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <div className='mt-4 flex justify-around'>
//         <Stack spacing={2} direction='row'>
//           <TextField
//             label='Phone Number'
//             variant='outlined'
//             value={phoneNumber}
//             onChange={(event) => setPhoneNumber(event.target.value)}
//           />
//           <TextField
//             label='City'
//             variant='outlined'
//             value={city}
//             onChange={(event) => setCity(event.target.value)}
//           />
//           <Button variant='outlined' onClick={handleUpdate}>
//             Update
//           </Button>
//         </Stack>
//       </div>
//     </div>
//   );
// };

// export default UpdateUser;