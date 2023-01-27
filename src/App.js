import { useState, useEffect } from 'react';
import './App.css';


import InputNewProduct from './componentes/InputNewProduct';
import ListaRenderTab from './componentes/ListaRenderTab';


function App() {
  return (
    <div clasName="App">
      <h2>Novo registro</h2>
      <hr />
      <InputNewProduct />
      <ListaRenderTab />
    </div>

  );
}
export default App;
