import React from 'react';

const Review = ({review}) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl my-12 border-t-4 border-indigo-500v">
            <div className="card-body">
                <h2 className="card-title text-accent">{review.name}</h2>
                <p>{review.review}</p>
                <div className="card-actions justify-end">
                <p><small>Ratings: 5</small></p>
                </div>
            </div>
        </div>
    );
};

export default Review;