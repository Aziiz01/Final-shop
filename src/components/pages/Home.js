import React from 'react';
import '../../App.css'
import NavBar from '../NavBar'
import Footer from '../Footer';
import HeroSection from '../HeroSection';
import Cards from '../Cards';


function Home() {
  return (
    <>
    <HeroSection
        imgSrc="images/img-back.jpg"
        altText="image-1"
        headerText="STAY FASHION"
        descriptionText="What are you waiting for?"
        buttonText="GET STARTED"
      />
      <div className='category-products' >
        textttt
      </div>
      <HeroSection
        imgSrc="images/img-7.jpg"
        altText="image-2"
        headerText="LOOK YOUR BEST"
        descriptionText="Upgrade your wardrobe now"
        buttonText="SHOP NOW"
      />
      <div className='category-products' >
        textttt
      </div>
      <HeroSection
        imgSrc="images/img-8.jpg"
        altText="image-3"
        headerText="BE STYLISH"
        descriptionText="Get the latest fashion trends"
        buttonText="EXPLORE"
      />
      <div className='category-products' >
        textttt
      </div>
    
    <Footer/>
    </>
  );
}
export default Home;