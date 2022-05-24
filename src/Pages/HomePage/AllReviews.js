import React from 'react';
import Review from './Review';

const AllReviews = () => {
    const reviews = [
        {
            _id:1,
            name: "Winson Henry",
            review: "I found this company worthy. I was a little bit skeptical that the low prices were for real, however I must say that my experience has been incredible good. Good job to the team of bike-components!"
        },
        {
            _id:2,
            name: "Winson Henry",
            review: "Excelent service along with unbeatable prices, I will truly recommend this site to all who might need to purchase parts for bike. On my case Fernando from customer care line in Spanish sorted out all my questions!"
        },
        {
            _id:3,
            name: "Winson Henry",
            review: "Extremely nice and efficient customer service, Super fast and professionally top on everything! Nothing to complain. Well done Bike Components and Sebastian!"
        }
    ]
    return (
        <section>
                <h2 className='text-4xl font-bold text-center'>Customers Feedback</h2>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                    {
                        reviews.map(review => <Review
                        key={review._id}
                        review={review}
                        
                        ></Review>)
                    }
                </div>
        </section>
    );
};

export default AllReviews;