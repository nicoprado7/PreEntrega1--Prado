import { Link } from 'react-router-dom';
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { CartContext } from "../../context/CartContext";
import { db } from "../../config/firebaseConfig";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import './checkout.css';

export const CheckOut = () => {
  const { cart, totalPrice, clearCart } = useContext(CartContext);

  const [formCheckout, setFormCheckout] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleName = (e) => {
    setFormCheckout({
      ...formCheckout,
      name: e.target.value,
    });
  };

  const handlePhone = (e) => {
    const phoneValue = e.target.value.replace(/\D/g, '');
    setFormCheckout({
      ...formCheckout,
      phone: phoneValue
    });
  };

  const handleEmail = (e) => {
    setFormCheckout({
      ...formCheckout,
      email: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    if (formCheckout.name.trim() === '' || formCheckout.phone.trim() === '' || formCheckout.email.trim() === '') {
      Swal.fire({
        icon: 'error',
        text: 'Por favor complete todos los campos antes de continuar.',
        confirmButtonColor: '#28a745',
      });
      return;
    }

    setLoading(true);
  
    const newOrder = {
      buyer: formCheckout,
      items: cart,
      totalPrice,
      date: serverTimestamp(),
    };

    try {
      const order = await addDoc(collection(db, "orders"), newOrder);
      setOrderId(order.id);
      clearCart();
      setTimeout(() => setLoading(false), 3000);
    } catch (error) {
      console.error("Error al procesar la orden:", error);
      Swal.fire({
        icon: 'error',
        text: 'Hubo un error al procesar su orden. Por favor, inténtelo nuevamente más tarde.',
        confirmButtonColor: '#28a745',
      });
      setLoading(false);
    }
  };

  if (orderId) {
    return (
      <>
        <h3 className="check">¡Muchas gracias por su compra!😁 <br />Su ID de orden es...</h3>
        <h3 className="check1">{orderId}</h3>
        <Link to="/" className="eminemShop1">
          <button className='iralinicio'>Ir al inicio</button>
        </Link>
      </>
    );
  }

  return (
    <div className="container d-flex justify-content-center m-5 formulario">
      {loading && (
        <div className="text-center">
          <h2>Procesando compra...</h2>
          <div className="spinner-border" role="status"></div>
        </div>
      )}
      {!loading && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Nombre</label>
          <input type="text" className="form-control" value={formCheckout.name} onChange={handleName} placeholder="Ejemplo: Nicolás Prado"/>
          
          <label htmlFor="">Teléfono</label>
          <input type="text" className="form-control" value={formCheckout.phone} onChange={handlePhone} placeholder="Ejemplo: 123456789" />
          
          <label htmlFor="">Email</label>
          <input type="email" className="form-control" value={formCheckout.email} onChange={handleEmail} placeholder="ejemplo@example.com" />
          
          <input type="submit" className="mt-3 btn btn-success" value="Terminar la compra" />
        </form>
      )}
    </div>
  );
};