import {useEffect, useState} from "react"; 

import Container from 'react-bootstrap/Container';
import { useParams } from "react-router-dom";
import data from "../data/products.json";

export const ItemDetailContainer = () => {
  const [product, setProduct]  = useState (null);
  const [counter, setCounter] = useState(1);
  const loadingIndicator = document.getElementById('loadingIndicator');

  const { id } = useParams();
useEffect(() => {

  const get = new Promise ((resolve,reject) => {
    setTimeout(() => resolve (data),2000);    
  });

  get.then((data) => {
    const filter = data.find((p) => p.id === Number(id));
    setProduct(filter);
  });

},[id]);

 // Función para incrementar el contador
 const incrementCounter = () => {
  setCounter(counter + 1);
};

// Función para decrementar el contador
const decrementCounter = () => {
  if (counter > 0) {
    setCounter(counter - 1);
  }
};

  // Función para agregar al carrito
  const addToCart = () => {
    console.log(`Se ha agregado ${counter} unidades de ${product.name} al carrito.`);
  };

if(!product) return loadingIndicator.style.display = 'block';
setTimeout(() => {
    loadingIndicator.style.display = 'none';
},);;

return ( 
  
<Container className='mt-4'>
{/* <h1>Detalle del producto:</h1> */}
  <h1>{product.name}</h1>
  <div className="image-container" style={{ display: 'flex', justifyContent: 'center' }}>
    <img width={700} src={product.img} alt="imagen" className="imagen" />
<div className="detalle">
  <h2 className="detalle3">Detalle del producto:</h2>
  <div className="detalle2">{product.detalle}</div>
</div>

</div>

  {/* <p className="detalle">{product.detalle}</p> */}

  <div className="contador" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
    <div>
        <button onClick={decrementCounter} className="btn btn-danger">-</button>
        <span className="contador-valor">{counter}</span>
        <button onClick={incrementCounter} className="btn btn-success">+</button>
    </div>
    <button onClick={addToCart} className="btn btn-warning">Agregar al carrito</button>
</div>

    </Container>)

 
};



