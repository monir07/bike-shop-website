import { Grid, Paper } from '@mui/material';
import React from 'react';
import Chart from '../dashboard/Chart';

const DashboardHome = () => {
    return (
        <div>
            <h2>This is Dashboard Home</h2>
            <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                    <Chart></Chart>
                </Paper>
            </Grid>
        </div>
    );
};

export default DashboardHome;