import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";


export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null);

  const getProductDB = (id) => {
    const oneProduct = doc(db, "products", id);

    setTimeout(() => {
    getDoc(oneProduct)
      .then(response => {
        if (response.exists()) {
          const product = {
            id: response.id,
            ...response.data()
          };
          setItem(product);
        } else {
          const errorMessage = "No se encontró el producto";
          setError(errorMessage);
        }
      })
      .catch(error => {
        console.error('Error al obtener el producto:', error);
        setError("Error al obtener el producto");
      })
      .finally(() => {
        setLoading(false);
      });
    }, 1000);
}

  useEffect(() => {
    setLoading(true)
    getProductDB(id);
  }, [])

  return (
    <>
      {
        loading ?
          <div>
            <h2>Cargando detalles del producto...</h2>
            <div className="spinner-border" role="status"></div>
          </div>
          :
          <>
            {error && <h2>No se encontró el producto</h2>}
            {item && <ItemDetail {...item} />}
          </>
      }
    </>
  )
}