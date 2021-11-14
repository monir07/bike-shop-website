import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Chip from '@mui/material/Chip';


const ManageAllOrder = () => {
    const [allOrder, setAllOrder] = React.useState([]);
    const [status, setStatus] = React.useState(0);

    React.useEffect(() => {
        fetch('https://desolate-badlands-81980.herokuapp.com/all-orders')
            .then(res => res.json())
            .then(data => setAllOrder(data.orders));
    }, [status])

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

    const handleChangeStatus = (id) => {
        const url = `https://desolate-badlands-81980.herokuapp.com/order/${id}`;
        fetch(url, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Update Successful');
                    setStatus(oldKey => oldKey + 1);
                }
            });
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
                            <TableCell>Status</TableCell>
                            <TableCell align="center">Action</TableCell>
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
                                <TableCell>
                                    <Chip label={`${row.isApproved ? "Shipped" : "Pending"}`} color={`${row.isApproved ? "success" : "warning"}`} />
                                </TableCell>
                                <TableCell align="center">
                                    <CheckBoxIcon sx={{ cursor: 'pointer', marginInline: 1 }} onClick={() => handleChangeStatus(row._id)} />

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