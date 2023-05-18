import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import "./addToCart.css";
import CartItem from "./CartItem";
import { store,  handleRemove } from "./Store";

function OffcanvasComponent(props) {
  const [offcanvasStore, setOffcanvasStore] = useState(store);

  const updateOffcanvas = (newStore) => {
    setOffcanvasStore(newStore);
  };

  const handleRemoveOffcanvas = (id) => {
    const newOffcanvasStore = offcanvasStore.filter((item) => item.id !== id);
    setOffcanvasStore(newOffcanvasStore);
  };

  return (
    <Offcanvas show={props.show} onHide={props.onHide} style={{ width: "700px" }}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          <h2>Cart</h2>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div className="cart-items">
          {offcanvasStore.map((item, index) => (
            <CartItem
              key={index}
              data={item}
              handleRemove={handleRemove}
              handleRemoveOffcanvas={handleRemoveOffcanvas}
              updateOffcanvas={updateOffcanvas}
            />
          ))}
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default OffcanvasComponent;
