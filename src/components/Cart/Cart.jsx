

// REACT...
import { useContext } from "react"
import { Link } from "react-router-dom";

// CONTEXT...
import { CartContext } from "../../context/CartContext"

//SWEETALERT...
import Swal from "sweetalert2";

// CSS
import './Cart.css';

// **************************************************
export const Cart = () => {

  // emplea el... useContext
  const { cart, clearCart, removeItem, totalPrice } = useContext(CartContext)

  // SweetAlert - Delete
  const handleDeleteItem = (item) => {

    Swal.fire({
      icon: "question",
      title: `¿Estás seguro que deseas eliminar ${item.name} del carrito?`,
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonColor: '#28a745', // Cambia el color del botón "Ok"
      cancelButtonColor: '#dc3545', // Cambia el color del botón "Cancelar"
      customClass: {
        confirmButton: 'custom-swal-confirm-button', // Clase personalizada para el botón "Ok"
        cancelButton: 'custom-swal-cancel-button', // Clase personalizada para el botón "Cancelar"
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

  // ----------------------
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





      {/* mapeamos los items en carrito... */}
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
      {/* ---------------------------- */}



      {

        totalPrice > 0 ?
          // Hay productos...
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
          // Sin productos...
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