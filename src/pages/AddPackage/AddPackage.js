import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";

const AddPackage = () => {
    // react hook form
    const { register, handleSubmit, reset } = useForm();

    // submit form using hook form.
    const onSubmit = data => {
        console.log(data)
        axios.post('https://fathomless-falls-34932.herokuapp.com/package', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert(' Package added successfully');
                    reset();
                }
            })
    };
    const bookImage = 'https://i.ibb.co/bRmhx01/booking.jpg';
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-6">
                    <div className="text-center">
                        <img className="img-fluid" src={bookImage} alt="booking" />
                    </div>
                </div>
                <div className="col-md-6 col-lg-6 mt-3">
                    <h2>Add New Package</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("sl_no", { required: true, maxLength: 100 })} placeholder="SL No ..." />
                        <input {...register("name")} placeholder="Package Name ..." />
                        <input type="number" {...register("price")} placeholder="Price ..." />
                        <input {...register("duration")} placeholder="Duration ..." />
                        <textarea {...register("short_des")} required placeholder="Description ..." />
                        <input {...register("img")} placeholder="Image URL ..." />
                        <input type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddPackage;