import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsFillGridFill } from 'react-icons/bs';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { FaListUl } from 'react-icons/fa'
import { AiFillEdit } from 'react-icons/ai'


const ordemCrescente = true;
const baseURL = "https://windelweb.windel.com.br:3000/teste-front"


function ListaRenderTab() {

  //inputs produtos
  const [produtos, setProdutos] = useState([]);
  const [descProduto, setDescProduto] = useState("")
  const [vlrVenda, setVlrVenda] = useState("")
  const [refProduto, setRefProduto] = useState("")
  const [un, setUn] = useState("")
  const [fabProduto, setFabProduto] = useState("")
  const [estoqueProduto, setEstoqueProduto] = useState("")
  const [imagem, setImagem] = useState("")

  //inputs hiden
  const [id, setId] = useState("")
  const [createdAt, setCreatedAt] = useState("");

  // Elementos visuais
  const [textButton, setTextButton] = useState("Enviar")
  const [tela, setTela] = useState("Produtos")
  const [inputs, setInputs] = useState(false)

  //inputs filtro
  const [nomeFilter, setNomeFilter] = useState({ nome: "" });

  const handleFilter = (e) => {
    console.log("aqui")
    const { nome, value } = e.target;
    setNomeFilter({ ...nomeFilter, [nome]: value })
    filterProducts()
  }

  const filterProducts = () => {
    console.log("depoois aqui")
    axios.get(`${baseURL}/`, { params: nomeFilter })
      .then(response => setProdutos(response.data))
      .catch(error => console.log(error));
  }

  const [refFilter, setRefFilter] = useState("");
  const [fabFilter, setFabFilter] = useState("");

  //criação do produto
  const produto = {
    id,
    createdAt,
    nome: descProduto,
    valorVenda: parseFloat(vlrVenda),
    referencia: refProduto,
    unidadeMedida: un,
    fabricante: fabProduto,
    estoque: parseInt(estoqueProduto),
    imagemProduto: imagem,
  }

  function addNovoProduto(e) {
    
    setTextButton("Enviar")
    const { id, createdAt, ...novoProduto } = produto
    e.preventDefault()

    axios.post(baseURL, novoProduto)
      .then(response => {
        console.log(response.data)
        this.setState(novoProduto)
        window.location.reload(true)
      })
      .catch(error => console.log(error))
    setInputs(false)
  }

  //Deletar Produto
  function deleteProdutos(id) {
    if (window.confirm('Tem certeza que deseja deletar este Produto?')) {
      console.log(baseURL)
      axios.delete(`${baseURL}/${id}`)
        .then(response => {
          console.log(response.data)
        })
        .catch(error => console.log(error))
    }
  }

  //Alterar produto
  function alterarProduto(produto) {
    setTextButton("Editar")
    setTela("Editar Produto")
    setDescProduto(produto.nome)
    setVlrVenda(produto.valorVenda)
    setRefProduto(produto.referencia)
    setUn(produto.unidadeMedida)
    setFabProduto(produto.fabricante)
    setEstoqueProduto(produto.estoque)
    setImagem(produto.imagemProduto)
    setId(produto.id)
    setCreatedAt(produto.createdAt)
    
    setInputs(true)
  }

  const editProduto = () => {
    console.log(produto)
    axios.patch(`${baseURL}/${produto.id}`, produto)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
    setInputs(false)
  }
  const ordernarEstoque = () => {
    console.log(produtos[13])
  }

  const registroVisivel = () => {
    setInputs(true)
    setTextButton("Enviar")
    setTela("Cadastrar Produto")

  }
  const voltarInputs = () => {
    setTela("Produtos")
    setInputs(false)
    setTextButton("")
    setDescProduto("")
    setVlrVenda("")
    setRefProduto("")
    setUn("")
    setFabProduto("")
    setEstoqueProduto("")
    setImagem("")
    setId("")
    setCreatedAt("")
  }

  useEffect(() => {
    axios.get(baseURL)
      .then((response) => {
        console.log(response);
        setProdutos(response.data)
      })
      .catch((error) => {
        console.error(error);
      });
  }, [inputs]);

  return (
    <><div className="title">
      <h2 >{tela}</h2>
      {!inputs && <button onClick={registroVisivel} className="salvar">Adiconar</button>}
    </div>
      <hr />
      {!inputs && <>
        <div className="container-filtro">
          <label>Nome:
            <input type="text" onChange={handleFilter} />
          </label>
          <label>Referência:
            <input type="text" onChange={(e) => setRefFilter(e.target.value)}/>
          </label>
          <label>Fabricante:
            <input type="text" onChange={(e) => setFabFilter(e.target.value)}/>
          </label>
          <button className="limpar-filtro">Limpar Filtros</button>
        </div>
      </>}
      <div className="container-form">
        {inputs && <form id="form">
          <div className="container-registro">
            <label htmlFor="descProduto">Descrição:</label>
            <input type="text" name="descProduto" id="descProdutoInput" value={descProduto} onChange={(e) => setDescProduto(e.target.value)} required />
          </div>

          <div className="container-registro">
            <label htmlFor="vlrVenda">Valor de Venda:</label>
            <input type="number" step="0.01" name="vlrVenda" id="vlrVendaInput" value={vlrVenda} onChange={(e) => setVlrVenda(e.target.value)} required />
          </div>

          <div className="container-registro">
            <label htmlFor="refProduto">Referência:</label>
            <input type="text" name="refProduto" id="refProdutoInput" value={refProduto} onChange={(e) => setRefProduto(e.target.value)} />
          </div>

          <div className="container-registro">
            <label htmlFor="un">Unidade de medida:</label>
            <input type="text" name="un" id="unInput" value={un} onChange={(e) => setUn(e.target.value)} required />
          </div>

          <div className="container-registro">
            <label htmlFor="fabProduto">Fabricante:</label>
            <input type="text" name="fabProduto" id="fabProdutoUnput" value={fabProduto} onChange={(e) => setFabProduto(e.target.value)} />
          </div>

          <div className="container-registro">
            <label htmlFor="estoqueProduto">Estoque:</label>
            <input type="number" name="estoqueProduto" id="estoqueProdutoInput" value={estoqueProduto} onChange={(e) => setEstoqueProduto(e.target.value)} />
          </div>

          <div className="container-registro-img">
            <label htmlFor="imagem">Imagem do Produto:</label>
            <input type="text" name="imagem" id="imagemInput" value={imagem} onChange={(e) => setImagem(e.target.value)} />
          </div>
          <label>
            <input type="hidden" value={id} />
          </label>
          <label>
            <input type="hidden" value={createdAt} />
          </label>

          <div className="container-button">
            <button type="button" className="limpar-dados" onClick={voltarInputs}>Voltar</button>
            <button type="button" className="salvar" onClick={textButton == "Editar" ? editProduto : addNovoProduto}>{textButton}</button>
          </div>
        </form>}
      </div>
      <table className="container-tabela">
        <thead>
          <tr>
            <th className="imagem-cabecalho">Imagem</th>
            <th>Nome do Produto</th>
            <th>Referência</th>
            <th /*onClick={() => ordernar(this, true)}*/><span>Valor de Venda</span></th>
            <th /*onClick={() => ordernar(this)}*/>Fabricante</th>
            <th onClick={ordernarEstoque}>Estoque</th>
            <th> <FaListUl /> <BsFillGridFill /> </th>
          </tr>
        </thead>

        <tbody >
          {produtos.map(produto => (
            <tr key={produto.id} className="container-produto">
              <td><img src={produto.imagemProduto} alt="Imagem do Produto" className="imagem-produto" /></td>
              <td>{produto.nome}</td>
              <td>{produto.referencia}</td>
              <td>{produto.valorVenda}</td>
              <td>{produto.fabricante}</td>
              <td>{produto.estoque} {produto.unidadeMedida}</td>
              <td>
                <AiFillEdit onClick={() => alterarProduto(produto)} className="imagem-acao-alterar" />
                <RiDeleteBin7Fill onClick={() => deleteProdutos(produto.id)} className="imagem-acao-deletar" />
              </td>
            </tr>

          ))}
        </tbody>

      </table>
    </>
  );
}
export default ListaRenderTab