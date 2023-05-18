import React from "react";
import { Image } from "react-bootstrap";
import { store, setStore } from "./Store";

function CartItem(props) {
  const { id, img, title, price, info } = props.data;

  const handleRemove = () => {
    const newStore = store.filter((item) => item.id !== id);
    setStore(newStore);
    props.handleRemoveOffcanvas(id);
    props.updateOffcanvas(newStore);
  };

  return (
    <div className="cart-item">
      <div className="cart-img">
        <Image fluid={true} src={img}></Image>
      </div>
      <div className="cart-info">
        <div className="first-row">
          <h3>
            {title} - {price} TND{" "}
          </h3>
          <button onClick={handleRemove}>remove</button>
        </div>
        <div className="second-row">
          <h5>{info}</h5>
        </div>
        <div className="third-row">price={price}</div>
      </div>
    </div>
  );
}

export default CartItem;
