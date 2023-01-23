import axios from "axios";
import { useState } from "react";

const InputNewProduct = () => {
    function addNovoProduto(e){
        e.preventDefault()
    }
    const [descProduto, setDescProduto] = useState()
    const [vlrVenda, setVlrVenda] = useState()
    const [refProduto, setRefProduto] = useState()
    const [un, setUn] = useState()
    const [fabProduto, setFabProduto] = useState()

   
    console.log(descProduto)

  return (
    <div>
        <div className="container-form">
            <form id="form">
                <div className="container-registro">
                    <label htmlFor="descProduto">Descrição*:</label>
                    <input type="text" name="descProduto" id="descProdutoInput" onChange={(e) => setDescProduto(e.target.value)}/>
                </div>

                <div className="container-registro">
                    <label htmlFor="vlrVenda">Valor de Venda*:</label>
                    <input type="number" step="0.01" name="vlrVenda" id="vlrVendaInput" onChange={(e) => setVlrVenda(e.target.value)}/>
                </div>

                <div className="container-registro">
                    <label htmlFor="refProduto">Referência:</label>
                    <input type="text" name="refProduto" id="refProdutoInput" onChange={(e) => setRefProduto(e.target.value)}/>
                </div>

                <div className="container-registro">
                    <label htmlFor="un">Unidade de medida*:</label>
                    <input type="text" name="un" id="unInput" onChange={(e) => setUn(e.target.value)}/>
                </div>

                <div className="container-registro">
                    <label htmlFor="fabProduto">Fabricante:</label>
                    <input type="text" name="fabProduto" id="fabProdutoUnput" onChange={(e) => setFabProduto(e.target.value)}/>
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
                    <button type="submit" className="salvar" >Salvar</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default InputNewProduct