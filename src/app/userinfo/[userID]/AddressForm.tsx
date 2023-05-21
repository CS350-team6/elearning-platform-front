"use client"

import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

export default function AddressForm() {
  return (
    <ThemeProvider theme={defaultTheme}>
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
            <TextField
                required
                id="address1"
                name="address1"
                label="E-mail address"
                fullWidth
                autoComplete="shipping address-line1"
                variant="standard"
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
                required
                id="city"
                name="city"
                label="Current password"
                fullWidth
                autoComplete="shipping address-level2"
                variant="standard"
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
                required
                id="zip"
                name="zip"
                label="Change password"
                fullWidth
                autoComplete="shipping postal-code"
                variant="standard"
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
                required
                id="role"
                name="role"
                label="User's role"
                fullWidth
                autoComplete="shipping postal-code"
                variant="standard"
            />
            </Grid>
            <Grid item xs={12} justifyContent="flex-end" display="flex">
            <Button variant="outlined">
            Change password
            </Button>
            </Grid>
        </Grid>
    </Paper>
    </Container>
    </ThemeProvider>
    );
}

