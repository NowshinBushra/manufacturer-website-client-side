import React from 'react';
import { Link } from 'react-router-dom';
import amazon from '../../assets/images/amazon.png';
import paypal from '../../assets/images/paypal.png';
import visa from '../../assets/images/visa.png';
import mcard from '../../assets/images/mcard.png';
import discover from '../../assets/images/discover.png';
import ipay from '../../assets/images/ipay.png';
import dhl from '../../assets/images/dhl.png';

const Payment = () => {
    return (
        <div className='mx-10 my-24'>
            <h2 className='text-2xl font-bold text-accent text-center'>Our Payment Methods</h2>
            <p className='uppercase text-center text-primary my-2'>safe shipping / secure payment / fast delivery</p>
            <div className='grid grid-cols-2 lg:grid-cols-7'>
            <Link to="/"><img className='border-solid border-2 m-1' style={{ height: "80px" }} src={amazon} alt="" /></Link>
            <Link to="/"><img className='border-solid border-2 m-1' style={{ height: "50px" }} src={paypal} alt="" /></Link>
            <Link to="/"><img className='border-solid border-2 m-1' style={{ height: "50px" }} src={visa} alt="" /></Link>
            <Link to="/"><img className='border-solid border-2 m-1' style={{ height: "50px" }} src={mcard} alt="" /></Link>
            <Link to="/"><img className='border-solid border-2 m-1' style={{ height: "70px" }} src={discover} alt="" /></Link>
            <Link to="/"><img className='border-solid border-2 m-1' style={{ height: "40px" }} src={ipay} alt="" /></Link>
            <Link to="/"><img className='border-solid border-2 m-1' style={{ height: "50px" }} src={dhl} alt="" /></Link>
            </div>
            
        </div>
    );
};

export default Payment;