import './App.css';
import InputNewProduct from './componentes/InputNewProduct';


//import Inputs from './componentes/Inputs.js';
import ListaRender from './componentes/ListaRender';


function App() {
  return (
    <div clasName="App">
      <h2>Novo registro</h2>
      <InputNewProduct/>
      <ListaRender/>
    </div>

  );
}

export default App;
