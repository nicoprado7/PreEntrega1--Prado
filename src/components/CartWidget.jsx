import cart from '../assets/carrito-de-compras.png'

export const CartWidget = () => {
return (
    
    <div id="cart-widget">
    <img src={cart} alt="Cart"  width={35} class="carrito"/>
    <span>4</span>
    </div>
)
}