import React from 'react';

const SingleProduct = ({product}) => {
    const {img, name, price, description, min_order, quantity } = product;
    return (
        <div class="card card-compact w-100 bg-info shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div class="card-body text-white">
                <h2 class="card-title">{name}</h2>
                <p><small>{description}</small></p>
                <p>Price <small>(per unit)</small> : {price}€</p>
                <p>Minimum Order: {min_order}</p>
                <p>Available Quantity: {quantity}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-sm btn-accent text-white">Place Order</button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;