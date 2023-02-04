import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Counter(props) {
  const [count, setCount] = useState(0);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button variant="outline-secondary" onClick={() => setCount(count > 0 ? count - 1 : 0)}>
          Decrement
        </Button>
        <p style={{ margin: "0 10px" }}>{count}</p>
        <Button variant="outline-secondary" onClick={() => setCount(count + 1)}>
          Increment
        </Button >
      </div>
      <p style={{ marginTop: "10px" }}>Result: {count * props.price} TND</p>
    </div>
  );
}

export default Counter;