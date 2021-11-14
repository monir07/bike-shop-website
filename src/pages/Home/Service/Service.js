import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';
import { Col, Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap';

const Service = ({ products }) => {
    // const {service} = props;
    const { _id, name, description, max_speed, price, img } = products;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className="">{name}</Card.Title>
                    <Card.Text className="text-secondary">{description.slice(0, 130)}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem className="text-secondary">
                        <h6>Top Speed: {max_speed} Kpmh</h6>
                    </ListGroupItem>
                    <ListGroupItem className="text-secondary">
                        <h6>Price in USD: $ {price}</h6>
                    </ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Link to={{
                        pathname: "/product/" + _id,
                        props: { productName: name, image: img, details: description },
                    }}>
                        <Button variant="danger">Book Now</Button>
                    </Link>

                    <Button variant="warning" className="float-end">Details</Button>
                </Card.Body>

            </Card>
        </Col>
    );
};

export default Service;