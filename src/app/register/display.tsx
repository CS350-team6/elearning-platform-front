"use client";

import React, { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import { setRegisterEmail, resetEmail } from "@/redux/features/registerEmailSlice";
import { setRegisterName, resetName } from "@/redux/features/registerNameSlice";

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ConstructionOutlined } from '@mui/icons-material';



export default function Main() {
    const dispatch = useAppDispatch();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      
      const newRequestBody = {
        name: data.get('name') as string,
        email : data.get('email') as string
      };

      dispatch(setRegisterName(newRequestBody.name));
      dispatch(setRegisterEmail(newRequestBody.email));

      setName('');
      setEmail('');


    };

    return (

        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <TextField name="name" id="name" value={name} onChange={e => setName(e.target.value)}/>
            <TextField name="email" id="email" value={email} onChange={e => setEmail(e.target.value)}/>
            <Button type="submit"> Sign Up</Button>
            <h1>name : {name}</h1>
            <h1>email : {email}</h1>
        </Box>
    
        
    )

}


// export default function Main({response}:MyProps) {
//     const dispatch = useDispatch();
//     const requestBody = useSelector((state: RegisterState) => state.requestBody);
//     const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//       event.preventDefault();
//       const data = new FormData(event.currentTarget);

//       const newRequestBody = {
//         firstName: data.get('firstName'),
//         lastName: data.get('lastName'),
//         email: data.get('email'),
//         password: data.get('password'),
//       };
//       dispatch(setRequestBody(newRequestBody));
      
//     };
  
//     return (
//       <ThemeProvider theme={theme}>
//         <Container component="main" maxWidth="xs">
//           <CssBaseline />
//           <Box
//             sx={{
//               marginTop: 8,
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//             }}
//           >
//             <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//               <LockOutlinedIcon />
//             </Avatar>
//             <Typography component="h1" variant="h5">
//               Sign up
//             </Typography>
//             <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
//               <Grid container spacing={2}>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     autoComplete="given-name"
//                     name="firstName"
//                     required
//                     fullWidth
//                     id="firstName"
//                     label="First Name"
//                     autoFocus
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     fullWidth
//                     id="lastName"
//                     label="Last Name"
//                     name="lastName"
//                     autoComplete="family-name"
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField
//                     required
//                     fullWidth
//                     id="email"
//                     label="Email Address"
//                     name="email"
//                     autoComplete="email"
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField
//                     required
//                     fullWidth
//                     name="password"
//                     label="Password"
//                     type="password"
//                     id="password"
//                     autoComplete="new-password"
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <FormControlLabel
//                     control={<Checkbox value="allowExtraEmails" color="primary" />}
//                     label="I want to receive inspiration, marketing promotions and updates via email."
//                   />
//                 </Grid>
//               </Grid>
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//               >
//                 Sign Up
//               </Button>
//               <Grid container justifyContent="flex-end">
//                 <Grid item>
//                   <Link href="#" variant="body2">
//                     Already have an account? Sign in
//                   </Link>
//                 </Grid>
//               </Grid>
//             </Box>
//           </Box>
//           <Copyright sx={{ mt: 5 }} />
//         </Container>
//       </ThemeProvider>
//     );
//   }