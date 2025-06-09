import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Newsletter from '../components/Newsletter';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <Newsletter />
    </>
  );
};

export default Home;