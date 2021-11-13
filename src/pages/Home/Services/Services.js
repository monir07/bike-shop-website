import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import { Row } from 'react-bootstrap';
import Header from '../../shared/Header/Header';
import Footer from '../../shared/Footer/Footer';
// import './Services.css';

const Services = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProduct(data.products));
    }, [])

    return (
        <div>
            <Header></Header>
            {/* All Product List */}
            <div className="container">
                <h2 className="text-secondary text-center mb-5">Our Premium Bike List</h2>
                <Row xs={1} md={3} className="g-4">
                    {
                        product.map((product) => (
                            <Service key={product._id} products={product}></Service>
                        ))
                    }
                </Row>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default Services;