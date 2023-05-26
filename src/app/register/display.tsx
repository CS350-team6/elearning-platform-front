"use client";

import React, { useState, useRef } from 'react';
// import {getData} from "./link";
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

export default function Display(props: MyProps) {
    
    const router = useRouter();

    const idFieldRef = useRef<HTMLInputElement>(null);
    const pwFieldRef = useRef<HTMLInputElement>(null);
    const lastNameFieldRef = useRef<HTMLInputElement>(null);
    const firstNameFieldRef = useRef<HTMLInputElement>(null);
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [id, setID] = useState('');
    const [pw, setPW] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    const handleWithGoogleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    
      event.preventDefault();
      router.push('/')
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
      const data_ = await props.getData(id, pw);
      
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
          
          <Typography component="h1" variant="h5" sx={{lineHeight: 2}}>
            Sign Up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>  
              
              <Grid item xs={12}>  
                <TextField id="ID" label="E-mail" name="ID" required fullWidth 
                value={id} inputRef={idFieldRef}  onChange={e => setID(e.target.value)} />
              </Grid> 
              <Grid item xs={12}>
                <TextField name="PW" label="password" id="PW" required fullWidth type="password"
                value={pw} inputRef={pwFieldRef}  onChange={e => setPW(e.target.value)} />
              </Grid> 
            </Grid>
            <Button type="submit" fullWidth variant="outlined" sx={{ mt: 3, mb: 1 }}> Sign Up </Button>
            
            { errorMessage && 
              <Typography color="error">
                {errorMessage}
                
              </Typography>
            }

            
          </Box>

          {/* <div text-color='gray'>
            Already have an account? 
            <Link href="/login" variant="body2"> Sign in </Link>          
          </div> */}
          

      </Box>
    </Container>
  </ThemeProvider>
  )
};