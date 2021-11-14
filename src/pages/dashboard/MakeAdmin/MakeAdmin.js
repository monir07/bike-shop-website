import * as React from 'react';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const MakeAdmin = () => {
    const [allUser, setAllUser] = React.useState([])
    React.useEffect(() => {
        fetch('https://desolate-badlands-81980.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setAllUser(data.users));
    }, [])

    const handleMakeAdmin = (id) => {
        const proceed = window.confirm('Are you sure, Make Admin?');
        if (proceed) {
            const url = `https://desolate-badlands-81980.herokuapp.com/users/admin/${id}`;
            fetch(url, {
                method: 'PUT'
            })
                .then(res => res.json())
                .then(data => {
                    alert('Make Admin successfully');
                    // if (data.deletedCount > 0) {
                    //     alert('Make Admin successfully');
                    // }
                });
        }
    }
    return (
        <div>
            <h2>Make Admin</h2>
            <React.Fragment>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Email Address</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {allUser.map((row) => (
                            <TableRow key={row._id}>
                                <TableCell>{row.displayName}</TableCell>
                                <TableCell>{row.email}</TableCell>
                                <TableCell>{row.role && "Admin"}</TableCell>
                                <TableCell align="center">
                                    {
                                        row.role ?
                                            <CheckCircleIcon /> :
                                            <Button variant="contained" onClick={() => handleMakeAdmin(row._id)}>Make Admin</Button>
                                    }
                                    {/* <Button variant="contained" onClick={() => handleMakeAdmin(row._id)}>Make Admin</Button> */}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </React.Fragment>
        </div>
    );
};

export default MakeAdmin;