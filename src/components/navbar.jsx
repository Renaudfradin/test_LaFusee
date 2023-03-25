import React,{ useEffect, useState } from "react";
import LogOut from "@/components/logoutBtn.jsx";
import { NavLink } from "react-router-dom";
import { auth } from "../firebase.js";
import { onAuthStateChanged } from "firebase/auth";
import "@/style/navbar.css";

export default function navbar() {
  const [email, setEmail] = useState("");
  
  useEffect(() => {
    console.log(auth);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(email);
        console.log(user);
        setEmail(user);
      }
    })
  });
  
  return (
    <div className="navbarBlock">
      {/* {email ? (
        <LogOut></LogOut>
      ) : (
        <>
          <NavLink to="/login">Conexion</NavLink>
          <NavLink to="/singup">Inscription</NavLink>
        </>
      )
      } */}
      <NavLink to="/login">Conexion</NavLink>
      <NavLink to="/singup">Inscription</NavLink>
      <LogOut></LogOut>
    </div>
  )
}