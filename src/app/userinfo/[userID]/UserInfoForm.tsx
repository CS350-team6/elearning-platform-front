"use client"

import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function AddressForm() {
  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
    <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        <Typography component="h1" variant="h4" align="center">
        User Information
        </Typography>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography mt={2}>
                Username
                </Typography>
                <Box
                    sx={{
                        m:2, p:1, border:1
                    }}
                >
                    DATA WILL BE PUT IN HERE
                </Box>
            </Grid>
            <Grid item xs={12}>
            <Typography mt={2}>
                E-mail address
                </Typography>
                <Box
                    sx={{
                        m:2, p:1, border:1
                    }}
                >
                    DATA WILL BE PUT IN HERE
                </Box>
            </Grid>
            <Grid item xs={12}>
            <TextField
                required
                id="current-password"
                name="current-passwordity"
                label="Current password"
                fullWidth
                variant="standard"
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
                required
                id="change-password"
                name="change-password"
                label="Change password"
                fullWidth
                variant="standard"
            />
            </Grid>
            <Grid item xs={12}>
            <Typography mt={2}>
                User's role
                </Typography>
                <Box
                    sx={{
                        m:2, p:1, border:1
                    }}
                >
                    DATA WILL BE PUT IN HERE
                </Box>
            </Grid>
            <Grid item xs={12} justifyContent="flex-end" display="flex">
            <Button variant="outlined">
            Change password
            </Button>
            </Grid>
        </Grid>
    </Paper>
    </Container>
    );
}

