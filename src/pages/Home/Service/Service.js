import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';
import { Col, Card, Button, ListGroup, Badge, ListGroupItem } from 'react-bootstrap';
const Service = ({ service }) => {
    // const {service} = props;
    const { _id, name, price, duration, short_des, img } = service;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className="">{name}</Card.Title>
                    <Card.Text className="text-secondary">{short_des.slice(0, 130)}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem className="text-primary">{duration}
                        <h4 className="d-inline m-3"><Badge bg="warning">$ {price}</Badge></h4>
                    </ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Link to={{
                        pathname: "/booking/" + _id,
                        userProps: { packageName: name, image: img, details: short_des },
                    }}><Button variant="danger">Book Now</Button></Link>
                </Card.Body>

            </Card>
        </Col>
    );
};

export default Service;