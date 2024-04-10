import { BrowserRouter, Routes, Route } from "react-router-dom"; 

import { ApiHome } from "./Paginas/ApiHome";
import { ApiAdd } from "./Paginas/ApiAdd";
import { ApiUpdate } from './Paginas/ApiUpdate'

export function AppRouter()
{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/"  element={<ApiHome />}></Route>
            <Route path="/add"  element={<ApiAdd />}></Route>
            <Route path="/atualizar/:id"  element={ <ApiUpdate /> }></Route>
        </Routes>
        </BrowserRouter>
    )
}