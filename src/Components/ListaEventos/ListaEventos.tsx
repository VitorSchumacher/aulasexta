import React from "react";
import { Div, DivTitulo, Titulo, Responsavel, Descricao } from "./styled";
import moment from "moment/moment";

const ListaEventos = (params) => {
  return (
    <Div key={params.id}>
      <DivTitulo>
        <Titulo>{params.evento}</Titulo>
      </DivTitulo>
      <Responsavel>
        <b>Responavel: </b>
        {params.responsavel}
      </Responsavel>
      <Descricao>
        <b>Descrição: </b>
        {params.descricao}
      </Descricao>
      <Descricao>
        <b>Hora: </b>
        {params.time}
      </Descricao>
      <Descricao>
        <b>Data: </b>
        {moment(`${params.date}`, "YYYY-MM-DD").format("DD/MM/YYYY")}
      </Descricao>
    </Div>
  );
};

export default ListaEventos;
