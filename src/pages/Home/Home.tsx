import React from "react";
import TopBar from "../../Components/TopBar/TopBar.tsx";
import AddEvento from "../../Components/AddEvento/AddEvento.tsx";
import ListaEventos from "../../Components/ListaEventos/ListaEventos.tsx";
import { Div, Div2 } from "./styled";
import { useState } from "react";

const Home = () => {
  const [eventos, setEventos] = useState([
    {
      evento: "vitor",
      responsavel: "vitinho",
      id: 1,
      descricao: "lorem ypsolon das quebradas a quebradas levando o humor",
    },
    {
      evento: "pedro",
      responsavel: "pedroca",
      id: 2,
      descricao:
        "certo dia caminhando descobri a sombra, pena q já estava escurecendo",
    },
    {
      evento: "cleber",
      responsavel: "vitinho",
      id: 3,
      descricao: "Ontem a tarde comi bananas a milanessa com requijãpo",
    },
    {
      evento: "Jóse",
      responsavel: "vitinho",
      id: 4,
      descricao:
        "lorem ypsolon das quebradas levando o humorquebradas a quebradas levando o humorquebradas a quebradas levando o humorquebradas a quebradas levando o humor",
    },
  ]);

  return (
    <>
      <TopBar />
      <Div>
        <AddEvento />
        <Div2>
          {eventos.map((item) => (
            <ListaEventos
              key={item.id}
              evento={item.evento}
              responsavel={item.responsavel}
              descricao={item.descricao}
            />
          ))}
        </Div2>
      </Div>
    </>
  );
};

export default Home;
