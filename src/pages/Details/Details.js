import { useParams } from 'react-router';
import axios from 'axios';
import { Card, Button, ListGroup, Badge, ListGroupItem } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import { useForm } from "react-hook-form";
import { useEffect, useState } from 'react';

const Details = (props) => {
    const { detailId } = useParams();
    const { user } = useAuth();
    const [booking, setBooking] = useState([]);

    // react hook form 
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data)
        axios.post('https://fathomless-falls-34932.herokuapp.com/place_order', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    };

    const bookImage = 'https://i.ibb.co/bRmhx01/booking.jpg';

    useEffect(() => {
        fetch(`https://fathomless-falls-34932.herokuapp.com/packages/${detailId}`)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [])
    console.log(booking);

    return (
        <div className="container">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-6">
                        {/* <div className="text-center">
                            <img className="img-fluid" src={bookImage} alt="booking" />
                        </div> */}
                        <Card>
                            <Card.Img variant="top" src={booking.img} />
                            <Card.Body>
                                <Card.Title className="">{booking.name}</Card.Title>
                                <Card.Text className="text-secondary">{booking.short_des}</Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem className="text-primary">{booking.duration}
                                    <h4 className="d-inline m-3"><Badge bg="warning">$ {booking.price}</Badge></h4>
                                </ListGroupItem>
                            </ListGroup>
                        </Card>
                    </div>
                    <div className="col-md-6 col-lg-6 mt-5">
                        <h2>Booking Form</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label>Order id</label>
                            <input {...register("orderId", { required: true, maxLength: 100 })} placeholder="Order id" value={detailId} />
                            <label>Full Name</label>
                            <input {...register("name")} placeholder="Full Name ..." value={user?.displayName} />
                            <label>Valid Email</label>
                            <input {...register("email")} placeholder="Valid Email ..." value={user?.email} />
                            <label>Address</label>
                            <textarea {...register("address")} required placeholder="Address ..." />
                            <label>Phone No</label>
                            <input type="number" {...register("phoneNo")} required placeholder="Phone no ..." />
                            <input type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Details;