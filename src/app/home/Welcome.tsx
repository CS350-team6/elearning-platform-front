"use client"

import { Box, Button } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function Welcome(){
    return (
        <Box sx={{m:3, textAlign:'center'}}>
            <Typography variant="h1" component="div" sx={{ flexGrow: 1, lineHeight: 4}}>
                Welcome.
            </Typography>
            <Typography variant="h3" component="div" sx={{ flexGrow: 1, lineHeight: 3 }}>
                Start your journey of efficient learning with us!
            </Typography>
        </Box>
    )
}