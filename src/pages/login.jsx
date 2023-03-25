import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.js";
import { useNavigate } from "react-router-dom";
import "@/style/login.css";

export default function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/profil");
      })
      .catch((error) => {
        setError(error.code);
      })
  }
  return (
    <div className="container">
      <h2 className="titleForm">Connexion</h2>
      <form className="formLogin">
        <div>
          <input
            type="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email"
            className="inputLogin"
          />
        </div>
        <div>
          <input
            type="password"
            label="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Mot de passe"
            className="inputLogin"
          />
        </div>
        {error ? (<p className="errorMsg">utilisateur non trouvé ou mot de passe erroné</p>) :<></>}
        <button
          type="submit"
          onClick={onLogin}
          className="btnLog"
        >Connexion</button>
      </form>
    </div>
  )
}