import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Inicio } from "../components/Inicio/Inicio";
import { Login } from "../components/Login/Login";
import { Signup } from "../components/Signup/Signup";
import { Home } from "../components/Home/Home";

export function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Inicio />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Signup" element={<Signup />} />
        <Route exact path="/Home" element={<Home />} />
      </Routes>
    </Router>
  );
}
