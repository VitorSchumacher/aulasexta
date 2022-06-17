import React from "react";
import { Div, DivTitulo, Titulo, Responsavel, Descricao } from "./styled";

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
    </Div>
  );
};

export default ListaEventos;
