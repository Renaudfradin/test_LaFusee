import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase.js";
import { useNavigate } from "react-router-dom";

export default function logOut() {
  const navigate = useNavigate();

  const logOut = () => {
    signOut(auth)
      .then(() => {
        console.log('user deconecter');
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <div>
      <button
        type="submit"
        onClick={logOut}
      >logOUT</button>
    </div>
  )
}