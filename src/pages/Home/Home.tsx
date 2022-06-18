import React from "react";
import TopBar from "../../Components/TopBar/TopBar.tsx";
import AddEvento from "../../Components/AddEvento/AddEvento.tsx";
import ListaEventos from "../../Components/ListaEventos/ListaEventos.tsx";
import { Div, Div2 } from "./styled";

const Home = (props) => {
  return (
    <>
      <TopBar setLogged={props.setLogged} />
      <Div>
        {!props.noLogin && (
          <AddEvento setEventos={props.setEventos} eventos={props.eventos} />
        )}
        <Div2>
          {props.eventos.map((item, index) => (
            <ListaEventos
              key={index}
              evento={item.evento}
              responsavel={item.responsavel}
              descricao={item.descricao}
              image={item.image}
              time={item.time}
              date={item.date}
              noLogin={props.noLogin}
              onDelete={() => props.setEventos([...props.eventos].filter((evento, eventoIndex) => eventoIndex !== index))}
            />
          ))}
        </Div2>
      </Div>
    </>
  );
};

export default Home;
