import React, { useEffect, useState } from 'react';
import Review from './Review';

const AllReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])


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