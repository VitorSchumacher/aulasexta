import React from "react";
import { Div, DivTitulo, Titulo, Responsavel, Descricao, Img } from "./styled";
import moment from "moment/moment";
import IconTrash from "../../assets/image/bi_trash.svg";

const ListaEventos = (params) => {
  return (
    <Div key={params}>
      <DivTitulo image={params.image}>
        {!params?.noLogin && (
          <Img src={IconTrash} onClick={params.onDelete}/>
        )}
        <Titulo noLogin={params.noLogin}>{params.evento}</Titulo>
      </DivTitulo>
      <Responsavel>
        <b>Responavel: </b>
        {params.responsavel}
      </Responsavel>
      <Descricao>
        <b>Descrição: </b>
        {params.descricao}
      </Descricao>
      {params?.time && (
        <Descricao>
          <b>Hora: </b>
          {params.time}
        </Descricao>
      )}
      {params?.date && (
      <Descricao>
        <b>Data: </b>
        {moment(`${params.date}`, "YYYY-MM-DD").format("DD/MM/YYYY")}
      </Descricao>
      )}
    </Div>
  );
};

export default ListaEventos;
