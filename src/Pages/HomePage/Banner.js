import React from 'react';

const Banner = () => {
    return (
        <div>
            <div class="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/3zfPz9W/banner.png)'}}>
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-4xl font-bold">We're Building for your Next Adventure</h1>
                        <p class="mb-5">There's nothing more enjoyable than creating the best. The fastest road and triathlon bikes parts, the wildest bikes for dirt and gravel-designed. Your next challenge awaits.</p>
                        <button class="btn btn-accent text-white font-bold">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
