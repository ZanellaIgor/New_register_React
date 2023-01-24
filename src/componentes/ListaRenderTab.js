import axios from "axios";
import React, { useEffect, useState } from "react";


const baseURL = "https://windelweb.windel.com.br:3000/teste-front"

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);
  useEffect(() => {
    axios.get(baseURL)
      .then((response) => {
        console.log(response);
        setProdutos(response.data)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : ");
      });

  }, [produtos]);
  return (
    
    <table className="container-tabela">
      <thead>
        <tr>
          <th>Imagem</th>
          <th>Nome do Produto</th>
          <th>Referência</th>
          <th>Valor de Venda</th>
          <th>Fabricante</th>
          <th>Estoque</th>
          
        </tr>
      </thead>
      <tbody >
        {produtos.map(produto => (
          <tr key={produto.id} className="container-produto">
            <th><img src={produto.imagemProduto} alt="Imagem do Produto" className="imagem-produto " /></th>
            <th>{produto.nome}</th>
            <th>{produto.valorVenda}</th>
            <th>{produto.referencia}</th>
            <th>{produto.fabricante}</th>
            <th>{produto.estoque} {produto.unidadeMedida}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
}