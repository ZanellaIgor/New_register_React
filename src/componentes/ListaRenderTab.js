import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsFillGridFill } from 'react-icons/bs';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { FaListUl } from 'react-icons/fa'


const baseURL = "https://windelweb.windel.com.br:3000/teste-front/"


export default function Produtos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios.get(baseURL)
      .then((response) => {
        console.log(response);
        setProdutos(response.data)
      })
      .catch((error) => {
        console.error("ops! ocorreu um erro : ");
      });

  },);

{/*deleteProduto = (id) =>{
    if (window.confirm('Tem certeza que deseja deletar este Produto?')) {
      axios.delete(`${baseURL}/${id}`)
        .then(response => {
          console.log(response.data)
        })
        .catch(error => console.log(error))
    }

  }*/}

  return (

    <table className="container-tabela">
      <thead>
        <tr>
          <th>Imagem</th>
          <th>Nome do Produto</th>
          <th>Referência</th>
          <th> <span> Valor de Venda</span></th>
          <th>Fabricante</th>
          <th>Estoque</th>
          <th> <FaListUl /> <BsFillGridFill /> </th>
        </tr>
      </thead>
      <tbody >
        {produtos.map(produto => (
          <tr key={produto.id} className="container-produto">
            <td><img src={produto.imagemProduto} alt="Imagem do Produto" className="imagem-produto " /></td>
            <td>{produto.nome}</td>
            <td>{produto.valorVenda}</td>
            <td>{produto.referencia}</td>
            <td>{produto.fabricante}</td>
            <td>{produto.estoque} {produto.unidadeMedida}</td>
            <td onClick={() => this.deleteProduto(produto.id)}><RiDeleteBin7Fill /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}