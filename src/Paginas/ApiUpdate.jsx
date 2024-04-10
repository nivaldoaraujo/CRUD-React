import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"





export function ApiUpdate()
{
    //variáveis
    const {id} = useParams()
    const [data, setData] = useState([])
    const navigat = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:3000/usuarios/"+id)
        .then(resp => setData(resp.data))
        .catch(err => console.log(err))
        },[])
    function HandSubmit(event)
    {
        event.preventDefault()
        axios.put("http://localhost:3000/usuarios/"+id, data)
        .then(resp => { 
            alert("Dados atualizados com msucesso!!")
            navigat("/")
         })
    }

    return(
        <>
            <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
            <div className="w-45 border bg-light p-5">
                <form onSubmit={HandSubmit}>
                    <div>
                        <label htmlFor="name">Id</label><br />
                        <input type="text" name="id" disable value={data.id} className="from-control" 
                        />
                    </div><br />
                    <div>
                        <label htmlFor="email">Nome</label><br />
                        <input type="text" name="email" value={data.nome} className="from-control"
                        onChange={e=>setData({...data, nome: e.target.value})} />
                    </div><br />
                    <div>
                        <label htmlFor="email">E-mail</label><br />
                        <input type="email" name="email" value={data.email} className="from-control"
                        onChange={e=>setData({...data, email: e.target.value})} />
                    </div><br />
                    <button className="btn btn-info">Atualizar</button>

                </form>
            </div>
        </div>
        </>
    )
}
