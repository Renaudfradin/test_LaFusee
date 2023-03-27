import React from "react";
import LogOut from "@/components/logoutBtn.jsx";
import { NavLink } from "react-router-dom";
import "@/style/navbar.css";

export default function navbar() {
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
      <NavLink to="/login">Conexion { userIsLogin }</NavLink>
      <NavLink to="/singup">Inscription</NavLink>
      <LogOut></LogOut>
    </div>
  )
}