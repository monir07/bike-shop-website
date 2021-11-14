import { Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import React from 'react';
import axios from 'axios';


const AddProduct = () => {
    const [isAdded, setIsAdded] = React.useState(false);
    console.log(isAdded);
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const productName = data.get('productName');
        const price = data.get('price');
        const topSpeed = data.get('topSpeed');
        const photoUrl = data.get('photoUrl');
        const shortDetails = data.get('shortDetails');
        const postData = {
            name: productName,
            price: price,
            max_speed: topSpeed,
            img: photoUrl,
            description: shortDetails
        };
        console.log(postData);
        axios.post('https://desolate-badlands-81980.herokuapp.com/product', postData)
            .then(response => {
                if (response.data.insertedId) {
                    setIsAdded(true);
                    alert('Your Product is Added');
                }
            })
            .catch(error => {
                this.setState({ errorMessage: error.message });
                console.error('There was an error!', error);
            });
    }

    return (
        <div>
            <h2>Add Product From Here</h2>
            <Box component="form" Validate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            label="Product Name"
                            name="productName"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            label="Price in USD"
                            name="price"
                            type="number"
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            name="topSpeed"
                            label="Top Speed/kmph"
                            type="number"
                        />
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
                            name="shortDetails"
                            label="Write Description"
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

export default AddProduct;