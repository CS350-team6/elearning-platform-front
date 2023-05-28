"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();

  return (
    <Box sx={{ flexGrow: 1, bgcolor: "gray" }}>
    <Box sx={{ flexGrow: 1, bgcolor: "gray" }}>
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
          <Button color="inherit" onClick={() => router.push("/welcome")} variant="text" sx={{ mr : 120}} style ={{ fontSize: '20px'}}> Efficient E-learning</Button>
          <Button color="inherit" onClick={() => router.push("/register")} variant="outlined" sx={{ margin:2 }}>Register</Button>
          <Button color="inherit" onClick={() => router.push("/login")} variant="outlined">Login</Button>

        </Toolbar>
    </Box>
  );
}