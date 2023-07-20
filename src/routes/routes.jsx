import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Inicio } from "../components/Inicio/Inicio";

export function MyRoutes(){

    return(
    <Router>
        <Routes>
            <Route exact path="/" element={<Inicio/>}/>
        </Routes>
    </Router>)

}