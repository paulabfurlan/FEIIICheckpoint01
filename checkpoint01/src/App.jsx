import CRUD from "./components/CRUD"
import Tarefa from "./components/Tarefa"
import { useState } from 'react'
import "./global.css"

function App() {
  
  const [estadoCRUD, setEstadoCRUD] = useState("cadastro");
  const [listaTarefas, setListaTarefas] = useState([]);
  const [dadosEdit, setDadosEdit] = useState({});

  const obterDados = (dados) => {
    console.log(dados.id)
    if(dados.id === 0)
    {
      const dado = {
        id: Date.now(),
        titulo: dados.titulo,
        categoria: dados.categoria,
        data: dados.data,
        descricao: dados.descricao
      }
      setListaTarefas([...listaTarefas, dado]);
    }
    else
    {
      //Pegando uma copia da lista de tarefas (convertidas para String)
      const copiaListaTarefasString = JSON.stringify(listaTarefas);

      //Desfazendo a conversao da string (voltando para um array de objetos)
      const copiaListaTarefas = JSON.parse(copiaListaTarefasString);

      //Encontrando o index do elemento a ser alterado
      const index = copiaListaTarefas.findIndex((item) => item.id === dados.id);

      //Alterando os valores do elemento encontrado
      if(index >= 0)
      {
        copiaListaTarefas[index].titulo = dados.titulo;
        copiaListaTarefas[index].categoria = dados.categoria;
        copiaListaTarefas[index].data = dados.data;
        copiaListaTarefas[index].descricao = dados.descricao;
  
        //Setando o state para causar a re-renderizacao
        setListaTarefas(copiaListaTarefas);
      }
    }

    setEstadoCRUD("cadastro")
  }

  const editarTarefa = (tarefa) => {
    setEstadoCRUD("editar")

    setDadosEdit(tarefa)
  }

  const apagarTarefa = (id) => {
    if (confirm("Deseja realmente apagar a tarefa?")) {
      const result = listaTarefas.filter((item) => item.id !== id);
      setListaTarefas(result);
    }
  }

  return (
    <div className="container">
      <CRUD obterDados={obterDados} editarDados={dadosEdit} title={estadoCRUD === "cadastro" ? "Cadastrar Tarefa" : "Editar Tarefa"} estado={estadoCRUD}/>

      <div className="tarefas">
        <div className="tituloTarefas">
          <h2 className="h2Tarefas">Minhas tarefas</h2>
          <div className="gapTarefas"></div>
          <p className="h3Tarefas">Total: {listaTarefas.length}</p>
        </div>

        {listaTarefas.length > 0 ? (
          <ul>
            {listaTarefas.map((item) => (
              <li key={item.id}>
                <Tarefa editarTarefa={editarTarefa} apagarTarefa={apagarTarefa} tarefa={item}/>
              </li>
            ))}
          </ul>
        ) : (
          <p className="nenhumaTarefa">Nenhuma tarefa cadastrada</p>
        )}
      </div>
    </div>
  )
}

export default App
