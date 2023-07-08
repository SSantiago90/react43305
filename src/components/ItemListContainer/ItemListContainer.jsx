import { useState, useEffect } from "react";
import getData from "../../services/asyncMock";
import Item from "../Item/Item";

function ItemListContainer() {
  // 1. Obtener de forma asíncrona los datos del ecommerce
  // 2. Guardamos la respuesta en un Estado -> useState
  // 3. Usamos key para el map
  // 4. Hacer un llamado a getData en un effect

  console.log("Renderizamos item list container");
  const [products, setProducts] = useState([]);

  async function requestProducts() {
    const respuesta = await getData();
    setProducts(respuesta);
  }

  useEffect(() => {
    console.log("Montaje ILC");
    requestProducts();
  }, []);

  return (
    <div>
      <h1>Listado de Productos</h1>
      <div className="flex-container">
        {products.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
