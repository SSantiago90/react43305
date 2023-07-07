import "./App.css";
import CartWidget from "./components/CartWidget/CartWidget";
import Item from "./components/Item/Item";

function App() {
  const items = [
    {
      title: "Pantalon Azul",
      price: 100,
      img: "https://alcatraz.com.ar/wp-content/uploads/2021/09/Pantalon-Ultra-azul_0000s_0006_Pantalon-Ultra-3.jpg",
    },
  ];

  return (
    <div>
      {/* <NavBar> */}
      <nav>
        <CartWidget />
      </nav>
      <div className="App">
        <Item img="/assets/remera.bmp" title="Remera 1" price={50} />
        <Item {...items[0]} />
      </div>
    </div>
  );
}

export default App;
