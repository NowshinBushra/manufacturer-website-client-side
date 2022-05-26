import React from 'react';
import flag from '../../assets/icons/icons/flag.png';
import clients from '../../assets/icons/icons/clients.png';
import project from '../../assets/icons/icons/project.png';
import feedback from '../../assets/icons/icons/feedback.png';

const BusinessSummary = () => {
    return (
        <div className='my-24'>
            <div>
                <h2 className='text-center text-4xl text-accent font-bold uppercase'>Millions Business Trust Us</h2>
                <h4 className='text-center text-primary font-semibold uppercase'>try to understand users expectation</h4>
                <div className=' flex justify-center my-5'>
                    <p style={{ height: "2px" }} className='w-32 mr-4 bg-accent'></p>
                    <p style={{ height: "2px" }} className='w-20 mr-4 bg-neutral'></p>
                    <p style={{ height: "2px" }} className='w-8 bg-primary'></p>
                </div>
            </div>

            <div className='ml-28 lg:ml-0'>
                <div className='text-primary lg:flex justify-around mt-12'>

                    <div className='mb-10'>
                        <img style={{ height: "50px" }} src={flag} alt="" />
                        <h1 className='font-bold text-4xl'>67+</h1>
                        <p className='text-accent font-semibold'>Countries</p>
                    </div>
                    <div className='mb-10'>
                        <img style={{ height: "50px" }} src={clients} alt="" />
                        <h1 className='font-bold text-4xl'>489+</h1>
                        <p className='text-accent font-semibold'>Happy Clients</p>
                    </div>
                    <div className='mb-10'>
                        <img style={{ height: "50px" }} src={project} alt="" />
                        <h1 className='font-bold text-4xl'>278+</h1>
                        <p className='text-accent font-semibold'>Complete Projects</p>
                    </div>
                    <div className='mb-10'>
                        <img style={{ height: "50px" }} src={feedback} alt="" />
                        <h1 className='font-bold text-4xl'>301+</h1>
                        <p className='text-accent font-semibold'>Feedback</p>
                    </div>
                </div>
            </div>


            <div className=' flex justify-center'>
                <div className="card w-4/5 bg-base-100 shadow-xl">
                    <div className="card-body items-center grid lg:grid-cols-2 gap-20">
                        <div>
                            <p className='text-2xl font-bold'>Have any question about us or get a product request?</p>
                            <p className='text-accent'>Don't hesitate to contact us</p>
                        </div>
                        <div className="card-actions">
                            <button className="btn btn-sm text-accent">Request for Quote</button>
                            <button className="btn btn-sm btn-accent">Contact us</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BusinessSummary;