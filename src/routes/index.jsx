import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UsuariosPage } from "../pages";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<UsuariosPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router