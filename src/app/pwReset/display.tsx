"use client";

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
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ConstructionOutlined } from '@mui/icons-material';

const defaultTheme = createTheme();

import React, { useEffect, useState } from 'react';


interface MyProps{
  getData: (name: string) => Promise<boolean>;
}
export default function Main({getData}: MyProps) {
    const [id, setID] = useState('');
    const router = useRouter();
    const [errorMessage, setErrorMessage] = useState('');
    const handleEmailSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const fetchedData = await fetchData();
        
        if (fetchedData){
            router.push('/main')
        } else {
            setErrorMessage('Invalid email');
            return;
        }
       
  
      };

    async function fetchData(){
        const data_ = await getData(id);
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
                        reset password
                    </Typography>

                    <Box>
                        <Box component="form" noValidate onSubmit={handleEmailSubmit} sx={{ mt: 3 }}>
                            <TextField id="ID" label="email" name="ID"  margin='normal' required fullWidth
                            value={id}  onChange={e => setID(e.target.value)} />
                            <Button type="submit" fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}> get a new password </Button>
                        </Box>
                        {errorMessage && <Typography color="error">{errorMessage}</Typography>}
                    </Box>

                    
                    <Box component="form" noValidate onSubmit={handleEmailSubmit} >
                        <Button type="submit" fullWidth  sx={{ mt: 3, mb: 2 }}> send again </Button>
                    </Box>
                    <Link href="/login" variant="body2" style={{ textAlign: 'right' }}>
                        go to login
                    </Link>
                    
                </Box>
            </Container>
        </ThemeProvider>
        
      )
}