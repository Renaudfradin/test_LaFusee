import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.js"
import { useNavigate } from "react-router-dom";

export default function singup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/login");
        console.log("utilisateur creeeee");
      })
      .catch((error) => {
        console.log(error.code,"//", error.message);
      })
  }

  return (
    <div>
      <h1>singup page</h1>
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
            onClick={onSubmit}
          > SIGUP</button>
        </form>
      </div>
    </div>
  )
}