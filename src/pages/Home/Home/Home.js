import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import TeamMember from '../TeamMember/TeamMember';
import HappyClient from '../HappyClient/HappyClient';

const Home = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://fathomless-falls-34932.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setServices(data.packages));
    }, [])
    return (
        <div id="home">
            <Banner></Banner>
            <div className="container">
                <h2 className="text-dark display-2 text-center my-5">Our Packages</h2>
                <Row xs={1} md={3} className="g-4">
                    {
                        services.map((service, index) => (
                            index > 8
                                ? <Service key={service.id} service={service}></Service>
                                : null
                        ))
                    }
                </Row>
            </div>
            <TeamMember></TeamMember>
            <HappyClient></HappyClient>
        </div>
    );
};

export default Home;