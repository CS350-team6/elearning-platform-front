"use client";

import React, {  useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();
interface MyProps{
  getData: (name: string, email: string) => Promise<boolean>;
}

export default function Main({getData}:MyProps) {
    
    const router = useRouter();

    const idFieldRef = useRef<HTMLInputElement>(null);
    const pwFieldRef = useRef<HTMLInputElement>(null);
    const lastNameFieldRef = useRef<HTMLInputElement>(null);
    const firstNameFieldRef = useRef<HTMLInputElement>(null);
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [id, setID] = useState('');
    const [pw, setPW] = useState('');
    
    
    const [data, setData] = useState<number>(1);

    const [errorMessage, setErrorMessage] = useState('');

    const handleWithGoogleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    
      event.preventDefault();
      router.push('/main')
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
  
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
     
      if(fetchedData){
        setID('');
        setPW('');
        setFirstName('');
        setLastName('');

        router.push('/login')
        
      } else {
        setID('');
        setPW('');
        setFirstName('');
        setLastName('');
        setErrorMessage('Invalid ID or password');

        return;
      }
      
      
    };

    async function fetchData() {
      const data_ = await getData(id, pw);
      
      return data_;
    }

  return (

    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
        >
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>  
              
              <Grid item xs={12}>  
                <TextField id="ID" label="email" name="ID" required fullWidth 
                value={id} inputRef={idFieldRef}  onChange={e => setID(e.target.value)} />
              </Grid> 
              <Grid item xs={12}>
                <TextField name="PW" label="password" id="PW" required fullWidth type="password"
                value={pw} inputRef={pwFieldRef}  onChange={e => setPW(e.target.value)} />
              </Grid> 
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}> Sign Up </Button>
            
            { errorMessage && 
              <Typography color="error">
                {errorMessage}
                
              </Typography>
            }

            
          </Box>
          <Box component="form" noValidate onSubmit={handleWithGoogleSubmit} sx={{ mt: 3 }}>
            <Button type="submit" fullWidth variant="contained" size="large" sx={{ mt: 3, mb: 2 }}> Continue with Google </Button>
          </Box>
          

          <div text-color='gray'>
            Already have an account? 
            <Link href="/login" variant="body2"> Sign in </Link>          
          </div>
          

      </Box>
    </Container>
  </ThemeProvider>
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