import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.js";
import { useNavigate } from "react-router-dom";
import "@/style/login.css";

export default function singup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/profil");
      })
      .catch((error) => {
        console.log(error.code, "//", error.message);
        setError(error.code);
      })
  }

  return (
    <div className="container">
      <h2 className="titleForm">Inscription</h2>
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
            placeholder="password"
            className="inputLogin"
          />
        </div>
        {error ? (<p className="errorMsg">email invalide</p>) :<></>}
        <button
          type="submit"
          onClick={onSubmit}
          className="btnLog"
        >Inscription</button>
      </form>
    </div>
  )
}