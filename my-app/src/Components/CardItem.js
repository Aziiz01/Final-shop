import React, { useState ,useEffect } from "react";
import { FaStar } from "react-icons/fa";
import "./CardItem.css";
import OffcanvasComponent from "./addToCard";
import { store, setStore } from "./Store";



function CardItem(props) {

  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [bgIndex, setBgIndex] = useState(0);  

  const handleShowOffcanvas = () => {
    setShowOffcanvas(true);
      // Check if item already exists in store
  const existingItem = store.find((item) => item.id === props.id);

  if (!existingItem) {
    // Create a new array by spreading the existing store array and adding the new item
    const newStore = [    ...store,    {     
          id:props.id,
          img: props.img,
          title: props.title,      
          price: props.price,      
          info: props.text,    
        },  ];

  // Persist store
  setStore(newStore);
    }
  };



 
  const handleMouseEnter = () => {
    setBgIndex(1);
  };

  const handleMouseLeave = () => {
    setBgIndex(0);
  };

  const bgImage = bgIndex === 0 ? props.img : props.img2;


  const handleHideOffcanvas = () =>{
    setShowOffcanvas(false);
  };



  let stars = [];
  for (let i = 0; i < props.rating; i++) {
    stars.push(<FaStar key={i} />);
  };

  return (
    <>
      <div
        id={props.id}
        className="card"
      >
         <div className="card-img"
                 style={{ backgroundImage: `url(${bgImage})` }}
                 onMouseEnter={handleMouseEnter}
                 onMouseLeave={handleMouseLeave}
         >
          </div>
          <div className="description">
            <div className="title-rating" >
                <h6>{props.title}</h6> 
                <p>{stars} {props.rating}</p>
            </div>
            <div className="text">
              <p>{props.text}</p>
            </div>
          </div>
          <div className="card-button">
            <button className="add-button" onClick={handleShowOffcanvas}> ADD TO CART {props.price}TND</button>
            <OffcanvasComponent show={showOffcanvas} onHide={()=>setShowOffcanvas(false)}
            />
          </div>
      </div>
  </>
  );
}

export default CardItem;
              {/*props.etat === "In Stock" ? <FaShoppingCart /> : null} {props.etat*/}
