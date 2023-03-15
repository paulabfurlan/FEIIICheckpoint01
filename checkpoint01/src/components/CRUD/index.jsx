import { useState } from "react";
import style from "./styles.module.css"

function CRUD(props)
{
    const [titulo, setTitulo] = useState("");
    const [categoria, setCategoria] = useState("");
    const [data, setData] = useState("");
    const [descricao, setDescricao] = useState("");
    const [flagEdit, setFlagEdit] = useState(1);
    const [flagIni, setFlagIni] = useState(1);
    const [erroTitulo, setErroTitulo] = useState("");
    const [erroData, setErroData] = useState("");

    let dados = {
        id: 0,
        titulo: "Teste Editado",
        categoria: "Trabalho",
        data: "13032023",
        descricao: "Teste de criar uma tarefa"
    }

    if((props.estado !== "cadastro") && (flagEdit))
    {
        setTitulo(props.editarDados.titulo)
        setCategoria(props.editarDados.categoria)
        setData(props.editarDados.data)
        setDescricao(props.editarDados.descricao)

        setErroTitulo("")
        setErroData("")

        setFlagEdit(0)
    }

    if((flagIni) && ((titulo === "") || (data === "")) && (props.estado === "cadastro"))
    {
        if(titulo === "")
            setErroTitulo("Campo obrigatório!");
    
        if(data === "")
            setErroData("Campo obrigatório!");
        
        setFlagIni(0)
    }

    return (
        <div className={style.container}>
            <h2>{props.title}</h2>
            <input
                required
                onChange={(event) => {
                    if(event.target.value !== "")
                        setErroTitulo("");
                    else
                        setErroTitulo("Campo obrigatório!");

                    setTitulo(event.target.value)}}
                value={titulo}
                placeholder="Nome da tarefa"
            />

            <span>{erroTitulo}</span>

            <select
                value={categoria}
                onChange={(event) => setCategoria(event.target.value)}
            >
                <option value="">Selecione uma opção</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Lazer">Lazer</option>
                <option value="Prioridade">Prioridade</option>
                <option value="Outros">Outros</option>
            </select>

            <input
                required
                onChange={(event) => {
                    if(event.target.value !== "")
                        setErroData("");
                    else
                        setErroData("Campo obrigatório!");
                    
                    setData(event.target.value)}}
                value={data}
                placeholder="Data"
                type="date"
            />

            <span>{erroData}</span>

            <input
                required
                onChange={(event) => setDescricao(event.target.value)}
                value={descricao}
                placeholder="Descricao"
            />

            <div>
                <button onClick={() => {
                    dados.id = props.estado === "cadastro" ? 0 : props.editarDados.id
                    dados.titulo = titulo
                    dados.categoria = categoria
                    dados.data = data
                    dados.descricao = descricao
                    
                    console.log(dados)
                    props.obterDados(dados)
                    
                    setTitulo("")
                    setCategoria("")
                    setData("")
                    setDescricao("")
                    setFlagEdit(1)
                    setFlagIni(1)}}>Salvar</button>
            </div>
        </div>
    )
}

export default CRUD;