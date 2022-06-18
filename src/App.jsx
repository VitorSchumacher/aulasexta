import React, { useState } from 'react'
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home.tsx";

function App() {
  const [logged, setLogged] = useState(false)
  const [noLogin, setNoLogin] = useState(false)
  const [eventos, setEventos] = useState([]);

  return (
    <div>
      {logged ? (
        <Home setLogged={setLogged} noLogin={noLogin} setEventos={setEventos} eventos={eventos}/>
      ) : (
        <Login setLogged={setLogged} setNoLogin={setNoLogin}/>
      )}
    </div>
  );
}

export default App;
