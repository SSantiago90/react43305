import { useContext } from "react";
import { cartContext } from "../../context/cartContext";

function CartWidget() {
  const context = useContext(cartContext);
  console.log(context);

  return (
    <div>
      🛒
      <span> {context.getTotalItemsInCart()} </span>
    </div>
  );
}

export default CartWidget;
