import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <footer class="footer footer-center p-4 bg-info text-accent">
            <div>
                <p>Copyright © 2022 - All right reserved by Bicycle Manufacturer Ltd</p>
            </div>
        </footer>
    );
};

export default Footer;