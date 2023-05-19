"use client";

import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';


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

const defaultTheme = createTheme();
interface MyProps{
  getData: (name: string, email: string) => Promise<string>;
}

export default function Main({getData}:MyProps) {
    
    const router = useRouter();

    const idFieldRef = useRef<HTMLInputElement>(null);
    const pwFieldRef = useRef<HTMLInputElement>(null);
    const lastNameFieldRef = useRef<HTMLInputElement>(null);
    const firstNameFieldRef = useRef<HTMLInputElement>(null);
    
    const [id, setID] = useState('');
    const [pw, setPW] = useState('');
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [data, setData] = useState<number>(1);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      
      if (
        idFieldRef.current &&
        pwFieldRef.current &&
        firstNameFieldRef.current &&
        lastNameFieldRef.current
      ) {
        if (idFieldRef.current.value.trim() === '') {
          idFieldRef.current.focus();
          return;
        }
        if (pwFieldRef.current.value.trim() === '') {
          pwFieldRef.current.focus();
          return;
        }
        if (firstNameFieldRef.current.value.trim() === '') {
          firstNameFieldRef.current.focus();
          return;
        }
        if (lastNameFieldRef.current.value.trim() === '') {
          lastNameFieldRef.current.focus();
          return;
        }
      }

      
      const fetchedData = await fetchData();
     
      if(!fetchedData){

        return;
      } else {
        
        setID('');
        setPW('');
        setFirstName('');
        setLastName('');

        router.push('/login')
      }
      
      
    };

    async function fetchData() {
      const data_ = await getData(id, pw);
      console.log("send.tsx : ", data_);
      setData(data+1);
      console.log("hello");
      
      return true;
    }

  return (
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <TextField name="firstName" id="firstName" label="First Name" 
      value={firstName} inputRef={firstNameFieldRef}  onChange={e => setFirstName(e.target.value)}/>

      <TextField name="lastName" id="lastName" label="last Name"
      value={lastName} inputRef={lastNameFieldRef} onChange={e => setLastName(e.target.value)}/>
      
      
      <TextField id="ID" label="ID" name="ID"
      value={id} inputRef={idFieldRef}  onChange={e => setID(e.target.value)} />
    
      <TextField name="PW" label="PW" id="PW" 
      value={pw} inputRef={pwFieldRef}  onChange={e => setPW(e.target.value)} />

      <Button type="submit"> Sign Up </Button>
    </Box>
  )
};

//     <ThemeProvider theme={defaultTheme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign up
//           </Typography>

//           <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   autoComplete="given-name"
//                   name="firstName"
//                   required
//                   fullWidth
//                   id="firstName"
//                   label="First Name"
//                   autoFocus
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="lastName"
//                   label="Last Name"
//                   name="lastName"
//                   autoComplete="family-name"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="ID"
//                   label="ID"
//                   name="ID"
//                   autoComplete="ID"
//                   value={id} 
//                   onChange={e => setID(e.target.value)}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="PW"
//                   label="PW"
//                   type="PW"
//                   id="PW"
//                   autoComplete="new-PW"
//                   value={pw} 
//                   onChange={e => setPW(e.target.value)}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <FormControlLabel
//                   control={<Checkbox value="allowExtraEmails" color="primary" />}
//                   label="I want to receive inspiration, marketing promotions and updates via email."
//                 />
//               </Grid>
//             </Grid>
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign Up
//             </Button>
//             <Grid container justifyContent="flex-end">
//               <Grid item>
//                 <Link href="#" variant="body2">
//                   Already have an account? Sign in
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//       </Container>
//     </ThemeProvider>
//   );
// }