import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

export default function Intro() {
    const theme = useTheme();
    const spacerValue = theme.spacing(3);
    return (
        <Box sx={{ mt: spacerValue }}>
            <Typography variant="h6" color="text.secondary" align="center">
                Hello, I'm Mahnoor!
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" align="center">
                Senior Front End Developer
            </Typography>
        </Box>
    );
}
