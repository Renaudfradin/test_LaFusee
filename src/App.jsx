import React from 'react';
import Router from './router/router.jsx';
import { Context } from './context/context.jsx'
import { useState } from 'react';

export default function App() {
  const [userLogin, setUserLogin] = useState("");
  const userIsLogin = userLogin;

  return (
    <Context.Provider value={{userIsLogin, setUserLogin}}>
       <Router userLogin={userLogin} setUserLogin={setUserLogin}></Router>
    </Context.Provider >
  )
}
