import React from 'react'
import axios from "axios";

const ListaRender = () => {
    const url = "https://windelweb.windel.com.br:3000/teste-front"

    function criarCelula(textoDaCelula) {

        let td = document.createElement("td")
        td.innerHTML = textoDaCelula
        return td
    }


    //limpaProdutos

    function limpaProdutos() {
        const tabelaProdutos = document.querySelectorAll("#tabelaListaProdutos > tr")
        if (tabelaProdutos && tabelaProdutos.length > 0) {
            tabelaProdutos.forEach(tr => tr.remove())
        }

    }


    //função lista de produtos
    async function listaDeProdutos() {
        const tabelaProdutos = document.querySelector("#tabelaListaProdutos")
        limpaProdutos()
        axios.get(url)

            .then(response => {
                const produtos = response.data

                //console.log(produtos) 
                for (const [key, produto] of Object.entries(produtos)) {
                    //console.log(produto.nome) 


                    let celulaNome = criarCelula(produto.nome)
                    let celulaReferencia = criarCelula(produto.referencia)
                    let celulaValorDeVenda = criarCelula(produto.valorVenda)
                    let celulaFabricante = criarCelula(produto.fabricante)
                    let celulaEstoque = criarCelula(produto.estoque)

                    //Icones (del)
                    let celularIcons = criarCelula(`<button onclick="onDeleteClick(${produto.id})"><i class="fa-solid fa-trash"></i></button>`)

                    //Imagem na tabela
                    let celulaImagemProduto = criarCelula(`<img src="${produto.imagemProduto}" class="imagem-produto">`)

                    let linha = document.createElement("tr")
                    linha.classList.add("container-produto")



                    linha.appendChild(celulaImagemProduto)
                    linha.appendChild(celulaNome)
                    linha.appendChild(celulaReferencia)
                    linha.appendChild(celulaValorDeVenda)
                    linha.appendChild(celulaFabricante)
                    linha.appendChild(celulaEstoque)
                    linha.appendChild(celularIcons)

                    tabelaProdutos.appendChild(linha)

                }
                //renderResults.textContent = JSON.stringify(produtos)    
            })
            .catch(error => console.log(error))
    }
        return (
            <table className="container-tabela">
                <thead className="container-cabecalho">
                    <tr>
                        <th>Imagem</th>
                        <th>Nome do Produto</th>
                        <th>Referência</th>
                        <th>Valor de Venda</th>
                        <th>Fabricante</th>
                        <th>Estoque</th>
                        <th>
                            <i className="fa-solid fa-list-ul"></i>
                            <i className="fa-solid fa-table-list"></i>
                        </th>
                    </tr>
                </thead>

                <tbody id="tabelaListaProdutos">

                </tbody>
            </table>

        )
    }

    export default ListaRender