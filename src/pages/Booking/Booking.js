import * as React from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Alert, CircularProgress } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import useAuth from '../../hooks/useAuth';
import Header from '../shared/Header/Header';

const Booking = (props) => {
    const { bookId } = useParams();
    const { user } = useAuth();
    const [bookedItem, setBookedItem] = React.useState([]);

    // react hook form 
    // const { register, handleSubmit, reset } = useForm();

    const handleBooking = data => {
        console.log(data)
        axios.post('https://fathomless-falls-34932.herokuapp.com/place_order', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    // reset();
                }
            })
    };

    const bookImage = 'https://i.ibb.co/bRmhx01/booking.jpg';

    // useEffect(() => {
    //     fetch(`https://fathomless-falls-34932.herokuapp.com/packages/${detailId}`)
    //         .then(res => res.json())
    //         .then(data => setBooking(data))
    // }, [])
    console.log(bookedItem);

    const theme = createTheme();
    return (
        <div>
            <Header></Header>
            <ThemeProvider theme={theme}>
                <Grid container component="main" sx={{ height: '100vh' }}>
                    <CssBaseline />
                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={7}
                        sx={{
                            // backgroundImage: `url(${bookImage})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: (t) =>
                                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <Box
                            sx={{
                                mx: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <CardMedia
                                component="img"
                                alt="green iguana"

                                image="https://i.ibb.co/VVFvZL1/img14.png"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                        <Box
                            sx={{
                                my: 5,
                                mx: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >

                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                <AddShoppingCartIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Booking Form
                            </Typography>
                            <Box component="form" Validate onSubmit={handleBooking} sx={{ mt: 1 }}>
                                <TextField
                                    disabled
                                    margin="normal"
                                    fullWidth
                                    label="Product id"
                                    value={bookId}
                                    name="bookId"
                                />

                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="productName"
                                    label="Product Name"
                                    type="text"
                                    autoComplete="current-password"
                                />
                                <TextField
                                    margin="normal"
                                    readOnly="true"
                                    required
                                    fullWidth
                                    name="userName"
                                    label="User Name"
                                    value={user.displayName}
                                    autoFocus
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="email"
                                    label="Email Address"
                                    value={user.email}
                                    type="email"
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="phoneNo"
                                    label="Phone No"
                                    type="number"
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    multiline
                                    rows={3}
                                    name="address"
                                    label="Shipping Address"
                                    type="textArea"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Book
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </div >
    );
};
export default Booking;