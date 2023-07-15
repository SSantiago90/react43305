import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app-body">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />

          <Route
            path="/prueba"
            element={
              <h1>
                Prueba<button>Volver</button>
              </h1>
            }
          />
          {/* Ruta con segmento URL dinamico */}
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<h1>Page not found: 404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
