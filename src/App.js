import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

import ItemListContainer from './components/itemListContainer/ItemListContainer';
import NavBar from './components/navBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer/>
      <ItemDetailContainer/>
      
    </div>
  );
}

export default App;
