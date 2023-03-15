import style from "./styles.module.css"
import editar from "../../img/editar.png"
import remover from "../../img/remover.png"

function Tarefa(props)
{
    return (
        <div className={style.container}>
            <div className={style.nomeDesc}>
                <p className={style.tituloTar}>{props.tarefa.titulo}</p>
                <p className={style.categTar}>{props.tarefa.categoria}</p>
                <p className={style.descrTar}>{props.tarefa.descricao}</p>
            </div>

            <div className={style.controles}>
                <p className={style.dataTar}>{props.tarefa.data}</p>

                <div className={style.gap}></div>

                <div className={style.botoes}>
                    <button onClick={() => props.editarTarefa(props.tarefa)}>
                        <img className={style.botao} src={editar}/>
                    </button>
                    <button onClick={() => props.apagarTarefa(props.tarefa.id)}>
                        <img className={style.botao} src={remover}/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Tarefa;