import React from 'react';
import './HeroSection.css';
import Button from './Button';
import CardItem from "./CardItem"


function HeroSection({imgSrc, altText, headerText, descriptionText, buttonText}) {
  return (
    <div className='hero-container' style={{backgroundImage: `url(${imgSrc})`}}>
      <h1>{headerText}</h1>
      <p>{descriptionText}</p>
      <div className="hero-btns">
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
          {buttonText}
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
