import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { NavBar } from "./components/Navbar";
import { CartWidget } from "./components/CartWidget";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={
            <>
              <header class="d-flex justify-content-between p-4">
                <p class="textoPagina animate__animated animate__bounceInLeft">Aquí encontrarás todo tipo de merchandising de Eminem, desde camisetas y buzos,
                hasta gorros y conjuntos originales que te dejarán alucinando. En nuestra tienda encontrarás todo lo que
                siempre has querido de tu artista favorito. Y si lo que buscas es hacer un regalo para un fan de Eminem,
                te vamos a dar un montón de ideas. Date el gusto de obtener la vestimenta que te representa, en su
                variedad de colores y diseños. El problema será elegir cuál te gusta más!</p>
              </header>
              <ItemListContainer />
            </>
          } />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
