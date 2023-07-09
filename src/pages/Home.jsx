import React from 'react'
import Sidebar from '@layouts/Sidebar'
import Expereinces from '@layouts/Expereinces'
import Certificate from '@layouts/Certificate'
import Skills from '@layouts/Skills'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';


export default function Home() {
  const theme = useTheme();
  const spacerValue = theme.spacing(3);
  return (

    <Grid item md={10} sx={{ zIndex: 1, background: '#fff' }}>
      <Grid container>
        <Grid item md={4} component={Paper} elevation={1} sx={{
          background: '#f4f8f9',maxHeight: "770px"
        }}>
          <Box
            sx={{
              my: 8,
              mx: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Sidebar />
          </Box>
        </Grid>
        <Grid item md={8} component={Paper} elevation={1} sx={{
          background: '#fff',
          overflowY: "scroll", maxHeight: "770px", 
          p: spacerValue
        }}>
          <Expereinces />
          <Skills />
          <Certificate />
        </Grid>
      </Grid>
    </Grid>
  )
}