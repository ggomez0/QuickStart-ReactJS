import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Inicio } from "../components/Inicio/Inicio";
import { Login } from "../components/login/login";
import { Signup } from "../components/login/Signup";

export function MyRoutes(){

    return(
    <Router>
        <Routes>
            <Route exact path="/" element={<Inicio/>}/>
            <Route exact path="/Login" element={<Login/>}/>
            <Route exact path="/Signup" element={<Signup/>}/>
        </Routes>
    </Router>)

}