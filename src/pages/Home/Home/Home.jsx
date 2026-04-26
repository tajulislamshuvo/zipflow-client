import React from 'react';
import Banner from '../../../components/Banner/Banner';
import Services from '../../../components/Services/Services';
import Features from '../../../components/Features/Features';
import Brands from '../Brands/Brands';
import Reviews from '../Reviews/Reviews';
import SatisfactionCard from '../SatisfactionCard/SatisfactionCard';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';

const reviewsPromise = fetch('/reviews.json').then(res => res.json());

const Home = () => {
  return (
    <div className=''>
      <Banner></Banner>
      <Services></Services>
      <Brands></Brands>
      <Features></Features>
      <SatisfactionCard></SatisfactionCard>
      <Reviews reviewPromise={reviewsPromise}></Reviews>
    </div>
  );
};

export default Home;