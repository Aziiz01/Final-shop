import React from 'react';
import CarouselComponent from '../Components/Carousel';
import ProductCategoryCard from '../Components/ProductCategoryCard';
import CardCarousel from '../Components/cardCarousel';


function Home() {
    const categories = [
        {category: 'Category 1', image: 'img1.jpg', link: '/products/1'},
        {category: 'Category 2', image: 'img2.jpg', link: '/products/2'},
        {category: 'Category 3', image: 'img3.jpg', link: '/products/3'},
    ];

    return (
        <div style={{alignItems:'center', border:'3px solid blue',backgroundImage:'url(../images/itcosmetics.jpg)',backgroundOpacity:'0.5' }}>
            <div style={{width:'80%',marginLeft: 'auto',marginRight: 'auto',border:'3px solid red' , backgroundColor:'black'}}>
                <div>
                    <CarouselComponent />
                </div>
                <div style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>
                    {categories.map((category, index) => (
                        <ProductCategoryCard key={index} {...category} />
                 ))}
                 </div>
                 <div>
                    <CardCarousel/>
                 </div>
            </div>
        </div>
    );
}

export default Home;        
