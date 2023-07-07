import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function CartWidget() {
  return (
    <div>
      <FontAwesomeIcon icon={faCartShopping} />
      <span>2</span>
    </div>
  );
}

export default CartWidget;
