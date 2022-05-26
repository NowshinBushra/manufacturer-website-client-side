import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {

    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
      };
    
    const menuItems = <>
        
        <li><Link className='text-accent' to='/'>Home</Link></li>
        <li><Link className='text-accent' to='/dashboard'>Dashboard</Link></li>
        <li><Link className='text-accent' to='/myOrder'>My Orders</Link></li>
        <li><Link className='text-accent' to='/addReview'>Add Review</Link></li>
        <li><Link className='text-accent' to='/myProfile'>My Profile</Link></li>
        <li><Link className='text-accent' to='/myPortfolio'>My Portfolio</Link></li>
        <li>{user ? <button onClick={logout} className="btn btn-outline btn-accent">Sign Out</button> : <Link className='text-accent' to='/login'>Login</Link>}</li>
    </>

    return (
        <div>
            <div className="navbar bg-primary">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                        </ul>
                    </div>
                    <button className="btn btn-ghost normal-case text-xl text-accent">Bicycle Manufacturer</button>
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