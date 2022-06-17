import React from "react";

import { Div, Titulo, Input, Div2, Input2, Input3, Button } from "./styled";

const AddEvento = () => {
  return (
    <Div>
      <Titulo>Adicionar novo evento</Titulo>
      <Div2>
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
