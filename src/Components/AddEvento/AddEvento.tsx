import React, { useState } from "react";

import {
  Div,
  Titulo,
  Input,
  Div2,
  Input2,
  Input3,
  Button,
  DivTime,
  Label,
} from "./styled";
import "./style.css";

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
        <Label htmlFor="arquivo">Adicionar imagem &#187;</Label>
        <input
          type="file"
          id="arquivo"
          onChange={(event) => console.log(event.target.value)}
        />
        <DivTime>
          <Input2 placeholder="Ola" type="date" onChange={(e) => setDate(e.target.value)}/>
          <Input2 placeholder="Ola" type="time" onChange={(e) => setTime(e.target.value)}/>
        </DivTime>
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
