import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import React from "react";
import homeData from "./homeProducts";
import CardItem from "./CardItem";

export default  function Herohome (name) {
 
   const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

    return (
      <div className='Appa'>

       <Carousel responsive={responsive}
       swipeable={true}
       draggable={true}
       showDots={true}
  infinite={true}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  containerClass="carousel-container"
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px">
       { homeData.map((homeData) => (
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
        
        ))}
               </Carousel>
             

      </div>
    );
  }
















































































































































  /*render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <>
        <Slider {...settings}>

                <div>
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
                <div>
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

        </Slider>
      </>
    );
  }*/


