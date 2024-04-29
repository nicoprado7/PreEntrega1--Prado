import { Link } from "react-router-dom";
import { CartWidget } from '../CartWidget/CartWidget'
import '../NavBar/NavBar.css'
import eminemLogo from '../assets/img/eminem logo 1.png';

export const NavBar = () => {
  return (
    <header >
      <Link to="/" className="logo">
      <img src={eminemLogo} alt="EMINEM SHOP" className="eminemLogo"/><Link to="/" className="eminemShop"> EMINEM SHOP</Link>
      </Link>

      <nav className="navbar">
        <Link to="/category/hombre" className="links">Hombre</Link>
        <Link to="/category/mujer" className="links">Mujer</Link>
        <Link to="/category/accesorios" className="links">Accesorios</Link>

        <CartWidget />

      </nav>
    </header>
  )
}
