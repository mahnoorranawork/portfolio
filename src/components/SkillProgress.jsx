import React from 'react';
import { Paper, Typography, LinearProgress, Box } from '@mui/material';


const Skill = ({ label, value, icon, marginBottom }) => {
  const url = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}`
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: marginBottom === 0 ? 0 : 2 }}>
      <Paper sx={{mr: 2, p: 1, display: 'flex', alignItems: 'center', borderRadius: '50%'}} elevation={1}>
        <img src={url} width={20} height={20} />
      </Paper>
      <Typography variant="body1" component="span" sx={{ flexShrink: 0 }}>
        {label}
      </Typography>
      <Box sx={{ width: '100%', marginLeft: 2 }}>
        <LinearProgress variant="determinate" value={value} color="primary" />
      </Box>
    </Box>
  );
};

export default Skill;
