import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

export default function Intro() {
    const theme = useTheme();
    const spacerValue = theme.spacing(3);
    return (
        <Box sx={{ mt: spacerValue, textAlign: 'center' }}>
            <Typography variant="body1" color="text.secondary" align="center">
            Welcome to my portfolio! I am a seasoned Senior Frontend Developer with expertise in ReactJS and JavaScript. 
            With over five years of industry experience, 
            I have successfully delivered numerous projects, both remotely and onsite. 
            My technical skills allowing me to create stunning and user-friendly interfaces.
             I am also well-versed in backend technologies like Node.js and REST APIs, enabling seamless collaboration with backend developers. With a Google Management Certificate under my belt, I possess the leadership and project management skills necessary to drive successful outcomes.
            </Typography>
        </Box>
    );
}
