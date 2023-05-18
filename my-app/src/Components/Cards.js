import React from "react"
import CardItem from "./CardItem"
import productData from "./content"
import './Cards.css'

export default function Cards({ name }) {
  const filteredData = name ? productData.filter( item => item.title === name) : productData;
  return (
    <div className='Cards' >
      {filteredData.map((productData) => (
        <CardItem
          id={productData.id}
          img={productData.img}
          img2={productData.img2}
          img3={productData.img3}
          title={productData.title}
          text={productData.text}
          price={productData.price}
          etat={productData.etat}
          rating={productData.rating}
        />
      ))}
    </div>
  )
}









