import React from 'react';
import { Carousel } from 'react-bootstrap';
const banner1 = 'https://i.ibb.co/tJHGqVw/bg-1.jpg';
const banner2 = 'https://i.ibb.co/0YFwDPH/bg-2.jpg';
const banner3 = 'https://i.ibb.co/mTh7P3H/bg-3.jpg';
const banner4 = 'https://i.ibb.co/9nyQtxM/bg-4.jpg';

const Banner = () => {
    return (
        <>
            <Carousel >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner4}
                        alt="Fourth slide"
                    />

                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;