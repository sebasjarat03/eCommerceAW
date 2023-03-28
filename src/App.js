import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Item from './components/Item';
import ItemList from './components/ItemList';
import items from './assets/items';

function App() {
  return (
    <div className="App">
      <Header/>
      <ItemList items={items}/>
    </div>
  );
}

export default App;
