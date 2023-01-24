import { useState, useEffect } from 'react';
import './App.css';
import InputNewProduct from './componentes/InputNewProduct';



import ListaRenderTab from './componentes/ListaRenderTab';


function App() {
  return (
    <div clasName="App">
      <h1>Novo registro</h1>
      <hr />
      <InputNewProduct />
      <ListaRenderTab />
    </div>

  );
}

export default App;
