import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <div className=' mt-32'>
            <footer class="footer footer-center fixed bottom-0 left-0 right-0 p-4 bg-info text-accent">
            <div>
                <p>Copyright © 2022 - All right reserved by Bicycle Manufacturer Ltd</p>
            </div>
        </footer>
        </div>
    );
};

export default Footer;