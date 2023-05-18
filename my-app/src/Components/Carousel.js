import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Btn = css`
    background-color: black;
    color: white;
    text-decoration: none;
    position : absolute;
`;
function CarouselComponent(){
    return (
        <Carousel autoPlay infiniteLoop>
            <div>
                <img src="../images/R.jpg" alt="Slide 1"></img>
                <Link to="/" css={Btn}>SHOP NOW</Link>
                <p className="legend">Slide 1</p>
            </div>
            <div>
                <img src="../images/pm.jpg" alt="Slide 2"/>
                <Link to="/">SHOP NOW</Link>
                <p className="legend">Slide 2</p>
            </div>
            <div>
                <img src="../images/fe.jpg" alt="Slide 3"/>
                <Link to="/">SHOP NOW</Link>
                <p className="legend">Slide 3</p>
            </div>
        </Carousel>
    );
}

export default CarouselComponent;
