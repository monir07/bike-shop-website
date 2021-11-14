import React from 'react';

const ReviewItem = ({ review }) => {
    const { img, name, point, description } = review;
    return (
        <div className='item'>
            <div className="card align-items-center border-0">
                <img src={img} style={{ width: "50%", borderRadius: "50%" }} className="card-img-top img-fluid " alt="..." />
                <div className="card-body">
                    <p className="card-text text-center">{name}</p>
                </div>
                <div>
                    <span class={`fa ${parseInt(point) > 0 ? "fa-star" : "fa-star-o"} text-warning`}></span>
                    <span class={`fa ${parseInt(point) > 1 ? "fa-star" : "fa-star-o"} text-warning`}></span>
                    <span class={`fa ${parseInt(point) > 2 ? "fa-star" : "fa-star-o"} text-warning`}></span>
                    <span class={`fa ${parseInt(point) > 3 ? "fa-star" : "fa-star-o"} text-warning`}></span>
                    <span class={`fa ${parseInt(point) > 4 ? "fa-star" : "fa-star-o"} text-warning`}></span>
                </div>
                <div>
                    <p className="text-secondary px-3">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;