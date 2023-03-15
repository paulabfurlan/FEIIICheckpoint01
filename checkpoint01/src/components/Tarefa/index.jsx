import style from "./styles.module.css"

function Tarefa(props)
{
    return (
        <div className={style.container}>
            <p>{props.tarefa.titulo}</p>
            <p>{props.tarefa.categoria}</p>
            <p>{props.tarefa.data}</p>
            <p>{props.tarefa.descricao}</p>

            <button onClick={() => props.editarTarefa(props.tarefa)}>Alterar</button>
            <button onClick={() => props.apagarTarefa(props.tarefa.id)}>Remover</button>
        </div>
    );
}

export default Tarefa;