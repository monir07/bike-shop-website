import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import TeamMember from '../TeamMember/TeamMember';
import HappyClient from '../HappyClient/HappyClient';

const Home = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProduct(data.products));
    }, [])
    return (
        <div id="home">
            <Banner></Banner>
            <div className="container">
                <h2 className="text-dark display-2 text-center my-5 text-uppercase">Our Products</h2>
                <Row xs={1} md={3} className="g-4">
                    {
                        product.map((product, index) => (
                            index > 2
                                ? <Service key={product._id} products={product}></Service>
                                : null
                        ))
                    }
                </Row>
            </div>
            <HappyClient></HappyClient>
        </div>
    );
};

export default Home;