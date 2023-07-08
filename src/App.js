import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <div>
        {/*   {itemsData.map((item) => <Item {...item} /> )} */}
        <ItemListContainer greeting="Bienvenidos" />
      </div>
    </div>
  );
}

export default App;
