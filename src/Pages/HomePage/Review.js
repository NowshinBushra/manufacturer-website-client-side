import React from 'react';

const Review = ({review}) => {
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl my-12">
            <div class="card-body">
                <h2 class="card-title text-accent">{review.name}</h2>
                <p>{review.review}</p>
                <div class="card-actions justify-end">
                <p><small>Ratings: 5</small></p>
                </div>
            </div>
        </div>
    );
};

export default Review;