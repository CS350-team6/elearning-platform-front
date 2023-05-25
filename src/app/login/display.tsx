"use client";

import React, { useState} from 'react';

import { useRouter } from 'next/navigation';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';

interface MyProps{
  getData: (name: string, email: string) => Promise<boolean>;
}

const defaultTheme = createTheme();

export default function LoginMain({getData}:MyProps) {
    
    const router = useRouter();
    const [id, setID] = useState('');
    const [pw, setPW] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();


      
      console.log("id : ", id)
      console.log("pw : ", pw)
      
      const fetchedData: boolean = await fetchData();

      if (fetchedData){
        
        setID('');
        setPW('');
        console.log("login success")
        router.push('/')
      } else {
        setID('');
        setPW('');
        setErrorMessage('Invalid ID or password');
        return;
      }
      
    };

    async function fetchData(): Promise<boolean> {
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
            Sign in
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <TextField id="ID" label="email" name="ID" margin='normal' required fullWidth
            value={id}  onChange={e => setID(e.target.value)} />
          
            <TextField name="PW" label="password" id="PW" margin='normal' required fullWidth type="password"
              value={pw}  onChange={e => setPW(e.target.value)} />

            <Button type="submit" fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}> Login </Button>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Link href="/pwreset" variant="body2" style={{ textAlign: 'left' }}>
                Forgot password?
              </Link>
              <Link href="/register" variant="body2" style={{ textAlign: 'right' }}>
                {"Don't have an account? Sign Up"}
              </Link>
              
            </div>
            <div style={{ width: '100%', textAlign: 'center' }}>
              {errorMessage && <Typography color="error">{errorMessage}</Typography>}
            </div>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
      
  )
};