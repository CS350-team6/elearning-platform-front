"use client"

import { Box, Button } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function Welcome(){
    return (
        <Box sx={{m:3}}>
            <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>
                Welcome.
            </Typography>
            <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
                Start your journey of efficient learning with us!
            </Typography>
            <Button variant="contained" color="primary"> Continue with Google </Button> 
        </Box>
    )
}