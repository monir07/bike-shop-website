import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const MyOrder = () => {
    const [allOrder, setAllOrder] = useState([])
    const { user } = useAuth();
    useEffect(() => {
        fetch(`https://fathomless-falls-34932.herokuapp.com/order/${user.email}`)
            .then(res => res.json())
            .then(data => setAllOrder(data));
    }, [])

    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://fathomless-falls-34932.herokuapp.com/order/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingOrders = allOrder.filter(order => order._id !== id);
                        setAllOrder(remainingOrders);
                    }
                });

        }
    }
    return (
        <div className="container">
            <Table responsive>
                <thead>
                    <tr>
                        <th>SL No</th>
                        <th>Order ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone No</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allOrder.map((order, index) => (
                            <tr key={order._id}>
                                <td>{index + 1}</td>
                                <td>{order._id}</td>
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.address}</td>
                                <td>{order.phoneNo}</td>
                                <td><Button onClick={() => handleDeleteOrder(order._id)} variant="danger"> Delete </Button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default MyOrder;