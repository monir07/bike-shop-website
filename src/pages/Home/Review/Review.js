import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ReviewItem from './ReviewItem';

const Review = (allReview) => {
    const reviews = allReview.allReview;
    return (
        <div className="container">
            <h2 className="my-5 display-5 text-center text-uppercase">product review</h2>
            <OwlCarousel className='owl-theme' nav>
                {
                    reviews.map((review) => (
                        <ReviewItem key={review._id} review={review}></ReviewItem>
                    ))
                }
            </OwlCarousel>
        </div>
    );
};

export default Review;