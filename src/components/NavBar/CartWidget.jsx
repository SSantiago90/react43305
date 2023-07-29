import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

function CartWidget() {
  const context = useContext(cartContext);
  console.log(context);

  return (
    <Link to="/cart">
      <div>
        🛒
        {/*  Si el valor es 0 - > no mostrar */}
        <span> {context.getTotalItemsInCart()} </span>
      </div>
    </Link>
  );
}

export default CartWidget;
