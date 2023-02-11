
/*
function Herohome () {
 
   const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  
    return (
      <div className='Appa'>
        <h1>REACT CAROUSEL</h1>
        <Carousel responsive={responsive}>
        <div className='category-products' style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }} >
        {homeData.map((homeData) => (
        <div style={{width:"50%", margin: "100px" }}>
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
        <div className='category-products' style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }} >
        {homeData.map((homeData) => (

      <div style={{width:"30%", margin: "100px" }}>
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


