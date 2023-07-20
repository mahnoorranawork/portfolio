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
            Welcome to my portfolio, where I share my career growth from a detail-oriented Project Assistant to a creative Frontend Engineer. With an eye for detail and a passion for solving problems, I contributed to successful projects. Now, as a Frontend Engineer, I combine project management know-how with web development
             skills to create engaging digital experiences.
             I am also well-versed in backend technologies like Node.js and REST APIs, enabling seamless collaboration with backend developers.
              With a Google Management Certificate under my belt.
            </Typography>
        </Box>
    );
}
