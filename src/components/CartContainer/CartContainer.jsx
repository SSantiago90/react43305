import React from "react";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";

function CartContainer() {
  const { cart, removeItem } = useContext(cartContext);

  // Conditional Rendering cuando el carrito este vacío
  /*   return <h1>No hay productos en el carrito</h1>; */

  return (
    <div>
      <h1>Cart</h1>
      {cart.map((item) => (
        <div>
          <h2>{item.title}</h2>
          <p>Precio unitario: ${item.price}</p>
          <p>Cantidad a comprar{item.count}</p>
          <p>Precio total ${item.count * item.price}</p>
          <button onClick={() => removeItem(item.id)}>Eliminiar</button>
        </div>
      ))}

      <br />
      <div>Total de la compra: $999</div>
      <button>Comprar</button>
    </div>
  );
}

export default CartContainer;
