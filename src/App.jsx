import React, { useState } from 'react'
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home.tsx";

function App() {

  const [logged, setLogged] = useState(false)
  return (
    <div>
      {logged ? (
        <Home setLogged={setLogged}/>
      ) : (
        <Login setLogged={setLogged}/>
      )}
    </div>
  );
}

export default App;
