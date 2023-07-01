import ButtonComponent from "../ButtonComponent/ButtonComponent";

function Item(props) {
  const { title, img, price } = props;

  return (
    <div>
      <h1>{title}</h1>
      <img width="200" src={img} />
      <p>$ {price}</p>
      <ButtonComponent colorFondo="green">Ver Producto</ButtonComponent>
    </div>
  );
}

export default Item;
