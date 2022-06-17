import React from "react";

import {
  Div,
  Titulo,
  Input,
  Div2,
  Input2,
  Input3,
  Button,
  Label,
} from "./styled";
import "./style.css";

const AddEvento = () => {
  return (
    <Div>
      <Titulo>Adicionar novo evento</Titulo>
      <Div2>
        <Label htmlFor="arquivo">Adicionar imagem &#187;</Label>
        <input
          type="file"
          id="arquivo"
          onChange={(event) => console.log(event.target.value)}
        />
        <Input placeholder="Nome do evento" />
        <Input placeholder="Responsavel" />
        <Input3 placeholder="Descrição" />
        <div>
          <Input2 placeholder="Ola" type="date" />
          <Input2 placeholder="Ola" type="time" />
        </div>
        <Button>Cadastrar</Button>
      </Div2>
    </Div>
  );
};

export default AddEvento;
