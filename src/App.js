import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext } from "react";

// 1 Crear el context
// 2 importar/exportar
// 3 consumirlo
// 4 Crear un provider
// 5 Crear una prop Value
const cartContext = createContext({ cart: [] });

function App() {
  return (
    <div className="app-body">
      <cartContext.Provider value={{ cart: [1, 5, 10], prueba: "ok" }}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />

            <Route path="/prueba" element={<h1>Prueba</h1>} />
            {/* Ruta con segmento URL dinamico */}
            <Route path="/product/:id" element={<ItemDetailContainer />} />
            <Route path="*" element={<h1>Page not found: 404</h1>} />
          </Routes>
        </BrowserRouter>
      </cartContext.Provider>
    </div>
  );
}

export default App;

export { cartContext };
