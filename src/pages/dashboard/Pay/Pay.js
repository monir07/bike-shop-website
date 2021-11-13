import React from 'react';
import { Grid, Paper, TextField, Typography } from '@mui/material';

const Pay = () => {
    return (
        <div>
            <h2>Payment</h2>
            <Grid item xs={12}>
                <Paper elevation={3} sx={{ p: 2, display: 'flex', flexDirection: 'column' }} >
                    <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                    >
                        Comming Soon
                    </Typography>
                </Paper>
            </Grid>
        </div>
    );
};

export default Pay;