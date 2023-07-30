import { InputControl, InputPass } from "../InputControl/InputControl";
import { Link, useNavigate } from "react-router-dom";
import { FirebaseApp } from "../../firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, collection, setDoc } from "firebase/firestore";
import React, { useState } from "react";

const auth = getAuth(FirebaseApp);

export function Login() {
  const firestore = getFirestore(FirebaseApp);
  const navigate = useNavigate();
  const [values, setvalues] = useState({ email: "", pass: "" });
  const [errorMsg, setErrorMsg] = useState([]);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const Loguearse = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Datos Incompletos");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        navigate("/Home");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div>
      <div>
        <h1>Login</h1>

        <InputControl
          label="Email"
          onChange={(event) =>
            setvalues((prev) => ({ ...prev, email: event.target.value }))
          }
        />

        <InputPass
          label="Contraseña"
          onChange={(event) =>
            setvalues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />

        <div>
          <b>{errorMsg}</b>
          <button onClick={Loguearse} disabled={submitButtonDisabled}>
            Ingresar
          </button>
          <p>
            Crear cuenta
            <span>
              <br></br>
              <br></br>
              <Link to="/Signup">Registrarme</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
