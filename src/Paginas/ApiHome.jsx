import axios from "axios"
import { useEffect, useState } from "react"

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from "react-router-dom";


export function ApiHome()
{
    const [valor, setvalor] = useState([])
    const navi = useNavigate()

    useEffect(() => { 

        axios.get("http://localhost:3000/usuarios")
        .then(res => { setvalor( res.data ) })
        .catch(error =>   console.log(error) )

    })

   return(
        <>
        <div className="container"><br />
            <div className="text-end"><Link to="/add" className="btn btn-primary">Adicionar</Link></div>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                    </tr>
                    </thead>
                    <tbody>
                            {
                            valor.map((d, i) =>(
                                <tr key={i} >
                                    <td>{d.id}</td>
                                    <td>{d.nome}</td>
                                    <td>{d.email}</td>
                                    <td>
                                        <Link to={`/atualizar/${d.id}`} className="btn btn-sm btn-success">Editar</Link>
                                        <Link onClick={e => hardSubmit(d.id)} className="btn btn-sm ms-2 btn-danger">Excluir</Link>
                                    </td>
                                </tr>
                            ))
                            }
                    </tbody>
                </table>
            </div>
            
        
        </>
    )
    //função de exclusão
    function hardSubmit(id)
    {
        const conf = window.confirm("Deseja realmente excluir esse registro??")
        if(conf)
        {
            axios.delete("http://localhost:3000/usuarios/"+id)
            .then(resposta => {
                alert("Dados excluidos com sucesso!!")
                navi("/")
            }).catch(err => console.log(err))
        }
    }
    
}

