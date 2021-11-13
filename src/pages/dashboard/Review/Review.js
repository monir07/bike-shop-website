import { Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import React from 'react';

const Review = () => {
    const reviewPoint = [
        {
            value: 0,
            label: '0',
        },
        {
            value: 1,
            label: '1',
        },
        {
            value: 2,
            label: '2',
        },
        {
            value: 3,
            label: '3',
        },
        {
            value: 4,
            label: '4',
        },
        {
            value: 5,
            label: '5',
        },
    ];
    const [point, setPoint] = React.useState(0);

    const handleChange = (event) => {
        setPoint(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password');
        const password2 = data.get('password2');
        const name = data.get('fullName');
        // eslint-disable-next-line no-console
        if (password !== password2) {
            // alert('Your password did not match');

            return;
        }
        console.log({
            email: email,
            password: password,
            password2: password2,
            name: name,
        });
    };
    return (
        <div>
            <h2>Review Dashboard</h2>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            id="fullName"
                            label="Full Name"
                            name="fullName"
                            autoComplete="family-name"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            select
                            label="Review Point"
                            value={point}
                            onChange={handleChange}
                            SelectProps={{
                                native: true,
                            }}
                            helperText="Please select your point"

                        >
                            {reviewPoint.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            name="photoUrl"
                            label="Photo Url"
                            type="text"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            required
                            fullWidth
                            multiline
                            rows={3}
                            name="reviewDetails"
                            label="Write Review"
                            type="textArea"
                        />
                    </Grid>

                </Grid>
                <Button
                    type="submit"

                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Submit
                </Button>
            </Box>
        </div>
    );
};

export default Review;