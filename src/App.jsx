import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import { ItemListcontainter } from './components/ItemListcontainter'
import { NavBar } from './components/Navbar'
import { CartWidget } from './components/CartWidget';

function App() {
  return (
  <>
  <NavBar />
  <ItemListcontainter greeting="¡Bienvenido!"/> 
  </>
  );
}

export default App;
