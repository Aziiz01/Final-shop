import { CarouselItem } from 'react-bootstrap';
import homeData from '../components/homeProducts';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CardItem from './CardItem'

function Herohome () {
return (
    <>
<Carousel nextIcon={true}>
        <Carousel.Item>
        <div className='category-products' style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }} >
      {homeData.map((homeData) => (
        <div style={{width:"30%", margin: "50px" }}>
      <CardItem
          id={homeData.id}
          img={homeData.img}
          img2={homeData.img2}
          img3={homeData.img3}
          title={homeData.title}
          text={homeData.text}
          price={homeData.price}
          etat={homeData.etat}
          rating={homeData.rating}
        />
        </div>
        ))}
        </div>
        </Carousel.Item>
        <CarouselItem>
        <div className='category-products' style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}  >
        {homeData.map((homeData) => (
          <div style={{ width: "30%", margin: "50px" }}>
        <CardItem
          id={homeData.id}
          img={homeData.img}
          img2={homeData.img2}
          img3={homeData.img3}
          title={homeData.title}
          text={homeData.text}
          price={homeData.price}
          etat={homeData.etat}
          rating={homeData.rating}
        />
        </div>
        ))}
        
        </div>
        </CarouselItem>
         </Carousel> 
         </>
);
}
export default Herohome;