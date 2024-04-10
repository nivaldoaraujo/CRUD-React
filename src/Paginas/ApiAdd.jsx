import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';


export function ApiAdd()
{
    const [inputData, setInputData] = useState({ nome:'', email:'' })
    const navi = useNavigate()

    function HandSubmit(event){
        event.preventDefault()
        axios.post("http://localhost:3000/usuarios", inputData)
        .then(res => { alert("Dados inseridos com sucesso!!") 
        navi('/') })
        .catch(err => console.log(err))

    }
   
    return(
        <>
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
            <div className="w-45 border bg-light p-5">
                <form  onSubmit={HandSubmit}>
                    <div>
                        <label htmlFor="name">Nome</label><br />
                        <input type="text" name="name" className="from-control" 
                        onChange={e=>setInputData({...inputData, nome: e.target.value})}/>
                    </div><br />
                    <div>
                        <label htmlFor="email">E-mail</label><br />
                        <input type="email" name="email" className="from-control"
                        onChange={e=>setInputData({...inputData, email: e.target.value})} />
                    </div><br />
                    <button className="btn btn-info">Enviar</button>

                </form>
            </div>
        </div>
        </>
    )
}

