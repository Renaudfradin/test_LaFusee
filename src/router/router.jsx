import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "@pages/home.jsx"
import Login from "@pages/login.jsx"
import Singup from "@pages/singup.jsx"
import Tasks from "@pages/tasks.jsx"

export default function router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/singup" element={<Singup />}></Route>
          <Route path="/tasks" element={<Tasks />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}