import { Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import React from 'react';
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const [isAdded, setIsAdded] = React.useState(false);
    const { user } = useAuth();
    console.log(isAdded);
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
        const fullName = data.get('fullName');
        const email = data.get('email');
        const reviewPoint = point;
        const photoUrl = data.get('photoUrl');
        const reviewDetails = data.get('reviewDetails');
        const postData = {
            name: fullName,
            email: email,
            point: reviewPoint,
            img: photoUrl,
            description: reviewDetails
        };
        console.log(postData);
        axios.post('https://desolate-badlands-81980.herokuapp.com/review', postData)
            .then(response => {
                if (response.data.insertedId) {
                    setIsAdded(true);
                    alert('Your Review is Submitted');
                }
            })
            .catch(error => {
                this.setState({ errorMessage: error.message });
                console.error('There was an error!', error);
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
                            value={user.displayName}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            value={user.email}
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