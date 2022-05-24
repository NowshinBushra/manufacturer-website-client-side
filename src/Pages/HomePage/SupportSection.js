import React from 'react';
import { Link } from 'react-router-dom';

const SupportSection = () => {
    return (
        <div className='mb-12'>
            
            <h3 className='uppercase text-center my-12'><span className='text-2xl font-bold text-primary'>Our Mission is to Enable Adventure</span></h3>
            <div className='grid justify-items-center grid-cols-1 lg:grid-cols-5 gap-4'>
                <div>
                    <h4 className='font-bold text-accent'>EXPLORE</h4>
                    <ul>
                        <li><Link className='hover:link' to="/">Affiliates</Link></li>
                        <li><Link className='hover:link' to="/">Mission & Vision</Link></li>
                        <li><Link className='hover:link' to="/">Shipping & Returns</Link></li>
                        <li><Link className='hover:link' to="/">Terms & Service</Link></li>
                        <li><Link className='hover:link' to="/">Careers</Link></li>
                        <li><Link className='hover:link' to="/">About Us</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className='font-bold text-accent'>SUPPORT</h4>
                    <ul>
                        <li><Link className='hover:link' to="/">Knowledge Base</Link></li>
                        <li><Link className='hover:link' to="/">Product manuals</Link></li>
                        <li><Link className='hover:link' to="/">Safety Recall Information</Link></li>
                        <li><Link className='hover:link' to="/">Privacy Policy</Link></li>
                        <li><Link className='hover:link' to="/">Product Registration</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className='font-bold text-accent'>CONNECT</h4>
                    <ul>
                        <li><Link className='hover:link' to="/">Contact</Link></li>
                        <li><Link className='hover:link' to="/">Reviews</Link></li>
                        <li><Link className='hover:link' to="/">Press</Link></li>
                        <li><Link className='hover:link' to="/">Become a Dealer</Link></li>
                    </ul>
                </div>
                <div className=' ml-16 lg:col-span-2'>
                    <h4 className='font-bold text-accent'>Sign up for 15% off!</h4>
                    <p><small>Take 15% off accessories & conversion kits on your first order!</small></p>
                    <h5>Email Address</h5>
                    <input className='my-2 border-solid border-2 border-primary' type="text" /><br />
                    <button class="btn btn-outline btn-wide btn-sm btn-primary">Subscribe</button>
                    <p>By subscribing you agree to the terms of service and privacy policy</p>
                </div>
                
            </div>
            
        </div>
    );
};

export default SupportSection;