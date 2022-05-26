// import { error } from 'daisyui/src/colors/colorNames';
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = ({ }) => {
    const { _id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/product/${_id}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);

    const handlePurchase = event => {
        event.preventDefault();
        
    }

    // let orderQuantity;

    // if(product.quantity < orderQuantity && product.min_order > orderQuantity){
    //      console.log('error');
    // }
    // else {
    //      orderQuantity;
    // }


    return ( 
        <div>
            <div class="hero min-h-fit bg-base-200 mt-8">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={product.img} class="max-w-screen lg:max-w-sm rounded-lg shadow-2xl lg:mr-5" alt="" />
                    <div>
                        <h5><span class="font-bold py-2">Product Id: </span> {_id}</h5>
                        <h1 class="text-2xl font-bold py-2">Name: {product.name}</h1>
                        <p class="py-2">Price <small>(per unit)</small>: {product.price}€</p>
                        <p class="py-2">Minimum Order: {product.min_order}</p>
                        <p class="py-2">Available Quantity: {product.quantity}</p>
                        <p class="py-2 font-bold">Put your purchase quantity:</p>
                        <input className='border-2 border-primary' type="text" placeholder='' />
                    </div>
                </div>
            </div>

            <div>
                 <form onSubmit={handlePurchase} className='grid justify-items-center grid-cols-1 gap-3 mt-8'>
                        <h4 className='font-bold text-2xl uppercase'>Purchase Your Order</h4>
                        <input type="text" name='name' placeholder="Your Name" class="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' placeholder="Your Email" class="input input-bordered w-full max-w-xs" />
                        <input type="text" name='address' placeholder="Address" class="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Purchase" class="btn btn-primary w-full max-w-xs" />
                 </form>
            </div>
        </div>
    );
};

export default Purchase;