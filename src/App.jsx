import React from 'react';
import Grid from '@mui/material/Grid';
import VantaBackground from '@components/Particle';
import Home from '@pages/Home';

export default function SignInSide() {
  return (
    <Grid container justifyContent="center" component="main" spacing={1} sx={{ height: '100vh', alignItems: 'center', p: '20px' }}>
      <VantaBackground />
      <Home />
    </Grid>
  );
}
