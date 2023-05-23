import "./App.css";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import items from "./assets/items";
import Cart from "./components/Cart";
import LoginModal from "./components/LoginModal";
import CreateProductModal from "./components/CreateProductModal";
import EditProductModal from "./components/EditProductModal";

function App() {
  return (
    <div className="App">
      <Header />
      <ItemList />
      <Cart />
      <LoginModal />
      <CreateProductModal />
      <EditProductModal />
    </div>
  );
}

export default App;
