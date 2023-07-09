import React from 'react';
import { Grid, Typography, Icon } from '@mui/material';
import Divider from '@mui/material/Divider';

export default function Header(props) {
    return (
        <Grid container sx={{ mt: 3 }} spacing={1}>
            <Grid item>
                <Icon component={props.icon} sx={{ fontSize: '2rem' }} color="primary" />
            </Grid>
            <Grid item>
                <Typography variant="h5" color="primary">
                    {props.title}
                </Typography>
            </Grid>
            <Grid item xs={12} sx={{ p: 0 }}>
                <Divider sx={{ mt: 1, mb: 1 }} />
            </Grid>

        </Grid>
    );
}
