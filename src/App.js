import logo from "./logo.svg";
import "./App.css";

function App() {
  const palabra = "React";
  const saludo = `Este es el curso de ${palabra}`;

  function crearSaludo(nombre) {
    return `Hola ${nombre}`;
  }

  function calcularAlto() {
    return "200px";
  }

  const styleSaludo = {
    height: calcularAlto(),
    color: "green",
    backgroundColor: "white",
  };

  return (
    <div>
      <button>Click me</button>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{saludo}</p>

          {1 + 2 + 3}
          <br />
          {"1 + 2 + 3"}

          <div style={styleSaludo} className="saludo">
            {crearSaludo("Marcelo")}
          </div>

          <label htmlFor="name">
            Nombre:
            <input name="name" placeholder="ingresa tu nombre" />
          </label>

          <label htmlFor="age">
            Edad:
            <input name="age" placeholder="ingresa tu nombre" />
          </label>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </div>
  );
}

export default App;
