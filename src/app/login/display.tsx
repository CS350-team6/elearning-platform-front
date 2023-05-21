"use client";

import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

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
  getData: (name: string, email: string) => Promise<Object>;
}

export default function Main({getData}:MyProps) {
  
    const router = useRouter();
    const [id, setID] = useState('');
    const [pw, setPW] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();


      
      console.log("id : ", id)
      console.log("pw : ", pw)
      
      const fetchedData: object = await fetchData();

      if (fetchedData.result){
        // console.log(fetchedData.loginToken); ## loginToken을 redux에 저장. 
        setID('');
        setPW('');
        router.push('/main')
      } else {
        setID('');
        setPW('');
        setErrorMessage('Invalid ID or password');
        return;
      }
      
    };

    async function fetchData(): Promise<object> {
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
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
              <Link href="/pwReset" variant="body2" style={{ textAlign: 'left' }}>
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