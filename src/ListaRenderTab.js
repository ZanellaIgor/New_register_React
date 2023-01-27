import axios from "axios";
import React, { useEffect, useState, ReactDOM } from "react";
import { BsFillGridFill } from 'react-icons/bs';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { FaListUl } from 'react-icons/fa'
import { AiFillEdit } from 'react-icons/ai'




const ordemCrescente = true;
const baseURL = "https://windelweb.windel.com.br:3000/teste-front"


function ListaRenderTab() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios.get(baseURL)
      .then((response) => {
        console.log(response);
        setProdutos(response.data)
        
      })
      .catch((error) => {
        console.error(error);
      });

  }, []);


  //Deletar Produto
  function deleteProdutos(id) {
    if (window.confirm('Tem certeza que deseja deletar este Produto?')) {
      console.log(baseURL)
      
      axios.delete(`${baseURL}/${id}`)
        .then(response => {
          console.log(response.data)
          window.location.reload(true)
        })
        .catch(error => console.log(error))
    }
  }

  //Alterar produto
  function alterarProduto(id) {
    alert("Função não habilitada")

    axios.patch(`${baseURL}/${id}`, produtos)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }

  // function ordernar(element, valorNumerico) {
  //   console.log("foi")
  //   window.ordemCrescente = !window.ordemCrescente
  //   const asc = window.ordemCrescente;  // ordem: ascendente ou descendente
  //   const coluna = element.cellIndex
  //   // Coluna Ordenada
  //   const tabela = document.getElementById('tabelaListaProdutos');

  //   const linhas = Array.from(tabela.querySelectorAll('tbody tr'));
  //   console.log(linhas)

  //   linhas.sort((a, b) => {
  //       let a_val = a.children[coluna].textContent
  //       let b_val = b.children[coluna].textContent
  //       if (valorNumerico) {
  //           a_val = parseFloat(a_val)
  //           b_val = parseFloat(b_val)
  //           return (asc) ? (a_val - b_val) : (b_val - a_val)
  //       }
  //       return (asc) ? a_val.localeCompare(b_val) : b_val.localeCompare(a_val)
  //   })
  //   linhas.forEach(elem => {
  //       tabela.appendChild(elem)
  //   })


return (

  <table className="container-tabela">
    <thead>
      <tr>
        <th className="imagem-cabecalho">Imagem</th>
        <th /*onClick={() => ordernar(this)}*/>Nome do Produto</th>
        <th /*onClick={() => ordernar(this)}*/>Referência</th>
        <th /*onClick={() => ordernar(this, true)}*/> <span> Valor de Venda</span></th>
        <th /*onClick={() => ordernar(this)}*/>Fabricante</th>
        <th /*onClick={() => ordernar(this, true)}*/>Estoque</th>
        <th> <FaListUl /> <BsFillGridFill /> </th>
      </tr>
    </thead>

    <tbody >
      {produtos.map(produto => (
        <tr key={produto.id} className="container-produto">
          <td><img src={produto.imagemProduto} alt="Imagem do Produto" className="imagem-produto" /></td>
          <td>{produto.nome}</td>
          <td>{produto.valorVenda}</td>
          <td>{produto.referencia}</td>
          <td>{produto.fabricante}</td>
          <td>{produto.estoque} {produto.unidadeMedida}</td>
          <td><RiDeleteBin7Fill onClick={() => deleteProdutos(produto.id)} className="imagem-acao" /> <AiFillEdit onClick={() => alterarProduto(produto.id)} className="imagem-acao" /></td>
        </tr>

      ))}
    </tbody>

  </table>
);
}
export default ListaRenderTab