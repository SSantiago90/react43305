import "./App.css";
import ButtonComponent from "./components/ButtonComponent/ButtonComponent";
import Item from "./components/Item/Item";
import Saludo from "./components/Saludo/Saludo";

function App() {
  const botones = [
    { label: "Boton Principal" },
    { label: "Otro Boton" },
    { label: "Texto 3" },
  ];

  const items = [
    {
      title: "Pantalon Azul",
      price: 100,
      img: "https://alcatraz.com.ar/wp-content/uploads/2021/09/Pantalon-Ultra-azul_0000s_0006_Pantalon-Ultra-3.jpg",
    },
  ];

  return (
    <div>
      <button>Click me</button>
      <div className="App">
        <header className="App-header">
          
          <div className="saludo">            
            <Saludo user="Juan X" />
            <Saludo user="Santiago" />
          </div>

          <ButtonComponent colorFondo="red">{botones[0].label}</ButtonComponent>
          <ButtonComponent colorFondo="purple">
            {botones[1].label}
          </ButtonComponent>

          <ButtonComponent>
            <div>
              <h1>Clickeame</h1>
              <small>Soy otro botón</small>
            </div>
          </ButtonComponent>

        </header>
        <div>
          <Item img="/assets/remera.bmp" title="Remera 1" price={50} />
          <Item {...items[0]} />
        </div>

      </div>
    </div>
  );
}

export default App;
