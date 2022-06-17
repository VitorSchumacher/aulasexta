import React, { useState } from "react";

import { Div, Titulo, Input, Div2, Input2, Input3, Button } from "./styled";

const AddEvento = (props) => {
  const [evento, setEvento] = useState('')
  const [responsavel, setResponsavel] = useState('')
  const [descricao, setDescricao] = useState('')
  const [image, setImage] = useState('') 
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  return (
    <Div>
      <Titulo>Adicionar novo evento</Titulo>
      <Div2>
        <Input placeholder="Nome do evento" onChange={(e) => setEvento(e.target.value)}/>
        <Input placeholder="Responsavel" onChange={(e) => setResponsavel(e.target.value)}/>
        <Input3 placeholder="Descrição" onChange={(e) => setDescricao(e.target.value)}/>
        <div>
          <Input2 placeholder="Ola" type="date" onChange={(e) => setDate(e.target.value)}/>
          <Input2 placeholder="Ola" type="time" onChange={(e) => setTime(e.target.value)}/>
        </div>
        <Button 
          onClick={() => {
            const currentEvents = [...props.eventos]
            props.setEventos([...currentEvents, { evento, responsavel, descricao, image, date, time}])
        }}>Cadastrar</Button>
      </Div2>
    </Div>
  );
};

export default AddEvento;
