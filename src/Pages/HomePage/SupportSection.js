import React from 'react';

const SupportSection = () => {
    return (
        <div>
            <h3 className='uppercase text-center my-12'><span className='bg-primary text-2xl text-white px-10 py-3'>our mission is to Enable Adventure</span></h3>
            <div className='grid grid-cols-5 gap-4'>
                <div>
                    <h4>EXPLORE</h4>
                    <ul>
                        <li>Affiliates</li>
                        <li>Mission & Vision</li>
                        <li>Shipping & Returns</li>
                        <li>Terms & Service</li>
                        <li>Careers</li>
                        <li>About Us</li>
                    </ul>
                </div>
                <div>
                    <h4>SUPPORT</h4>
                    <ul>
                        <li>Knowledge Base</li>
                        <li>Product manuals</li>
                        <li>Safety Recall Information</li>
                        <li>Privacy Policy</li>
                        <li>Product Registration</li>
                    </ul>
                </div>
                <div>
                    <h4>CONNECT</h4>
                    <ul>
                        <li>Contact</li>
                        <li>Reviews</li>
                        <li>Press</li>
                        <li>Become a Dealer</li>
                    </ul>
                </div>
                <div className='col-span-2'>
                    <h4>Sign up for 15% off!</h4>
                    <p><small>Take 15% off accessories & conversion kits on your first order!</small></p>
                    <h5>Email Address</h5>
                    <input className='border-solid border-2 border-primary' type="text" /><br />
                    <button class="btn btn-outline btn-wide btn-sm btn-primary">Subscribe</button>
                    <p>By subscribing you agree to the <button class="btn btn-link">terms of service</button> and <button class="btn btn-link">privacy policy</button></p>
                </div>
                
            </div>
        </div>
    );
};

export default SupportSection;