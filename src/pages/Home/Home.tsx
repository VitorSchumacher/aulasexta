import React from "react";
import TopBar from "../../Components/TopBar/TopBar.tsx";
import AddEvento from "../../Components/AddEvento/AddEvento.tsx";
import ListaEventos from "../../Components/ListaEventos/ListaEventos.tsx";
import { Div, Div2 } from "./styled";
import { useState } from "react";

const Home = (props) => {
  const [eventos, setEventos] = useState([]);

  return (
    <>
      <TopBar setLogged={props.setLogged} />
      <Div>
        <AddEvento setEventos={setEventos} eventos={eventos} />
        <Div2>
          {eventos.map((item, index) => (
            <ListaEventos
              key={index}
              evento={item.evento}
              responsavel={item.responsavel}
              descricao={item.descricao}
              time={item.time}
              date={item.date}
            />
          ))}
        </Div2>
      </Div>
    </>
  );
};

export default Home;
