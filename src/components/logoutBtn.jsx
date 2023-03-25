import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase.js";

export default function logOut() {
  const logOut = () => {
    signOut(auth)
      .then(() => {
        console.log('user deconecter');
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <button
      type="submit"
      onClick={logOut}
      className="btnLogOut"
    >Deconnexion</button>
  )
}