import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleProduct = ({product}) => {
    const {_id, img, name, price, description, min_order, quantity } = product;
    const navigate = useNavigate();
    const navigateToPurchase = _id => {
        navigate(`/purchase/${_id}`);
    }

    return (
        <div class="card card-compact w-100 bg-info shadow-xl">
            <figure class="px-10 pt-10 bg-white"><img src={img} alt="Shoes" /></figure>
            <div class="card-body text-white">
                <h2 class="card-title">{name}</h2>
                <p><small>{description}</small></p>
                <p>Price <small>(per unit)</small> : {price}€</p>
                <p>Minimum Order: {min_order}</p>
                <p>Available Quantity: {quantity}</p>
                <div class="card-actions justify-end">
                    <button onClick={() => navigateToPurchase(_id)} class="btn btn-sm btn-accent text-white">Place Order</button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;