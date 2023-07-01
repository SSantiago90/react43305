import "./button.css";

function ButtonComponent(props) {
  /* { colorFondo: "red", label: "Boton"} */
  // destructuring
  const { children, colorFondo } = props;

  console.log(props);

  const styleButton = {
    backgroundColor: colorFondo,
  };

  return (
    <>
      <button style={styleButton} className="btn">
        {children}
      </button>
    </>
  );
}

export default ButtonComponent;
