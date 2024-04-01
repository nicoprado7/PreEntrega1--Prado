import {useEffect, useState} from "react"; 

import Container from 'react-bootstrap/Container';
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import data from "../data/products.json";

export const ItemListContainer = () => {
  const [products, setProducts]  = useState ([]);

  const { id } = useParams();

useEffect(() => {

  const get = new Promise ((resolve,reject) => {
    setTimeout(() => resolve (data),500);    
  });

  get.then((data) => {
    if(!id){
      setProducts(data);
    } else {
      const filtered = data.filter(p => p.category === id);
      setProducts(filtered);
    }
    
  });

},[id]);

return ( 
<Container className='mt-4'>
  <ItemList products={products} />
 </Container>)
};
