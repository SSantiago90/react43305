import { useState, useEffect } from "react";
import getData, { getCategoryData } from "../../services/asyncMock";
import Item from "../Item/Item";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  async function requestProducts() {
    /*  "/" -> categoryId -> undefined */
    /*  "/category/remeras" -> categoryId -> remeras */

    /*  let respuesta = [];
    if(categoryId === undefined) {
      respuesta = await getData();
    }
    else {
      respuesta = await getData(categoryId);
    } */
    let respuesta = categoryId
      ? await getCategoryData(categoryId)
      : await getData();
    setProducts(respuesta);
  }

  useEffect(() => {
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
