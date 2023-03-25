import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@pages/home.jsx";
import Login from "@pages/login.jsx";
import Singup from "@pages/singup.jsx";
import Profil from "@pages/profil.jsx";
import Navbar from "@/components/navbar.jsx";

export default function router() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/singup" element={<Singup />}></Route>
        <Route path="/profil" element={<Profil />}></Route>
      </Routes>
    </BrowserRouter>
  )
}