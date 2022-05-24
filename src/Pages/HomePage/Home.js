import React from 'react';
import Products from '../Products/Products';
import AllReviews from './AllReviews';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Payment from './Payment';
import SupportSection from './SupportSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <BusinessSummary></BusinessSummary>
            <AllReviews></AllReviews>
            <Payment></Payment>
            <SupportSection></SupportSection>
        </div>
    );
};

export default Home;