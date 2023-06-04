"use client"

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/navigation';
import AccountMenu from './AccountMenu';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';

export default function Navbar() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      // Perform data handling or API call with the input value
      console.log('Sending data:', inputValue);

      // Reset the input value
      setInputValue('');
  }};

  return (
    <Box sx={{ bgcolor: "gray" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{flexGrow: 1}}>
            <Button color="inherit" onClick={() => router.push("/welcome")} variant="text" sx={{}} style ={{ fontSize: '20px'}}> Efficient E-learning</Button> 
          </Box>

          <Box sx={{flexGrow: 2}}>
            <FormControl fullWidth sx={{ mr: 10 }} variant="standard">
                <InputLabel htmlFor="video-title-html">Title</InputLabel>
                  <Input
                    id="video-title"
                    startAdornment={<InputAdornment position="start"></InputAdornment>}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                  />
            </FormControl> 
          </Box>
      
          <AccountMenu />

          <Button color="inherit" onClick={() => router.push("/register")} variant="outlined" sx={{ margin:2 }}>Register</Button>
          <Button color="inherit" onClick={() => router.push("/login")} variant="outlined">Login</Button>
        </Toolbar>
    </Box>
  );
}