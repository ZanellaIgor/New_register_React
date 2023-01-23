
import axios from "axios";
import { useState } from "react";


const Inputs = () => {
    const url = "https://windelweb.windel.com.br:3000/teste-front"
    function addProduto() {
        console.log("Yes")
        //Dados do Input

        //const form = document.querySelector("#form")
        const descProdutoInput = document.getElementById("descProdutoInput")
        const vlrVendaInput = (document.querySelector("#vlrVendaInput"))
        const refProdutoInput = document.querySelector("#refProdutoInput")
        const unInput = document.querySelector("#unInput")
        const fabProdutoUnput = document.querySelector("#fabProdutoUnput")
        const estoqueProdutoInput = document.querySelector("#estoqueProdutoInput")
        const imagemInput = document.querySelector("#imagemInput")

        //Criação hora
        //const criacaoProduto = new Date()


        //transformando em valores
        const descProduto = (descProdutoInput).value
        const vlrVenda = (vlrVendaInput).value
        const refProduto = (refProdutoInput).value
        const un = (unInput).value
        const fabProduto = (fabProdutoUnput).value
        const estoqueProduto = (estoqueProdutoInput).value
        const imagem = (imagemInput).value



        //criação do produto
        const novoProduto = {

            nome: descProduto,
            valorVenda: Number(vlrVenda),
            referencia: refProduto,
            unidadeMedida: un,
            fabricante: fabProduto,
            estoque: Number(estoqueProduto),
            imagemProduto: imagem,
        }
        console.log(novoProduto)


        axios.post(url, novoProduto)
            .then(response => {
                console.log(response.data)
            })
            .catch(error => console.log(error))    
    }

return (
    <div>
        <div className="container-form">
            <form id="form">
                <div className="container-registro">
                    <label htmlFor="descProduto">Descrição*:</label>
                    <input type="text" name="descProduto" id="descProdutoInput" />
                </div>

                <div className="container-registro">
                    <label htmlFor="vlrVenda">Valor de Venda*:</label>
                    <input type="number" step="0.01" name="vlrVenda" id="vlrVendaInput" />
                </div>

                <div className="container-registro">
                    <label htmlFor="refProduto">Referência:</label>
                    <input type="text" name="refProduto" id="refProdutoInput" />
                </div>

                <div className="container-registro">
                    <label htmlFor="un">Unidade de medida*:</label>
                    <input type="text" name="un" id="unInput" />
                </div>

                <div className="container-registro">
                    <label htmlFor="fabProduto">Fabricante:</label>
                    <input type="text" name="fabProduto" id="fabProdutoUnput" />
                </div>

                <div className="container-registro">
                    <label htmlFor="estoqueProduto">Estoque:</label>
                    <input type="number" name="estoqueProduto" id="estoqueProdutoInput" />
                </div>

                <div className="container-registro-img">
                    <label htmlFor="imagem">Imagem do Produto:</label>
                    <input type="text" name="imagem" id="imagemInput" />
                </div>

                <div className="container-button">
                    <button type="reset" className="limpar-dados">Limpar Campos</button>
                    <button type="button" className="salvar" onClick={addProduto}>Salvar</button>
                </div>
            </form>
        </div>
    </div>

)
}

export default Inputs