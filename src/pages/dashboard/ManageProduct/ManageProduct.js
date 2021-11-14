import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const ManageProduct = () => {
    const [allProduct, setAllProduct] = React.useState([])
    React.useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setAllProduct(data.products));
    }, [])

    const handleDeleteProduct = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingProducts = allProduct.filter(product => product._id !== id);
                        setAllProduct(remainingProducts);
                    }
                });
        }
    }
    return (
        <div>
            <h2>Manage Product</h2>
            <React.Fragment>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Model</TableCell>
                            <TableCell>Top Speed</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Details</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {allProduct.map((row) => (
                            <TableRow key={row._id}>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.max_speed} kmph</TableCell>
                                <TableCell>{row.price} USD</TableCell>
                                <TableCell>{row.description.slice(0, 60)} ...</TableCell>
                                <TableCell align="right">
                                    <DeleteForeverIcon sx={{ cursor: 'pointer' }} onClick={() => handleDeleteProduct(row._id)} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </React.Fragment>
        </div>
    );
};

export default ManageProduct;