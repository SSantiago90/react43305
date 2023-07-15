import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div>
      <div>
        <NavBar />
        <ItemListContainer greeting="Bienvenidos" />
      </div>
    </div>
  );
}

export default App;
