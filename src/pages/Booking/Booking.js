import React from 'react';
import { useForm } from "react-hook-form";

const Booking = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    const bookImage = 'https://i.ibb.co/bRmhx01/booking.jpg';
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-6">
                    <div className="text-center">
                        <img className="img-fluid" src={bookImage} alt="booking" />
                    </div>
                </div>
                <div className="col-md-6 col-lg-6 mt-5">
                    <h2>Booking Form</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("orderId", { required: true, maxLength: 100 })} placeholder="Order id" />
                        <input {...register("name", { pattern: /^[A-Za-z]+$/i })} placeholder="Full Name ..." />
                        <input {...register("email", { pattern: /^[A-Za-z]+$/i })} placeholder="Valid Email ..." />
                        <input type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Booking;