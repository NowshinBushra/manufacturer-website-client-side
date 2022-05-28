// import { error } from 'daisyui/src/colors/colorNames';
import React from 'react';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Purchase = () => {
    const { _id} = useParams();

    const [user] = useAuthState(auth);

    const [product, setProduct] = useState({});

    const [newQuantity, setNewQuantity] = useState(10)
    
    useEffect(() => {
        fetch(`https://aqueous-gorge-66871.herokuapp.com/product/${_id}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [_id]);


    const orders = {
        ptId: _id,
        pName: product.name,
        userEmail: user.email,
        userName: user.displayName,
    }

    const url = `https://aqueous-gorge-66871.herokuapp.com/orders`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orders)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
        })


 //---------quantity decrement and increment---------- 
    const handleDecrement = () =>{
        
        setNewQuantity(orderQuantity => orderQuantity-1);
        // if(newQuantity > product.min_order){
        // }
        
    }
    const handleIncrement = () =>{
        
        setNewQuantity(orderQuantity => orderQuantity+1);
        // if(newQuantity < product.quantity){
        // }
       
    }
//-------------------------------

    const handlePurchase = event => {
        event.preventDefault();

    }

    return (
        <div>
            <div className="hero min-h-fit bg-base-200 mt-8">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={product.img} className="max-w-screen lg:max-w-sm rounded-lg shadow-2xl lg:mr-5" alt="" />
                    <div>
                        <h5><span className="font-bold py-2">Product Id: </span> {_id}</h5>
                        <h1 className="text-2xl font-bold py-2">Name: {product.name}</h1>
                        <p className="py-2">Price <small>(per unit)</small>: {product.price}€</p>
                        <p className="py-2">Minimum Order: {product.min_order}</p>
                        <p className="py-2">Available Quantity: {product.quantity}</p>
                        <p className="py-2 font-bold">Put your purchase quantity:</p>
                        <div className="form-control">
                            
                            <label className="input-group">
                                <span><button onClick={handleDecrement} className='text-xl font-bold'>-</button></span>
                                <button className="input input-bordered text-xl">{newQuantity}</button>
                                <span><button onClick={handleIncrement} className='text-xl font-bold'>+</button></span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <form onSubmit={handlePurchase} className='grid justify-items-center grid-cols-1 gap-3 mt-8'>
                    <h4 className='font-bold text-2xl uppercase'>Purchase Your Order</h4>
                    <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                    <input type="email" name='email' disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                    <input type="text" name='address' placeholder="Address" className="input input-bordered w-full max-w-xs" />
                    <input type="text" name='phone' placeholder="Phone" className="input input-bordered w-full max-w-xs" />
                    <button disabled={newQuantity < product.min_order || newQuantity > product.quantity} className="btn btn-primary w-full max-w-xs">Purchase</button>
                </form>
            </div>
        </div>
    );
};

export default Purchase;