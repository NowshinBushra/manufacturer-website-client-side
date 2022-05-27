import React from 'react';
import notFound from '../../assets/images/404.webp';

const NotFound = () => {
    return (
        <div>
            <div className='grid justify-items-center mt-32'>
                <img className='h-40 lg:h-72' src={notFound} alt="" />
            </div>
            
            <div className='text-center font-bold'>
                <h4 className='lg:text-2xl mx-4'><span className='text-accent'>SORRY!</span> It appears the page you're looking for was not found</h4>
            </div>
        </div>
    );
};

export default NotFound;