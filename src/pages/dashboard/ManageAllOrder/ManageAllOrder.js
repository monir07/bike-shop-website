import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const ManageAllOrder = () => {
    const [allOrder, setAllOrder] = React.useState([]);

    React.useEffect(() => {
        fetch('https://desolate-badlands-81980.herokuapp.com/all-orders')
            .then(res => res.json())
            .then(data => setAllOrder(data.orders));
    }, [])


    const handleDeleteOrder = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://desolate-badlands-81980.herokuapp.com/order/${id}`;
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
        <div>
            <h2>Manage All Order</h2>
            <React.Fragment>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Item Name</TableCell>
                            <TableCell>Customer</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Phone No</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {allOrder.map((row) => (
                            <TableRow key={row._id}>
                                <TableCell>{row.productName}</TableCell>
                                <TableCell>{row.userName}</TableCell>
                                <TableCell>{row.email}</TableCell>
                                <TableCell>{row.phoneNo}</TableCell>
                                <TableCell>{row.address}</TableCell>
                                <TableCell align="right">
                                    <DeleteForeverIcon sx={{ cursor: 'pointer' }} onClick={() => handleDeleteOrder(row._id)} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </React.Fragment>
        </div>
    );
};

export default ManageAllOrder;