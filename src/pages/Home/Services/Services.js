import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import { Row } from 'react-bootstrap';
// import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://fathomless-falls-34932.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setServices(data.packages));
    }, [])

    return (
        <div className="container">
            <h2 className="text-primary text-center my-5">Our Packages</h2>
            <Row xs={1} md={3} className="g-4">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;