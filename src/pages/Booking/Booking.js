import * as React from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useAuth from '../../hooks/useAuth';
import Header from '../shared/Header/Header';

const Booking = (props) => {
    const { bookId } = useParams();
    const { user } = useAuth();
    const [bookedItem, setBookedItem] = React.useState([]);
    const [isBooked, setIsBooked] = React.useState(false);
    console.log(isBooked);
    const handleBooking = event => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const bookId = data.get('bookId');
        const productName = data.get('productName');
        const userName = data.get('userName');
        const email = data.get('email');
        const phoneNo = data.get('phoneNo');
        const address = data.get('address');
        const postData = {
            bookingID: bookId,
            productName: productName,
            userName: userName,
            phoneNo: phoneNo,
            address: address,
            email: email,
        }

        axios.post('https://desolate-badlands-81980.herokuapp.com/place_order', postData)
            .then(response => {
                if (response.data.insertedId) {
                    setIsBooked(true);
                    alert('Your Order is Booked');
                }
            })
            .catch(error => {
                this.setState({ errorMessage: error.message });
                console.error('There was an error!', error);
            });

    };

    React.useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch(`https://desolate-badlands-81980.herokuapp.com/product/${bookId}`)
            const data = await response.json()
            setBookedItem(data)
        }
        fetchProducts()
    }, [bookId])

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

                                image={bookedItem.img}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {bookedItem.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {bookedItem.description}
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
                                    fullWidth
                                    margin="normal"
                                    label="Product id"
                                    value={bookId}
                                    name="bookId"
                                />

                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="productName"
                                    // label="Product Name"
                                    value={bookedItem.name}

                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="userName"
                                    label="User Name"
                                    value={user.displayName}

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