import { Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import React from 'react';

const AddProduct = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    };
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