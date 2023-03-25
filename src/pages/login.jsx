import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.js";
import { useNavigate } from "react-router-dom";

export default function login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/profil");
      })
      .catch((error) => {
        console.log(error);
      })
  }
  return (
    <div className="">
      <h1>login page</h1>
      <div>
        <form>
          <div>
            <label htmlFor="email">email</label>
            <input
              type="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
            />
          </div>
          <div>
            <label htmlFor="password">password</label>
            <input
              type="password"
              label="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="password"
            />
          </div>
          <button
            type="submit"
            onClick={onLogin}
          > login</button>
        </form>
      </div>
    </div>
  )
}