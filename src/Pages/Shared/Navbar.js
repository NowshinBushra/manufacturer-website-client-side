import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuItems = <>
        
        <li><Link className='text-accent' to='/'>Home</Link></li>
        <li><Link className='text-accent' to='/dashboard'>Dashboard</Link></li>
        <li><Link className='text-accent' to='/myOrder'>My Orders</Link></li>
        <li><Link className='text-accent' to='/addReview'>Add Review</Link></li>
        <li><Link className='text-accent' to='/myProfile'>My Profile</Link></li>
        <li><Link className='text-accent' to='/myPortfolio'>My Portfolio</Link></li>
        <li><Link className='text-accent' to='/login'>Login</Link></li>
    </>

    return (
        <div>
            <div className="navbar bg-primary">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabindex="0" className="btn lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl text-accent">Bicycle Manufacturer</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                
            </div>
        </div>
    );
};

export default Navbar;