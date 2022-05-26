import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/3zfPz9W/banner.png)'}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-bold">We're Building for your Next Adventure</h1>
                        <p className="mb-5">There's nothing more enjoyable than creating the best. The fastest road and triathlon bikes parts, the wildest bikes for dirt and gravel-designed. Your next challenge awaits.</p>
                        <button className="btn btn-accent text-white font-bold">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
