function Saludo(props) {
  // props: { username: "Juan X"}

  return (
    <div>
      <h2>Bienvenido {props.user} al curso de React</h2>
    </div>
  );
}

export default Saludo;
