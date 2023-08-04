import { useState, useEffect, useContext } from "react";
import { getProductData } from "../../services/firebase";
import { Link, useParams } from "react-router-dom";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import ItemCount from "../ItemCount/ItemCount";
import { cartContext } from "../../context/cartContext";

function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const { id } = useParams();

  const { addToCart, getItemInCart } = useContext(cartContext);

  const itemInCart = getItemInCart(id);

  const maxItems = itemInCart
    ? product.stock - itemInCart.count
    : product.stock;

  console.log(maxItems);
  useEffect(() => {
    async function requestProduct() {
      const respuesta = await getProductData(id);
      setProduct(respuesta);
    }

    requestProduct();
  }, [id]);

  function handleAddToCart(clickCount) {
    addToCart(product, clickCount);
    alert(`Producto agregado al carrito, cantidad: ${clickCount}`);
    setIsAddedToCart(true);
  }

  /* Separar esto en <ItemDetail .../> */
  return (
    <div style={{ marginBottom: "100px" }}>
      <Link to="/product/2">Ir al item 2</Link>
      <div>
        <img width={600} src={product.img} alt="imagen"></img>
      </div>
      <div>
        <h2>{product.title}</h2>
      </div>
      <div>
        <h4>$ {product.price}</h4>
        <small>{product.description}</small>
      </div>
      {product.stock > 0 ? (
        /* Si tenemos STOCK */
        isAddedToCart ? (
          <a href="/cart">Ir al carrito</a>
        ) : (
          <ItemCount stock={maxItems} onConfirm={handleAddToCart} />
        )
      ) : (
        // END si tenemos stock
        <p>No hay stock disponible</p>
      )}
      {itemInCart && (
        <h2>Ya agregaste {itemInCart.count} unidades de este producto</h2>
      )}
      <Link to="/">
        <ButtonComponent>Volver al inicio</ButtonComponent>
      </Link>
    </div>
  );
}

export default ItemDetailContainer;
