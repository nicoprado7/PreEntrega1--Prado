// REACT...
import { BrowserRouter, Route, Routes } from "react-router-dom";

// CONTEXT...
import { CartContextProvider } from "./context/CartContext";

// COMPONENTES... 
import { NavBar } from "./components/NavBar/NavBar"
import { Cart } from "./components/Cart/Cart";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CheckOut } from "./components/CheckOut/ChekOut"

import "./styles/App.css"
// -----------------------------

const App = () => {

  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />

          <main>
            <Routes>

              <Route path="/" element={<ItemListContainer/>} />
              <Route path="/category/:category" element={<ItemListContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<CheckOut />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />

              {/* PAGINA DE ERROR */}
              <Route path="*" element={<h1>Error 404</h1>} />

            </Routes>
          </main>

<footer className="footer">
  <div className="container">
      <div className="footer-row">

          <div className="footer-links">
              <div className="social-link">
                  <a href="https://www.facebook.com/eminem/?locale=es_LA" target="_blank"><i
                          className="fab fa-facebook-f"></i></a>
                  <a href="https://www.instagram.com/eminem/" target="_blank"><i className="fab fa-instagram"></i></a>
                  <a href="https://twitter.com/Eminem?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                      target="_blank"><i className="fab fa-twitter"></i></a>
                  <a href="https://www.youtube.com/channel/UCfM3zsQsOnfWNUppiycmBuw" target="_blank"><i
                          className="fab fa-youtube"></i></a>
              </div>
          </div>
      </div>
  </div>
</footer>



        </BrowserRouter>
      </CartContextProvider>

    </>
  )
}

export default App


