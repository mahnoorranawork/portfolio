import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { Phone } from '@mui/icons-material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default function Intro() {
    const theme = useTheme();
    const spacerValue = theme.spacing(1);

    const handlePhoneClick = () => {
        const phoneNumber = '+60129518180'; // Replace with your phone number
        window.location.href = `tel:${phoneNumber}`;
    };

    const handleWhatsAppClick = () => {
        const phoneNumber = '+60129518180'; // Replace with your phone number
        const message = 'Hello!'; // Replace with your desired message
        window.location.href = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    };

    const handleEmailClick = () => {
        const emailAddress = 'mahnoorhassanrana@gmail.com'; // Replace with your email address
        const subject = 'Hello'; // Replace with your desired email subject
        const body = 'Hello, I wanted to reach out to you...'; // Replace with your desired email body

        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoLink);
    };
    const handleLinkedinClick = () => {
        window.open("https://www.linkedin.com/in/mahnoor-hassan-rana-5b683715b", '_blank');
        // window.location.href = `www.linkedin.com/in/mahnoor-hassan-rana-5b683715b`;
    };

    return (
        <Box sx={{ mt: spacerValue }}>
            <Grid container justifyContent={'center'} spacing={1}>
                <Grid item >
                    <Icon component={LocationCityIcon} sx={{ fontSize: '1.5rem' }} />
                </Grid>
                <Grid item >
                    <Typography variant="subtitle1" color="text.secondary" align="center">
                        Kuala Lumpur, Malaysia
                    </Typography>
                </Grid>
            </Grid>
            <Stack direction="row" spacing={1} justifyContent={'center'}>
                <IconButton onClick={handlePhoneClick}>
                    <PhoneIcon />
                </IconButton>
                <IconButton color="secondary" onClick={handleWhatsAppClick}>
                    <WhatsAppIcon />
                </IconButton>
                <IconButton color="primary" onClick={handleEmailClick}>
                    <EmailIcon />
                </IconButton>
                <IconButton color="secondary" onClick={handleLinkedinClick}>
                    <LinkedInIcon />
                </IconButton>
            </Stack>
        </Box>
    );
}
