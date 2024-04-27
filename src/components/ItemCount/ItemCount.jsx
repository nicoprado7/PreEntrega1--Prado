import { useState } from "react";
import './ItemCount.css';

export const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      return setCount(count + 1);
    }
    setCount(count);
  };
  
  const decrement = () => {
    if (count === 1) {
      return setCount(1);
    }
    setCount(count - 1);
  };
  
  return (
    <>
 <div className="button-container">
  <button className="action-button decrement-button" onClick={decrement}>-</button>
  <p>{count}</p>
  <button className="action-button increment-button" onClick={increment}>+</button>
</div>
      <br />
      <button className="btn btn-success" onClick={() => onAdd(count)}>Agregar al carrito</button>
    </>
  );
};