 import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="app">
      <div>
        <h1>Todo Palos</h1>
      </div>
      <Navbar />
      <ItemListContainer greeting="Bienvenidos a Todo Palos" />
    </div>
  );
}

export default App;
