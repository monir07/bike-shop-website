import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import TeamMember from '../TeamMember/TeamMember';
import Review from '../Review/Review';
import Header from '../../shared/Header/Header';
import Footer from '../../shared/Footer/Footer';

const Home = () => {
    const [product, setProduct] = useState([])
    const [reviewItem, setReviewItem] = React.useState([]);
    useEffect(() => {
        fetch('https://desolate-badlands-81980.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProduct(data.products));
    }, [])

    useEffect(() => {
        fetch('https://desolate-badlands-81980.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviewItem(data.reviews));
    }, [])

    return (
        <div id="home">
            <Header></Header>
            <Banner></Banner>
            {/* Limited product show in home page */}
            <div className="container">
                <h2 className="text-dark display-2 text-center my-5 text-uppercase">Our Products</h2>
                <Row xs={1} md={3} className="g-4">
                    {
                        product.map((product, index) => (
                            index < 6 ?
                                <Service key={product._id} products={product}></Service> :
                                null
                        ))
                    }
                </Row>
            </div>
            <Review allReview={reviewItem}></Review>
            <TeamMember></TeamMember>
            <Footer></Footer>
        </div>
    );
};

export default Home;