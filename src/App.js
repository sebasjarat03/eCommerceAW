import './App.css';
import Header from './components/Header';
import ItemList from './components/ItemList';
import items from './assets/items';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <Header />
      <ItemList items={items} />
      <Cart />
    </div>
  );
}

export default App;
