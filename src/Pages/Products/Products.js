import React, { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('productlist.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 m-10'>
            {
                products.map(product => <SingleProduct
                    key={product._id}
                    product={product}
                >
                </SingleProduct>)
            }
        </div>
    );
};

export default Products;