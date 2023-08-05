import React from "react";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { createOrder } from "../../services/firebase";
import { useNavigate } from "react-router-dom";

function CartContainer() {
  const { cart, removeItem } = useContext(cartContext);
  const navigate = useNavigate();
  //1  Vamos a crear nuestro objeto de orden de compra
  //! 2 Guardarlo en Firestore
  async function handleCheckout() {
    const orderData = {
      items: cart,
      buyer: { name: "Santiago", email: "santi@mail.com", phone: "123123123" },
      date: new Date(),
      total: 1500, // lo sacan del context
    };

    try {
      const idOrder = await createOrder(orderData);
      console.log(`Gracias por tu compra, tu numero de orden es ${idOrder}`);
      navigate(`/order-confirmation/${idOrder}`);
    } catch (error) {
      alert(`No se pudo realizar la compra ${error.message}`);
    }

    // 0: NO hagan alert ni lo muestren por consola
    // 1. SweetAlert o Toastify
    // 2. Redirigir al usuario a /order-confirmation/{idOrder}
    // 3. Rendering condicional

    // Luego de la compra: vaciar el carrito
    // clearCart();
  }

  return (
    <div>
      <h1>Cart</h1>
      {cart.map((item) => (
        <div key={item}>
          {console.log(item.id)}
          <h2>{item.title}</h2>
          <p>Precio unitario: ${item.price}</p>
          <p>Cantidad a comprar{item.count}</p>
          <p>Precio total ${item.count * item.price}</p>
          <button onClick={() => removeItem(item.id)}>Eliminiar</button>
        </div>
      ))}
      <br />
      <div>Total de la compra: $999</div>
      <button onClick={handleCheckout}>Comprar</button>
    </div>
  );
}

export default CartContainer;
