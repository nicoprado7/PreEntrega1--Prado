import { useContext } from "react"
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext"
import Swal from "sweetalert2";
import './Cart.css';


export const Cart = () => {

  const { cart, clearCart, removeItem, totalPrice } = useContext(CartContext)

  const handleDeleteItem = (item) => {

    Swal.fire({
      icon: "question",
      title: `¿Estás seguro que deseas eliminar ${item.name} del carrito?`,
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonColor: '#28a745', 
      cancelButtonColor: '#dc3545', 
      customClass: {
        confirmButton: 'custom-swal-confirm-button',
        cancelButton: 'custom-swal-cancel-button', 
      }
    }).then(resp => {
      if (resp.isConfirmed) {
        removeItem(item.id);
        Swal.fire({
          icon: "success",
          title: "Producto eliminado",
          confirmButtonColor: '#28a745'
        });
      }
    });
    
  }

  return (
    <>
      {totalPrice > 0 && (
        <>
          <div className="detalle">
            <div className="encabezado">Artículo</div>
            <div className="encabezado">Cantidad</div>
            <div className="encabezado">Precio Unitario</div>
            <div className="encabezado">Subtotal</div>
            <div className="encabezado"></div>
          </div>
        </>
      )}

      {/* MAPEO DE ITEMS EN CARRITO */}
      {cart.map((item) => (

        <div class="detalle" key={item.id} >
          <div class="dato">{item.name}</div>
          <div class="dato">{item.quantity}</div>
          <div class="dato">${item.price}</div>
          <div class="dato">${item.subtotal}</div>
          <div class="dato">
            <button className="btn btn-danger" onClick={() => handleDeleteItem(item)}>
              Eliminar
            </button>
          </div>
        </div>

      ))}

      {
        totalPrice > 0 ?
          // Si hay productos
          <>
            <div class="detalle"  >
              <div class="dato"> </div>
              <div class="dato"> </div>
              <div class="dato"><h2>Total: </h2></div>
              <div class="dato"><h2>${totalPrice}</h2></div>
              <div class="dato">
                <Link to="/checkout">
                  <button className="ms-2 btn btn-success">Comprar</button>
                </Link>
              </div>
            </div>

            <div class="detalle"  >
              <div class="dato"> </div>
              <div class="dato"> </div>
              <div class="dato"> </div>
              <div class="dato"> </div>
              <div class="dato">
                <button className="btn btn-outline-secondary" onClick={clearCart}>
                  Vaciar carrito
                </button>
              </div>
            </div>
          </>
          :
          // Si NO hay productos
          <>
          <h2>( Carrito Vacio )</h2>
          <Link to="/" className="eminemShop1">
            <button className="iralinicio">Ir al inicio</button>
          </Link>
        </>   
      }
    </>
  )
}