import React, { useState } from "react";

function ItemCount(props) {
  const [clickCount, setClickCount] = useState(1);

  function handleClickAdd() {
    if (clickCount === props.stock) {
    } else {
      setClickCount(clickCount + 1);
    }
  }

  function handleClickSub() {
    if (clickCount > 1) {
      setClickCount(clickCount - 1);
    }
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="item-count-container"
      >
        <button
          disabled={props.stock === 0}
          className="item-count-button"
          onClick={handleClickSub}
        >
          -
        </button>
        <h2 className="count-text">{clickCount}</h2>
        <button
          disabled={props.stock === 0}
          className="item-count-button"
          onClick={handleClickAdd}
        >
          +
        </button>
      </div>

      <button
        disabled={props.stock === 0}
        //onClick={ props.onConfirm } -> Solo invocar la funcion
        onClick={() => props.onConfirm(clickCount)} //-> Solo invocar la funcion + parametros
        //onClick={(event) => props.onConfirm(clickCount, event)} // > Solo invocar la funcion + parametros + objeto event
        className="item-count-button add-to-cart-button"
      >
        <h4>Añadir al carrito</h4>
      </button>
    </div>
  );
}

export default ItemCount;
