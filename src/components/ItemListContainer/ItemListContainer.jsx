import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"
import './ItemListContainer.css';
import { db } from "../../config/firebaseConfig"
import { collection, getDocs, query, where } from "firebase/firestore";

// Para insertar a la DB (Solo realizar una vez)
// import { seedProducts } from "../../utils/seedProducts";
export const ItemListContainer = ({ greeting }) => {

  const { category } = useParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const getProductsDB = (category) => {
    const myProducts = category ?
      query(collection(db, "products"), where("category", "==", category)) :
      collection(db, "products");
    getDocs(myProducts)
      .then(response => {
        const productList = response.docs.map(doc => {
          const item = {
            id: doc.id,
            ...doc.data()
          }
          return item;
        });
        setProducts(productList);
        setLoading(false);
      });
  }

  useEffect(() => {
    setLoading(true)
    getProductsDB(category)

    // ****************************************
    //! Importante, para carga de productos
    // 1) comentar las dos funciones de arriba
    // 2) descomentar la de aqui abajo
    // 3) descomentar el import de seedProducts linea 13 aqui
    // seedProducts(); 
    // ****************************************
  }, [category])
  // spinner bootstrap from...
  // https://getbootstrap.com/docs/4.2/components/spinners/
  return (
    <>
      {
        loading ?
          <div>
            <h2>Cargando Productos...</h2>
            <div className="spinner-border" role="status"></div>
          </div>
          :
          <>
            {products.length === 0 && <h2>Categoria sin productos</h2>}
            {products.length > 0 && 
            <div className="productsFlex">
            <ItemList products={products} />
            </div>
            }
          </>
      }
    </>
  )
}

