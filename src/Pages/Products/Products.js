import React, { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct';

const Products = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetch('https://aqueous-gorge-66871.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div className='mt-24'>
            <h2 className='uppercase text-3xl font-bold text-accent text-center'>Bicycle<span className=' text-primary'> Parts</span></h2>
            <div className=' flex justify-center mt-5 mb-16'>
                <p style={{ height: "2px" }} className='w-32 mr-4 bg-neutral'></p>
                <p style={{ height: "2px" }} className='w-32 mr-4 bg-accent'></p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-24 m-10'>
            {
                products.map(product => <SingleProduct
                    key={product._id}
                    product={product}
                >
                </SingleProduct>)
            }
        </div>
        
        </div>
    );
};

export default Products;